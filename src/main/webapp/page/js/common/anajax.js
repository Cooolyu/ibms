/**
 * 
 */

var anajaxService = angular.module('anajaxService', [], function($httpProvider) {
	// Use x-www-form-urlencoded Content-Type
	  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	 
	  /**
	   * The workhorse; converts an object to x-www-form-urlencoded serialization.
	   * @param {Object} obj
	   * @return {String}
	   */
	  var param = function(obj) {
	    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
	      
	    for(name in obj) {
	      value = obj[name];
	        
	      if(value instanceof Array) {
	        for(i=0; i<value.length; ++i) {
	          subValue = value[i];
	          fullSubName = name + '[' + i + ']';
	          innerObj = {};
	          innerObj[fullSubName] = subValue;
	          query += param(innerObj) + '&';
	        }
	      }
	      else if(value instanceof Object) {
	        for(subName in value) {
	          subValue = value[subName];
	          fullSubName = name + '[' + subName + ']';
	          innerObj = {};
	          innerObj[fullSubName] = subValue;
	          query += param(innerObj) + '&';
	        }
	      }
	      else if(value !== undefined && value !== null)
	        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
	    }
	      
	    return query.length ? query.substr(0, query.length - 1) : query;
	  };
	 
	  // Override $http service's default transformRequest
	  $httpProvider.defaults.transformRequest = [function(data) {
	    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	  }];
});

anajaxService.factory('anajax', function($http) {
	var doanajax = {};
	doanajax.doajax = function(requrl, datas, successFun) {
		$http({'url':requrl, 'method': 'post', 'data': datas}).success(function(data, status) {
			successFun(data);
		}).error(function(data, status) {
//			alert('error:status(' + status + '):' + data);
			if (status == 401) {
				window.location = commonutil.path + '/do/errorcode/401';
			} else if (status == 403) {
				window.location = commonutil.path + '/do/errorcode/403';
			} else if (status == 404) {
				window.location = commonutil.path + '/do/errorcode/404';
			} else {
				window.location = commonutil.path + '/do/errorcode/500';
			}
		});
	};
	
	return doanajax;
});