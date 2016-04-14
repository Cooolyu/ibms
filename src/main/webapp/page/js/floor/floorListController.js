var floorListModule = angular.module('floorListModule', ['paginationService', 'anajaxService']);
floorListModule.controller('floorListController', function($scope, $http, pagination, anajax) {
	
	var floorQuery = {};
	floorQuery.selection = "";
	floorQuery.buildId = $("#hidden").val();
	$scope.floorQuery = floorQuery;
//	$scope.selectVal = {};
	
	/**
	 * 查询楼层列表
	 */
	var query = function(params) {
		var url = commonutil.actionPath + "/floor/getFloorList";
		anajax.doajax(url, params, function(data) {
			$scope.floors = data;
		});
		
		//查询资产系统信息
		var url = commonutil.actionPath + "/floor/selAssetCate";
		anajax.doajax(url, params, function(data) {
			$scope.assetCates = data;
			$scope.assetCate = $scope.assetCates[0]
		});
		
		$scope.fShow = true;
		$scope.aShow = false;
	}
	
	/**
	 * 查询页码
	 */
	var page = function(params) {
		var purl = commonutil.actionPath + '/floor/floorPages';
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
	$scope.modifyFloor = {}
	var modifyFloor = {}
	$scope.name = "";
	$scope.goChange = function(index) {
		$scope.rightPart = 'modify';
		pageutil.showRightBarAn('楼层管理');
		var modifyFloor = $scope.floors[index];
//		$scope.modifyFloor = modifyFloor;
		angular.copy(modifyFloor, $scope.modifyFloor);
		$scope.name = modifyFloor.name;
	};
	
	
	/**
	 * 展开添加页
	 */
	$scope.modAlarm = {};
	$scope.goAdd = function(index) {
		
		$scope.rightPart = 'add';
		pageutil.showRightBarAn('楼层管理');
		$scope.selectVals = [{id:1 , name : "添加楼层"},{id:2 , name : "添加子系统"}];
		$scope.selectVal = $scope.selectVals[0];
	};
	
	//添加页下拉框change事件
	$scope.selChange = function(selectVal) {
		if (selectVal.id == 1) {
			$scope.fShow = true;
			$scope.aShow = false;
		}else {
			$scope.fShow = false;
			$scope.aShow = true;
		}
	}
	
	/**
	 * 展开查看页
	 */
	$scope.goView = function(index) {
		$scope.viewFloorName = $scope.floors[index].name;
		$scope.viewFloorUrl = $scope.floors[index].imgUrl;
		$('#showModal').modal('show');
	};
	
	/**
	 * 添加页
	 */
	$scope.doAdd = function($valid) {
		
		var addFloor = {};
		addFloor.buildingId = $scope.floorQuery.buildId;
		if ($scope.selectVal.id ==1){
			if(checkBuildName($scope.addFloor.floorName) == false) return;
			addFloor.name = $scope.addFloor.floorName;
			doAddFloor(addFloor);
			$scope.addFloor.floorName = '';
		}else{
			if(checkBuildName($scope.addFloor.assetName) == false) return;
			addFloor.name = $scope.addFloor.assetName;
			addFloor.sysModuleId = $scope.assetCate.sysModuleId;
			doAddFloor(addFloor);
			$scope.addFloor.assetName = '';
		}
	};
	
	var doAddFloor = function(addFloor) {
		var url = commonutil.actionPath + '/floor/addFloor';
		anajax.doajax(url, addFloor, function(data) {
			if (data.resultValue == true) {
				pageutil.showTip('添加成功');
				pageutil.hideRightBar();
				query(floorQuery);
			    page(floorQuery);
			} else {
				alert(data.message);
			}
		});
	}
	
	
	
	/**
	 * 验证修改的楼层名
	 */
	var checkModifyName = function(buildname){
		$scope.modifyBuild.id = $scope.build.id;
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
		if (buildName.length == 0 || buildName == "") {
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
			var url = commonutil.actionPath + '/floor/delFloor';
			anajax.doajax(url, {'floorId':$scope.floors[index].id}, function(data) {
				if (data.resultValue == true) {
					pageutil.showTip('删除楼层成功');
					query($scope.floorQuery);
				    page($scope.floorQuery);
				} else {
					alert(data.message);
				}
			});
		}
	}
	
	
	query($scope.floorQuery);
	page($scope.floorQuery);
	
	$scope.doQuery = function() {
		query($scope.floorQuery);
		page($scope.floorQuery);
	}
});
