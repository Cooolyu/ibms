/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: common.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013-11-04     |       1.0       |  GMSZ)GuoRuofei | original version
 *******************************************************************************
 */

/**
 * 常用工具组件
 * 
 * @require jquery.js
 */
var commonutil = commonutil || {};

commonutil.path = '';
commonutil.actionPath = '';
commonutil.pagePath = '';
commonutil.SUCCESS_FLAG = 200;

/**
 * Description: Ajax操作
 * 
 * @param requrl
 * @param datas
 * @param successFun
 * @param repType
 */
commonutil.doAjax = function(requrl, datas, successFun, repType) {
	$.ajax({
		url : requrl,
		data : datas,
		success : successFun,
		dataType : repType,
		type : 'POST',
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			if (XMLHttpRequest.status == 401) {
				window.location = commonutil.path + '/do/errorcode/401';
			} else if (XMLHttpRequest.status == 403) {
				window.location = commonutil.path + '/do/errorcode/403';
			} else if (XMLHttpRequest.status == 404) {
				window.location = commonutil.path + '/do/errorcode/404';
			} else {
				window.location = commonutil.path + '/do/errorcode/500';
			}
		}
	});
};

/**
 * Description: 去前后空格
 * @param str
 * @returns
 */
commonutil.stringTrim = function(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
};

/**
 * Description: 长度交验
 * @param str
 * @param length
 * @returns {Boolean}
 */
commonutil.checkLength = function(str, length){
	if(str.length <= length){
		return true;
	}else{
		return false;
	}
};


/**
 * Description: 指定长度交验
 * @param str
 * @param length
 * @returns {Boolean}
 */
commonutil.checkStringLength = function(str, length){
	if(str.length == length){
		return true;
	}else{
		return false;
	}
};

/**
 * //判断正整数
 * @param input
 * @returns
 */
commonutil.checkRate= function checkRate(Str) {   
     var re = /^[1-9]+[0-9]*]*$/;   
  
     if (!re.test(Str))   
    {     
        return false;   
     } 
     return true;
};

/**
 * Description: 数组是否包含指定值
 * @param {Array} arr
 * @param {String|Number} value
 * @returns {Boolean}
 */
commonutil.arrayContain = function(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == value) {
			return true;
		}
	}
	return false;
};

/**
 * Description: 建立websocket链接并返回实例，如果当前浏览器不支持websocket则返回null
 * @returns 
 */
commonutil.getWebSocket = function(subUrl) {
	var url = 'ws://' + location.host + commonutil.path +"/"+ subUrl;
	var ws = null;
	if ('WebSocket' in window)
		ws = new WebSocket(url);
	else if ('MozWebSocket' in window)
		ws = new MozWebSocket(url);
	else
		//alert('当前浏览器不支持websocket，请使用IE10+、Chrome17+、Firefox7+');
	return ws;
};

/**
 * Description: 如果用户未登录则返回null
 * @returns 
 */
commonutil.getUserKey = function() {
	var userKey = null, allCookies = document.cookie;
	var pos = allCookies.indexOf('omuser=');
	if (pos != -1) {
		var start = pos + 7;
		var end = allCookies.indexOf(';', start);
		if (end == -1)
			end = allCookies.length;
		userKey = allCookies.substring(start, end);
	} else {
		alert('用户未登录');
	}
	return userKey;
};
