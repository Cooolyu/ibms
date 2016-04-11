var alarmlistModule = angular.module('alarmlistModule', ['paginationService', 'anajaxService']);

alarmlistModule.controller('alarmlistController', function($scope, $http, pagination, anajax) {
	var alarmQuery = {};
	alarmQuery.startTime = '';
	alarmQuery.endTime = '';
	alarmQuery.status = '0';
	$scope.alarmQuery = alarmQuery;
	
	$scope.statuss = [{'id':'1','name':'未确认'},{'id':'2','name':'已确认'}];
	
    /**
	 * 查询
	 */
	var query = function(params) {
		var url = commonutil.actionPath + '/alarm/alarmList';
		anajax.doajax(url, params, function(data) {
			$scope.alarms = data;
		});
	};
	
	/**
	 * 查询页码
	 */
	var page = function(params) {
		var purl = commonutil.actionPath + '/alarm/pagination';
		anajax.doajax(purl, params, function(data) {
			pagination.setData(data);
			$scope.pagination = data;
		});
	};
	
	query();
	page();
	
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
	 * 展开修改页
	 */
	$scope.modAlarm = {};
	$scope.goChange = function(index) {
		$scope.rightPart = 'modify';
//		$scope.showRightBar = true;
		pageutil.showRightBarAn('报警处理');
		var modAlarm = $scope.alarms[index];
		modAlarm.alarmIndex = index;
		angular.copy($scope.alarms[index], $scope.modAlarm);
	};
	
	/**
	 * 执行修改
	 */
	$scope.deal = function(param,index) {
		var url = commonutil.actionPath + '/alarm/deal';
		anajax.doajax(url, param, function(data) {
			$scope.modAlarm.status = 2;
			angular.copy($scope.modAlarm, $scope.alarms[index]);
			pageutil.showTip('确认完成');
			pageutil.hideRightBar();
				
		});
	};
	
	$scope.doQuery = function() {
		query(alarmQuery);
		page(alarmQuery);
	};
});