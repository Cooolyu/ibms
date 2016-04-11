var doorModule = angular.module('doorModule', ['paginationService', 'anajaxService']);

doorModule.controller('doorController', function($scope, $http, pagination, anajax) {
	
	setInterval(function(){
	    $scope.$apply(showmap);
	},10000);
	
	var showmap = function() {
		var url = commonutil.actionPath + '/door/getInfo';
		anajax.doajax(url,{'floorId':$('#floorId').val()},function(data) {
			$scope.assets = data;
		});
	};
	
	showmap();
	
	var doorQuery = {};
	doorQuery.startTime = '';
	doorQuery.endTime = '';
	doorQuery.assetsId = '';
	$scope.doorQuery = doorQuery;
	
	$scope.showDetail = function(assets) {
		$scope.detail = assets;
		$('#showModal').modal('show');
		doorQuery.assetsId = assets.id;
		doorQuery.startTime = '';
		doorQuery.endTime = '';
		query(doorQuery);
		page(doorQuery);
	};
	
	$scope.doQuery = function () {
		query(doorQuery);
		page(doorQuery);
	};
	
	/**
	 * 查询
	 */
	var query = function(params) {
		var url = commonutil.actionPath + '/door/history';
		anajax.doajax(url, params, function(data) {
			$scope.historys = data;
		});
	};
	
	/**
	 * 查询页码
	 */
	var page = function(params) {
		var purl = commonutil.actionPath + '/door/count';
		anajax.doajax(purl, params, function(data) {
			pagination.setData(data);
			$scope.pagination = data;
		});
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
});