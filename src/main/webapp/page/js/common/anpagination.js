/**
 * 
 */
var paginationService = angular.module('paginationService', []);

paginationService.factory('pagination', function() {
	var pagination = {};
	
	pagination.setData = function(data) {
		var start = 1;
		var end = data.pages;
		
		if (data.currentPage > 5) {
			start = data.currentPage - 5;
		}
		if (data.currentPage + 5 < data.pages) {
			end = data.currentPage + 5;
		}
		
		var pageNums = [];
		for (var i = start; i <= end; i++) {
			pageNums[i-start] = i;
		}
		data.pageNums = pageNums;
		pagination.data = data;
	};
	
	pagination.setFun = function(fun) {
		pagination.fun = fun;
	};
	
	pagination.nextPage = function() {
		if (pagination.data.currentPage >= pagination.data.pages) return;
		pagination.data.start = pagination.data.start + pagination.data.count;
		pagination.data.currentPage = pagination.data.currentPage + 1;
//		pagination.fun();
	};
	
	pagination.lastPage = function() {
		if (pagination.data.currentPage == 1) return;
		pagination.data.start = pagination.data.start - pagination.data.count;
		pagination.data.currentPage = pagination.data.currentPage - 1;
//		pagination.fun();
	};
	
	pagination.goPage = function(selNum) {
		pagination.data.currentPage = selNum;
		pagination.data.start = (selNum - 1) * pagination.data.count;
//		pagination.fun();
	};
	
	return pagination;
});