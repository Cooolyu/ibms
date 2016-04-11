/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: process2.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013年12月18日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
var process2 = process2 || {};

process2.drawProcess = function(high, middle, low, success, canvasId) {
	high = -(-high);
	middle = -(-middle);
	low = -(-low);
	success = -(-success);
	
	var data = new Array();
	data = [
	    {value:high,color:'#73C9E3'},
	    {value:middle,color:'#F2B968'},
	    {value:low,color:'#D9534F'},
	    {value:success,color:'#4DA74D'}
	];
	
	if (high==0 && middle==0 && low==0 && success==0) {
		data = [{value:100,color:'#ddd'}];
	}
	
	var options = {
		percentageInnerCutout : 80,
		segmentStrokeWidth : 1,
		segmentShowStroke : false,
		onAnimationComplete: function(){
			var text = $('#'+canvasId).text();
			ctx.font = "bold 16pt Arial";
			var fontColor = '#428bca';
			ctx.fillStyle = fontColor;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.moveTo(50, 50);
			ctx.fillText(text, 50, 50);
		}
	};
	var ctx = document.getElementById(canvasId).getContext("2d");
	new Chart(ctx).Doughnut(data, options);
};