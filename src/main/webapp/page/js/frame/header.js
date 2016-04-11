/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: leftbar.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014-05-12     |       1.0       | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
var header = header || {};

$(function() {
	header.getPointName();
	header.bindSocket();
	setInterval("header.getNotice()",10000);
});

/**
 * 显示用户名
 */
header.getUserName = function() {
	var url = commonutil.actionPath + '/system/user/name';
	commonutil.doAjax(url, {}, function(data) {
		$('#headUserName').text(data);
	}, 'json');
};

/**
 * 显示单个运维点名称，全部运维点不显示
 */
header.getPointName = function() {
	var pointId = $('#headPointId').val();
	if (!pointId) {
		return;
	}
	var url = commonutil.actionPath + '/system/point/name/' + pointId;
	commonutil.doAjax(url, {}, function(data) {
		$('#headPointName').text('(' + data + ')');
	}, 'json');
};

header.getNotice = function() {
	var url = commonutil.actionPath + '/alarm/notice';
	commonutil.doAjax(url, {}, function(data) {
		if(data>0) {
			$('#warn').html("<a href=\""+commonutil.actionPath+"/alarm/list\"><img  src=\""+commonutil.pagePath+"/images/AnimationAlarm.gif\" width=\"25px\"></a>");
		}else {
			$('#warn').html("<a href=\""+commonutil.actionPath+"/alarm/list\"><i class=\"glyphicon glyphicon-time\"></i></a>");
		}
	}, 'json');
};





header.bindSocket = function() {
	var url = 'ws://172.25.35.245:8080/websocket/alarm';
	var ws = null;
	if ('WebSocket' in window)
		ws = new WebSocket(url);
	else if ('MozWebSocket' in window)
		ws = new MozWebSocket(url);
	else
		//alert('当前浏览器不支持websocket，请使用IE10+、Chrome17+、Firefox7+');
	// 用户未登录或者不支持websocket
	if (!ws) {
		return;
	}

	// 收到消息
	ws.onmessage = function(evt) {
		alert(1);
		if (evt.data) {
			var result = JSON.parse(evt.data);
			if(result.status == 'warn') {
				$('#warn').html("<a href=\""+commonutil.actionPath+"/alarm/list\"><img  src=\""+commonutil.pagePath+"/images/AnimationAlarm.gif\" width=\"25px\"></a>");
		   }
			
			
		}
	};
};