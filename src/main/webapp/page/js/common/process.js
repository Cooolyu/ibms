/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: process.js
 * Modify record:
 * NO. |     Date       |    Version      |      Name         |      Content
 * 1   | 2013-7-23      |      1.0        |  GMSZ)LuHaosheng  | original version
 *******************************************************************************
 */
var process = process || {};
	
process.drawProcess = function(high, middle, low, success, canvasId, category) {
	
		high = 0 - (-high);
		middle = 0 - (-middle);
		low = 0 - (-low);
		success = 0 - (-success);
	
		var text = $('#'+canvasId).text();
		var highPercent = high / (high + middle + low + success);
		var middlePercent = middle / (high + middle + low + success);
		var lowPercent = low / (high + middle + low + success);
		var successPercent = success / (high + middle + low + success);
	
		try {
			var context = document.getElementById(canvasId).getContext('2d');
		} catch (e) {
			return;
		}
		
	
	
//		var text = $(this).text();
//		var process = 0;
//		if (text.indexOf('%') > 0) {
//			process = text.substring(0, text.length-1);
//		} else {
//			var texts = text.split('/');
//			process = (texts[0] / texts[1]) * 100;
//		}
//		var canvas = this;
//		try {
//			var context = canvas.getContext('2d');
//		} catch(e) {
//			return;
//		}
		
		context.clearRect(0, 0, 80, 80);
		
		// 画一个灰色的圆
		context.beginPath();
		context.moveTo(40, 40);
		context.arc(40, 40, 40, 0, Math.PI * 2, false);
		context.closePath();
		context.fillStyle = '#ddd';
		context.fill();
		
		// 画进度--高
		context.beginPath();
		context.moveTo(40, 40);
		context.arc(40, 40, 40, 0, Math.PI * 2 * highPercent, false);
		context.closePath();
//		context.fillStyle = '#D9534F';
		context.fillStyle = '#CB4B4B';
//		context.fillStyle = '#EBCCD1';
		context.fill();
		
		// 画进度--中
		context.beginPath();
		context.moveTo(40, 40);
		context.arc(40, 40, 40, (Math.PI * 2 * highPercent), (Math.PI * 2 * highPercent+Math.PI * 2 * middlePercent), false);
		context.closePath();
//		context.fillStyle = '#F2B968';
		context.fillStyle = '#EDC240';
//		context.fillStyle = '#FAEBCC';
		context.fill();
		
		
		// 画进度--低
		context.beginPath();
		context.moveTo(40, 40);
		context.arc(40, 40, 40, Math.PI * 2 * highPercent+Math.PI * 2 * middlePercent, Math.PI * 2 * highPercent+Math.PI * 2 * middlePercent+Math.PI * 2 * lowPercent, false);
		context.closePath();
//		context.fillStyle = '#73C9E3';
		context.fillStyle = '#AFD8F8';
//		context.fillStyle = '#BCE8F1';
		context.fill();
		
		// 画进度--success
		context.beginPath();
		context.moveTo(40, 40);
		context.arc(40, 40, 40, Math.PI * 2 * highPercent+Math.PI * 2 * middlePercent+Math.PI * 2 * lowPercent, Math.PI * 2, false);
		context.closePath();
//		context.fillStyle = '#DFF0D8';
//		context.fillStyle = '#5CB85C';
		context.fillStyle = '#4DA74D';
		context.fill();

		// 画内部空白
		context.beginPath();
		context.moveTo(40, 40);
		context.arc(40, 40, 35, 0, Math.PI * 2, true);
		context.closePath();
		context.fillStyle = 'rgba(255,255,255,1)';
		context.fill();
		
		
		// 画一条线
		context.beginPath();
		context.arc(40, 40, 31, 0, Math.PI * 2, true);
		context.closePath();
		context.strokeStyle = '#ddd';
		context.stroke();
		
//		context.beginPath();  
//	    context.arc(22, 22, 21.5, 0, Math.PI * 2, false);
//	    context.closePath();
//	    context.strokeStyle = $(this).hasClass('warning') ? '#FFA500' : '#26b3f7';
//	    context.stroke();
//	        
//	    context.beginPath();  
//	    context.arc(22, 22, 12.5, 0, Math.PI * 2, false);
//	    context.closePath();
//	    context.strokeStyle = $(this).hasClass('warning') ? '#FFA500' : '#26b3f7';
//	    context.stroke();
	        
//	    var text = process + '%';
	    context.font = "bold 24pt Arial";
//	    var fontColor = "#73C9E3";
//	    if (category == 0) {
//	    	fontColor = '#D9534F';
//	    } else if (category == 1) {
//	    	fontColor = '#C09853';
//	    } else if (category == 2) {
//	    	fontColor = '#468847';
//	    }
	    var fontColor = '#428bca';
	    context.fillStyle = fontColor;
//	    context.fillStyle = $(this).hasClass('warning') ? '#e74c3c' : '#26b3f7';
	    context.textAlign = 'center';
	    context.textBaseline = 'middle';
	    context.moveTo(40, 40);
	    context.fillText(text, 40, 40);
	
};