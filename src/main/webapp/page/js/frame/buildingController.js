var buildingModule = angular.module('buildingModule', ['paginationService', 'anajaxService']);

buildingModule.controller('buildingController', function($scope, $http, pagination, anajax) {

	var build = {};
	build.id = '';
	$scope.build = build;
	
	var findBuildings = function(param) {
		var url = commonutil.actionPath + '/building/getBuildingList';
		anajax.doajax(url,param,function(data) {
			$scope.buildings = data;
			$(data).each(function(index){
				if(data[index].id == $scope.build.id) {
					$scope.build = data[index];
				}
			});
		});
	};
	
	findBuildings();
	
	$scope.findFloors = function(param) {
		var url = commonutil.actionPath + '/floor/findFloors';
		anajax.doajax(url,{'buildId':param},function(data){
			$scope.floors = data;
		});
	};
	
	$scope.getFloor = function(param) {
		$scope.floor = param;
	};

});