/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: allassetschart.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013年12月2日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
var allassetschart = allassetschart || {};

allassetschart.drawChart = function() {
	var pointIdsStr = '';
	$("input:checked").each(function() {
		pointIdsStr += (this.value+'|');
	});
	if (pointIdsStr.length == 0) {
		alert('请至少选择一个运维点!');
		return;
	}
	pointIdsStr = pointIdsStr.substring(0, pointIdsStr.length-1);

	commonutil.doAjax(commonutil.actionPath+'/assets/chart/data', {'pointIdsStr':pointIdsStr,'startTime':$('#startDate').val(),'endTime':$('#endDate').val()}, function(data) {
		var dataValue = new Array();
		var ticks = new Array();
		$('#placeData>table>tbody').empty();
		for (var i = 0; i < data.length; i++) {
			//alert(data[i].pointId+' ' + data[i].count + data[i].pointName);
			dataValue[i] = [i, data[i].count];
			ticks[i] = [i, data[i].pointName];
			$('#placeData>table>tbody').append('<tr><td>'+data[i].pointName+'</td><td>'+data[i].count+'</td></tr>');
		}
		var options = {
			series: {
				bars: {show: true}
			},
			bars: {
		        align: "center",
		        barWidth: 0.5
		    },
		    xaxis: {ticks: ticks}
		};
		var dataset = [{label: "提醒数量", data: dataValue}];
		$.plot($('#placeholder'), dataset, options);
	}, 'json');
};