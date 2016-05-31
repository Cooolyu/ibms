var floorListModule = angular.module('dictionaryModule', ['paginationService', 'anajaxService']);
floorListModule.controller('dictionaryController', function($scope, $http, pagination, anajax) {
	
	
	//显示父字典
	var pdictList = function(params) {
		var url = commonutil.actionPath +"/dictionary/pdictList";
		anajax.doajax(url,params, function(data) {
			$scope.pdicts = data;
		});
	}
	pdictList();
	
	$scope.pdictSelect = function() {
		alert($scope.pdict.id)
	}
});
