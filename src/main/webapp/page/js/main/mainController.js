var mainModule = angular.module('mainModule', ['paginationService', 'anajaxService']);

mainModule.controller('mainController', function($scope, $http, pagination, anajax) {
	
	
	var clock = function(){
		$("#clock2").MyDigitClock({
			fontSize:25, 
			fontFamily:"Century gothic", 
			fontColor: "#000", 
			fontWeight:"bold", 
			bAmPm:true,
			background:'#FFFFFF',
			bShowHeartBeat:true
			});
	};
	
	var location = function(){
		var url = commonutil.actionPath + '/building/getBuilding';
		anajax.doajax(url,{"id":1},function(data) {
			$scope.building1 = data;
			$('#bulid1').attr('title',data.name);
			$('#bulid1').attr('data-original-title',data.name);
			$('#bulid1').attr('data-content',data.memo);
			$('[data-toggle="popover"]').popover();
			$('#bulid1').popover('show');
			$('[class="popover fade top in"]:first').attr('onclick',"javascript:location.href='../alarm/show/"+data.id+"'");
			$('[class="popover fade top in"]:first').css('cursor','pointer');
		});
		anajax.doajax(url,{"id":2},function(data) {
			$scope.building2 = data;
			$('#bulid2').attr('title',data.name);
			$('#bulid2').attr('data-original-title',data.name);
			$('#bulid2').attr('data-content',data.memo);
			$('[data-toggle="popover"]').popover();
			$('#bulid2').popover('show');
			$('[class="popover fade top in"]').eq(1).attr('onclick',"javascript:location.href='../alarm/show/"+data.id+"'");
			$('[class="popover fade top in"]').eq(1).css('cursor','pointer');
			
		});
	};
	
	var doorProcess = function() {
		var url = commonutil.actionPath + '/main/door';
		anajax.doajax(url,{},function(data) {
			$scope.door = data;

			   $('#doorProcess').text($scope.door.normal+'/'+($scope.door.normal+$scope.door.erro));
			process2.drawProcess($scope.door.normal,$scope.door.erro,0,0,'doorProcess');
		});
	};
	
	var cameraProcess = function() {
		var url = commonutil.actionPath + '/main/camera';
		anajax.doajax(url,{},function(data) {
			$scope.camera = data;

			   $('#cameraProcess').text($scope.camera.normal+'/'+($scope.camera.normal+$scope.camera.erro));
			process2.drawProcess($scope.camera.normal,$scope.camera.erro,0,0,'cameraProcess');
		});
	};
	
	doorProcess();
	
	cameraProcess();
	clock();
	location();
	
	var showText = function(text) {
    	var tipId = 'tip';
    	$('#'+tipId).empty();
    	$('#'+tipId).append(text);
    	var allWidth = document.body.clientWidth;
    	var allHeight = window.innerHeight || document.body.clientHeight;
    	var tipWidth = $('#'+tipId).width();
    	var tipHeight = $('#'+tipId).height();
    	
    	var scrollTop = document.body.scrollTop > document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
    	$('#'+tipId).css('top', Math.abs((allHeight-tipHeight)/2+scrollTop));
    	$('#'+tipId).css('left', Math.abs((allWidth-tipWidth)/2));
    	
    	$('#'+tipId).fadeIn(250, function() {
    		setTimeout(function() {
    			$('#'+tipId).fadeOut(250);
    			$('html').css('overflow', 'auto');
    		}, 3000);
    	});

    };
    
    $scope.bufang = function() {
    	var url = commonutil.actionPath + '/alarm/bufang';
    	anajax.doajax(url,{'option':'open'},function(data) {
    		showText("布防中，请等待...");
    		$scope.building1.status = 1;
    	});  	
    };

    $scope.chefang = function() {
    	var url = commonutil.actionPath + '/alarm/bufang';
    	anajax.doajax(url,{'option':'close'},function(data) {
    		showText("撤防中，请等待...");
    		$scope.building1.status = 2;
    	});      	
    };
    
    
   
	
});