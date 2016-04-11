/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: pageutil.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013-11-04     |       1.0       |  GMSZ)GuoRuofei | original version
 *******************************************************************************
 */

/**
 * 页面相关的工具组件
 * 
 * @require jquery.js, jquery.nicescroll.js
 */
var pageutil = pageutil || {};

pageutil.RELOAD_TIME = 2000;

pageutil.showRightBar = function(content, title) {
	$('#rightBarBody').html(content);
	$('#rightBarTitle').text(title || '');
	$('#rightBar').addClass('com-active');
	dateRange.initSingleDatePicker();
};

pageutil.hideRightBar = function() {
	$('#rightBar').removeClass('com-active');
};

pageutil.showRightBarAn = function(title) {
	$('#rightBarTitle').text(title || '');
	$('#rightBar').addClass('com-active');
};

/**
 * Description: 放大右边栏
 */
pageutil.enlargeRightBar = function() {
	$('#rightBar').addClass('large');
	$('#rightBarEnlarge').hide();
	$('#rightBarShrink').show();
};
/**
 * Description: 缩小右边栏
 */
pageutil.shrinkRightBar = function() {
	$('#rightBar').removeClass('large');
	$('#rightBarEnlarge').show();
	$('#rightBarShrink').hide();
};

/**
 * Description: 显示遮罩层
 */ 
pageutil.overlay = function() {
	var allHeight = document.body.scrollHeight > document.documentElement.scrollHeight ? document.body.scrollHeight : document.documentElement.scrollHeight;
	$('#hideBack').height(allHeight);
	$('#hideBack').show();
	
	$('html').css('overflow', 'hidden');
};

/**
 * Description: 隐藏遮罩层
 */
pageutil.cancelover = function() {
	$('#hideBack').hide();
	$('html').css('overflow', 'auto');
};

/**
 * Description: 屏幕中间显示进度条，Loading状态
 */
pageutil.showLoading = function() {
	var loadId = 'uping';
	var allWidth = document.body.clientWidth;
	var windowHeight = window.innerHeight || document.body.clientHeight;
	var commentWidth = $('#'+loadId).width();
	var commentHeight = $('#'+loadId).height();
	
	var scrollTop = document.body.scrollTop > document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
	
	$('#'+loadId).css('top', Math.abs((windowHeight-commentHeight)/2+scrollTop));
	$('#'+loadId).css('left', Math.abs((allWidth-commentWidth)/2));
	
	$('#'+loadId).show();
};

/**
 * Description: 取消屏幕中间的进度条或Loading状态
 */
pageutil.cancelLoading = function() {
	$('#uping').hide();
};

/**
 * Description: 显示提示消息
 * @param text
 */
pageutil.showTip = function(text) {
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
		}, 1500);
	});
};

/**
 * Description: 显示/隐藏指定元素
 * @param String panelId 元素id
 */
pageutil.togglePanel = function(panelId) {
	$('#' + panelId).toggle();
};

/**
 * Description: 滚动表格的body
 * @param table : 滚动的列表
 * @param int scrollHeight : 大于多少高度才开始滚动
 * @param int scrollSpeed : 滚动速度
 */
pageutil.scrollTableBody = function(table,scrollHeight,scrollSpeed) {
	var speed = parseInt(scrollSpeed,10);
	t=setInterval(function(){
		var tableHeight = table.height();
		var tableBody = table.find("tbody:first");
		var limit = parseInt(scrollHeight,10);
		if(tableHeight > limit){
			tableBody.find("tr:first").appendTo(tableBody);
		}
	},speed);
	table.mouseover(function(){
        clearInterval(t);  
    }).mouseout(function(){
        t=setInterval(function(){
    		var tableHeight = table.height();
    		var tableBody = table.find("tbody:first");
    		var limit = parseInt(scrollHeight,10);
    		if(tableHeight > limit){
    			tableBody.find("tr:first").appendTo(tableBody);
    		}
    	},speed);
    });
};

/**
 * Description: 表单上显示check结果
 * @param tagid : 表单id名字
 * @param int checkResult : 检查结果1：通过，2：警告，3：错误
 * @param int errMsg : 错误message
 */
pageutil.showCheckResult = function(tagid,checkResult,errMsg){
	if(checkResult==1){
		$('#'+tagid).removeClass('has-warning');
		$('#'+tagid).removeClass('has-error');
		$('#'+tagid).addClass('has-success');
		if($('#'+tagid).children().last().hasClass('span-err-word')){
			$('#'+tagid).children().last().remove();
		}
		$('#'+tagid).children().last().after("<span class='span-err-word'>"+errMsg+"</span>");
	}
	if(checkResult==2){
		$('#'+tagid).removeClass('has-success');
		$('#'+tagid).removeClass('has-error');
		$('#'+tagid).addClass('has-warning');
		if($('#'+tagid).children().last().hasClass('span-err-word')){
			$('#'+tagid).children().last().remove();
		}
		$('#'+tagid).children().last().after("<span class='span-err-word'>"+errMsg+"</span>");
	}
	if(checkResult==3){
		$('#'+tagid).removeClass('has-warning');
		$('#'+tagid).removeClass('has-success');
		$('#'+tagid).addClass('has-error');
		if(errMsg){
			if($('#'+tagid).children().last().hasClass('span-err-word')){
				$('#'+tagid).children().last().remove();
			}
			$('#'+tagid).children().last().after("<span class='span-err-word'>"+errMsg+"</span>");
		}
	}
};

