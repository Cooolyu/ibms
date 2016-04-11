/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: singleassetschart.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年4月14日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */

var singleassetschart = singleassetschart || {};

/**
 * 初始化
 */
singleassetschart.loadPage = function() {
	statisticchart.drawLine($("#singleBarForm"),$("#placeholder"));
	singleassetschart.categoryPie();
	singleassetschart.valuablePie();
};

/**
 * 选择年份
 */
singleassetschart.clickYear = function(year) {
	var currentYear = $('#year').val();
	
	if (year != currentYear) {
		$('#btnyear'+currentYear).removeClass('btn-primary');
		$('#btnyear'+currentYear).addClass('btn-default');
	
		$('#btnyear'+year).removeClass('btn-default');
		$('#btnyear'+year).addClass('btn-primary');
	
		$('#year').val(year);
		
		statisticchart.drawLine($("#singleBarForm"),$("#placeholder"));
	}
};

/**
 * 前十年
 */
singleassetschart.lastYears = function() {
	var year = $('#yearGroup>input[type=button]:first').val();
	$('#yearGroup>input[type=button]').remove();
	for (var i = year - 10; i < year; i++) {
		$('#yearGroup').append('<input type="button" class="btn btn-default" id="btnyear' + i + '" value="' + i + '" onclick="singleassetschart.clickYear(' + i + ')"/>');
	}
};

/**
 * 后十年
 */
singleassetschart.nextYears = function() {
	var year = $('#yearGroup>input[type=button]:last').val();
	$('#yearGroup>input[type=button]').remove();
	for (var i = -(-year-1); i <= -(-year-10); i++) {
		$('#yearGroup').append('<input type="button" class="btn btn-default" id="btnyear' + i + '" value="' + i + '" onclick="singleassetschart.clickYear(' + i + ')"/>');
	}
};

/**
 * 选择月份
 */
//singleassetschart.clickMonth = function(month) {
//	if (month == $('#month').val()) {
//		$('#btnmonth'+month).removeClass('btn-primary');
//		$('#btnmonth'+month).addClass('btn-default');
//		$('#month').val(0);
//	} else {
//		$('#btnmonth'+month).removeClass('btn-default');
//		$('#btnmonth'+month).addClass('btn-primary');
//		
//		$('#btnmonth'+$('#month').val()).removeClass('btn-primary');
//		$('#btnmonth'+$('#month').val()).addClass('btn-default');
//		
//		$('#month').val(month);
//	}
//};


/**
 * 类别分布饼图
 */
singleassetschart.categoryPie = function() {
	var url = commonutil.actionPath + '/assets/chart/single/pie/category';
	commonutil.doAjax(url, {'pointId': $('#pointId').val()}, function(data) {
		singleassetschart.drawPie('pieCategory', data);
	}, 'json');
};
/**
 * 贵重度分布饼图
 */
singleassetschart.valuablePie = function() {
	var url = commonutil.actionPath + '/assets/chart/single/pie/valuable';
	commonutil.doAjax(url, {'pointId': $('#pointId').val()}, function(data) {
		singleassetschart.drawPie('pieValuable', data);
	}, 'json');
};
/**
 * 画饼图
 */
singleassetschart.drawPie = function(containerId, data) {
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