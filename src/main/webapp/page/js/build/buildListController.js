var buildListModule = angular.module('buildListModule', ['paginationService', 'anajaxService']);
buildListModule.controller('buildListController', function($scope, $http, pagination, anajax) {
	var buildQuery = {};
	buildQuery.selection = '';
	$scope.buildQuery = buildQuery;
	
	
	/**
	 * 查询楼栋列表
	 */
	var query = function(params) {
		var url = commonutil.actionPath + "/building/getBuildingList";
		anajax.doajax(url, params, function(data) {
			$scope.builds = data;
		});
	}
	
	/**
	 * 查询页码
	 */
	var page = function(params) {
		var purl = commonutil.actionPath + '/building/pagination';
		anajax.doajax(purl, params, function(data) {
			pagination.setData(data);
			$scope.pagination = data;
		});
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
	 * 跳转到指定页
	 */
	$scope.goPage = function(selNum) {
		pagination.goPage(selNum);
		query($scope.pagination);
		page($scope.pagination);
	};
	
	/**
	 * 展开修改页
	 */
	$scope.modifyBuild = {};
	$scope.goChange = function(index) {
		$scope.rightPart = 'modify';
		pageutil.showRightBarAn('楼栋管理');
		var modifyBuild = $scope.builds[index];
		$scope.build0 = $scope.builds[index];
		angular.copy(modifyBuild, $scope.modifyBuild);
	};
	
	/**
	 * 展开添加页
	 */
	$scope.modAlarm = {};
	$scope.goAdd = function(index) {
		$scope.rightPart = 'add';
//		$scope.showRightBar = true;
		pageutil.showRightBarAn('楼栋管理');
		var modAlarm = $scope.alarms[index];
		modAlarm.alarmIndex = index;
		angular.copy($scope.alarms[index], $scope.modAlarm);
	};
	
	/**
	 * 添加页
	 */
	
	$scope.doAdd = function($valid) {
		if (checkBuildName($scope.addBuild.name) == false) return;
		var url = commonutil.actionPath + '/building/addBuild';
		anajax.doajax(url, $scope.addBuild, function(data) {
			if (data.resultValue == true) {
				pageutil.showTip('添加成功');
				pageutil.hideRightBar();
				query(buildQuery);
			    page(buildQuery);
			} else {
				alert(data.message);
			}
		});
	};
	
	/**
	 * 修改页
	 */
	$scope.doChange = function($vaild){
		if($scope.modifyBuild.name == null || $scope.modifyBuild.name == ""){
			alert('楼栋名不能为空');			
		}else{
			//修改备注
			if($scope.modifyBuild.name == $scope.build0.name){
				checkModifyName($scope.modifyBuild.name);
			}else{
				//修改楼名
				var url = commonutil.actionPath + "/building/getBuildingList";
				var select = {};
				select.selection = $scope.modifyBuild.name;
				anajax.doajax(url, select , function(data) {
					$scope.builds2 = data;
					if($scope.builds2.length >= 1){
						alert("该楼栋已经存在")
						$scope.builds2 = null;
					}else{
						checkModifyName($scope.modifyBuild.name);
					}
				});
				
			}		
		}
	}
	
	
	/**
	 * 验证修改的楼栋名
	 */
	var checkModifyName = function(buildname){
		$scope.modifyBuild.id = $scope.build0.id;
		var url = commonutil.actionPath + '/building/updateBuild';
		anajax.doajax(url, $scope.modifyBuild, function(data) {
			if (data.resultValue == true) {
				pageutil.showTip('修改成功');
				pageutil.hideRightBar();
				query(buildQuery);
			} else {
				alert(data.message);
			}
		});
	}
	
	/**
	 * 验证楼名
	 */
	var checkBuildName = function(buildName) {
		var flag = true;
		if (buildName.length == 0) {
			alert('楼名不可为空!');
			flag = false;
		}
		return flag;
	};
	
	/**
	 * 执行删除操作
	 */
	$scope.doDel = function(index){
		if (confirm('您确定要删除吗?删除后将不可恢复!')) {
			var url = commonutil.actionPath + '/building/delBuild';
			anajax.doajax(url, {'buildId':$scope.builds[index].id}, function(data) {
				if (data.resultValue == true) {
					pageutil.showTip('删除楼宇成功');
					query(buildQuery);
				    page(buildQuery);
				} else {
					alert(data.message);
				}
			});
		}
	}
	
	
	query();
	page();
	
	$scope.doQuery = function() {
		query(buildQuery);
	    page(buildQuery);
	}
});
