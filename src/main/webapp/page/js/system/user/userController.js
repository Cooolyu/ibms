/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: userController.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013年11月7日   |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
var userModule = angular.module('userModule', ['paginationService', 'anajaxService']);

userModule.controller('UserController', function($scope, $http, pagination, anajax) {
	var userQuery = {};
	userQuery.userName = '';
	$scope.userQuery = userQuery;
	
	/**
	 * 查询
	 */
	var query = function(params) {
		var url = commonutil.actionPath + '/system/user/list/query';
		anajax.doajax(url, params, function(data) {
			$scope.users = data;
		});
	};
	
	/**
	 * 查询页码
	 */
	var page = function(params) {
		var purl = commonutil.actionPath + '/system/user/pagination';
		anajax.doajax(purl, params, function(data) {
			pagination.setData(data);
			$scope.pagination = data;
		});
	};
	
	/**
	 * 查询所有角色
	 */
	var roles = {};
	var getRoles = function() {
		var url = commonutil.actionPath + '/system/user/allroles';
		anajax.doajax(url, {}, function(data) {
			roles = data;
			$scope.roles = roles;
		});
	};
	
	// ******* 初始化 start *******
	query(userQuery);
	page(userQuery);
	getRoles();
	// ******* 初始化 end *******
	
	/**
	 * 跳转到指定页
	 */
	$scope.goPage = function(selNum) {
		pagination.goPage(selNum);
		query($scope.pagination);
		page($scope.pagination);
	};
	
	/**
	 * 上一页
	 */
	$scope.lastPage = function() {
		pagination.lastPage();
		query($scope.pagination);
		page($scope.pagination);
	};
	
	/**
	 * 下一页
	 */
	$scope.nextPage = function() {
		pagination.nextPage();
		query($scope.pagination);
		page($scope.pagination);
	};
	
	/**
	 * 点击查询
	 */
	$scope.doquery = function() {
		query(userQuery);
		page(userQuery);
	};
	
	/**
	 * 展开添加页
	 */
	$scope.goAdd = function() {
		$scope.rightPart = 'add';
		pageutil.showRightBarAn('添加用户');
		$scope.addUser = {username:'',phone:'', roleId:-1, password: '', passwordAgain: ''};
	};
	
	/**
	 * 展开修改页
	 */
	$scope.modUser = {};
	$scope.goChange = function(index) {
		$scope.rightPart = 'modify';
//		$scope.showRightBar = true;
		pageutil.showRightBarAn('修改用户');
		var modUser = $scope.users[index];
		modUser.userIndex = index;
		//modUser.phone='';
		modUser.password = '';
		modUser.passwordAgain = '';
		angular.copy(modUser, $scope.modUser);
	};
	
	/**
	 * 执行修改
	 */
	$scope.doModify = function(userName,phone,index) {
		if (checkUserName(userName) == false) return;
		var url = commonutil.actionPath + '/system/user/modify';
		anajax.doajax(url, $scope.modUser, function(data) {
			if (data.resultValue == true) {
				for (role in roles) {
					if (roles[role].id == $scope.modUser.roleId) {
						$scope.modUser.roleName = roles[role].roleName;
					}
				}
				angular.copy($scope.modUser, $scope.users[index]);
				pageutil.showTip('修改成功');
				pageutil.hideRightBar();
				
			} else {
				alert(data.message);
			}
		});
	};
	
	/**
	 * 重置密码
	 */
	$scope.resetPassword = function(index) {
		if (checkPassword($scope.modUser.password, $scope.modUser.passwordAgain) == false) return;
		
		var url = commonutil.actionPath + '/system/user/modify/pass';
		
		var pass = CryptoJS.SHA1($scope.modUser.password).toString();
		anajax.doajax(url, {'id':$scope.modUser.id, 'password':pass}, function(data) {
			if (data.resultValue == true) {
				pageutil.showTip('密码设置成功');
				pageutil.hideRightBar();
			} else {
				alert(data.message);
			}
		}, 'json');
	};
	
	/**
	 * 执行添加
	 */
	$scope.doAdd = function($valid) {
		if (checkUserName($scope.addUser.username) == false) return;
		if (checkPassword($scope.addUser.password, $scope.addUser.passwordAgain) == false) return;
		if ($scope.addUser.roleId == -1) {
			alert('请选择一个角色!');
			return;
		}
		var url = commonutil.actionPath + '/system/user/add';
		var pass = CryptoJS.SHA1($scope.addUser.password).toString();
		$scope.addUser.password = pass;
		anajax.doajax(url, $scope.addUser, function(data) {
			if (data.resultValue == true) {
				pageutil.showTip('添加成功');
				pageutil.hideRightBar();
				query(userQuery);
				page(userQuery);
			} else {
				alert(data.message);
			}
		});
	};
	
	/**
	 * 执行删除
	 */
	$scope.doDel = function(index) {
		if (confirm('您确定要删除吗?删除后将不可恢复!')) {
			var url = commonutil.actionPath + '/system/user/del';
			anajax.doajax(url, {'userId':$scope.users[index].id}, function(data) {
				if (data.resultValue == true) {
					pageutil.showTip('用户删除成功');
					$scope.users[index].statusStr = '已删除';
					$scope.users[index].status = 1;
				} else {
					alert(data.message);
				}
			});
		}
	};
	
	
	/**
	 * 验证手机号码
	 */
	var checkPhone = function(phone){
		var flag = true;
		if (phone.length == 0) {
			alert('手机号码不能为空!');
			flag = false;
			return flag;
		} 
		var vPhone=commonutil.stringTrim(phone);
		
		var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
		if(vPhone==''){
			alert('手机号码不能填空格！');
			flag=false;
		}else if(!commonutil.checkRate(phone)){
			alert('手机号码格式不正确！');
			flag=false;
		}else if(!reg.test(vPhone)){
			alert("手机号码格式不对！");
			  flag=false;
		}
		
		return flag;
		
		
	};
	/**
	 * 验证用户名
	 */
	var checkUserName = function(userName) {
		var flag = true;
		if (userName.length == 0) {
			alert('用户名不可为空!');
			flag = false;
		} else if (commonutil.stringTrim(userName).length != userName.length) {
			alert('用户名开始和结尾不可以是空格!');
			flag = false;
		} else if (commonutil.checkLength(userName, 16) == false) {
			alert('用户名不可以超过16个字!');
			flag = false;
		}
		return flag;
	};
	
	/**
	 * 验证密码
	 */
	var checkPassword = function(pass, passAgain) {
		var flag = true;
		var pattern1  =  /^[a-z\d_]+$/i; //数字，英文，下划线
		if (pass != passAgain) {
			alert('两次输入的密码不一致!');
			flag = false;
		} else if (pass.length > 16 || pass.length < 6) {
			alert('密码长度只能为6-16个字符!');
			flag = false;
		} else if(!pattern1.test(pass)){
			alert("密码只能为数字，英文，下划线!");
			flag = false;
		}
		return flag;
	};
});