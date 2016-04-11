/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: assetscompare.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年7月8日        |      1.0        | GMSZ)Zhou Yunlong | original version
 *******************************************************************************
 */

var assetsCompareModule = angular.module('assetsCompareModule', ['anajaxService']);

assetsCompareModule.controller('AssetsCompareController', function($scope, $http, anajax) {
	//提醒维护数据
	var maintainedData = [];
	
	/**
	 * 所有点类别数据
	 */
	var queryCategoryData= function() {
		var url = commonutil.actionPath + '/assets/chart/all/pie/category';
		anajax.doajax(url, {}, function(data) {
			drawPie('pieCategory',data);
		}, 'json');
	};
	
	/**
	 * 所有点贵重度数据
	 */
	var queryValuableData= function() {
		var url = commonutil.actionPath + '/assets/chart/all/pie/valuable';
		anajax.doajax(url, {}, function(data) {
			drawPie('pieValuable',data);
		}, 'json');
	};
	
	/**
	 * 所有点品牌数据
	 */
	var queryBrandData= function() {
		var url = commonutil.actionPath + '/assets/chart/all/pie/brand';
		anajax.doajax(url, {}, function(data) {
			drawPie('pieBrand',data);
		}, 'json');
	};
	
	/**
	 * 取得默认年
	 */
	var getDefaultYears = function() {
		var url = commonutil.actionPath + '/assets/chart/pointsanddefaultyear';
		anajax.doajax(url, {}, function(data) {
			var defaultyear = data.defaultyear;
			$scope.yearsdefault = defaultyear;
			var years = [];
			for(var i=0;i<10;i++){
				if(i<6){
					years[i]=parseInt(defaultyear)-parseInt((5-i));
				}else{
					years[i]=parseInt(defaultyear)+parseInt((i-5));
				}
			}
			$scope.years=years;
			$scope.points=data.monitorPoints;
			queryMaintainedData($scope.yearsdefault,true);
		}, 'json');
	};
	
	//--------------------- 初始化开始 ---------------------//
	queryCategoryData();
	queryValuableData();
	queryBrandData();
	getDefaultYears();
	//----------------------初始化结束--------------------//

	/**
	 * 查询维护数据
	 */
	var queryMaintainedData = function(year,isfirst) {
		var url = commonutil.actionPath + '/assets/chart/all/data';
		anajax.doajax(url, {'year':year}, function(data) {
		angular.copy(data, maintainedData);
		if(isfirst){
			drawMaintainedLine(maintainedData);
		}else{
			$scope.doselect(-1);
		}
		
		}, 'json');
	};
	
	
	/**
	 * 画曲线图
	 */
	var drawMaintainedLine =  function(data) {
		var ticks = [[1, '1月'], [2, '2月'], [3, '3月'], [4, '4月'], [5, '5月'], [6, '6月'], [7, '7月'], [8, '8月'], [9, '9月'], [10, '10月'], [11, '11月'], [12, '12月']];
		var placeholder = $('#placeholder');
		$("<div id='tooltip'></div>").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			opacity: 0.80
		}).appendTo("body");
		
		placeholder.bind("plothover", function (event, pos, item) {
			if (item) {
					y = item.datapoint[1].toFixed(2);
				$("#tooltip").html(item.series.label + ": " + y)
					.css({top: item.pageY+5, left: item.pageX+5})
					.fadeIn(200);
			} else {
				$("#tooltip").hide();
			}
		});
		
		var options = {
		    xaxis: {ticks: ticks},
		    series: {
		        lines: { show: true },
		        points: { show: true,radius: 4}
		    },
		    grid: {
				hoverable: true,
				clickable: true
			}
		};
		var lineDataSet = [];
		for(var index=0;index<data.length;index++){
			var maintainData = [];
			var maintainItem = data[index].barResultCol;
			
			for (var i = 0; i < maintainItem.length; i++) {
				
				maintainData[i] = [maintainItem[i].tick, maintainItem[i].dataValue];
			}
			lineDataSet[index] = {label: data[index].pointName, data: maintainData};
		}
		$.plot(placeholder, lineDataSet, options);
	};
	
	/**
	 * 画饼图
	 */
	var drawPie = function(containerId, data) {
		var pieOptions = {
			series: {
				pie: {
			    	show: true,
			    	radius: 1,
			    	label: {
			        	show: true,
				        radius: 3/4,
			            background: {
			            	opacity: 0.8,
			            	color: '#000'
			           	}
			       	}
			   	}
			},
			legend: {
				show: false
			}
		};

		$.plot($("#"+containerId), data,pieOptions);
	};
	
	
	/**
	 * 选择某一年
	 */
	$scope.doquery = function(year) {
		$scope.yearsdefault = year;
		queryMaintainedData(year);
	};
	
	
	/**
	 * 选择某一年
	 */
	$scope.doselect = function(pointId) {
		var maintainedDataShow = [];
		var pointSelect = [];
		$("input[name=point_check]").each(function(i){
			if($("#btn_"+$(this).val()).hasClass('active')){
				if($(this).val()!=pointId){
					pointSelect.push($(this).val());
				}
			}else{
				if($(this).val()==pointId){
					pointSelect.push($(this).val());
				}
			}
		});
		for(var i=0;i<pointSelect.length;i++){
			for(var j=0;j<maintainedData.length;j++){
				if(maintainedData[j].pointId==pointSelect[i]){
					maintainedDataShow.push(maintainedData[j]);
				}
			}
		}
		drawMaintainedLine(maintainedDataShow);
	};
	
	
	/**
	 * 前十年
	 */
	$scope.lastYears = function() {
		var years = $scope.years;
		var lastyears = []; 
		for(var i=0;i<years.length;i++){
			lastyears[i]=parseInt(years[i])-parseInt(10);
		}
		$scope.years=lastyears;
	};

	/**
	 * 后十年
	 */
	$scope.nextYears = function() {
		var years = $scope.years;
		var nextyears = []; 
		for(var i=0;i<years.length;i++){
			nextyears[i]=parseInt(years[i])+parseInt(10);
		}
		$scope.years=nextyears;
	};
});

