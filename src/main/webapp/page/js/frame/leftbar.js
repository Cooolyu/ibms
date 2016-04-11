/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: leftbar.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013-11-11     |       1.0       |  GMSZ)GuoRuofei | original version
 *******************************************************************************
 */

/**
 * 左边栏
 */
var leftbar = leftbar || {};

leftbar.top = 0;
leftbar.step = 90;

leftbar.ws = null;

$(function() {
	leftbar.showCurrent();

	$(window).resize(leftbar.showCurrent);

	//leftbar.initRemind();
});

/**
 * Description: 初始化提醒
 */
/**
leftbar.initRemind = function() {
	$('.lay-left-remind').on('mouseenter', function() {
		var $me = $(this);
		if (!$me.hasClass('loaded')) {
			leftbar.getRemind($me.attr('id').replace('Remind', ''));
		}
	}).on('mouseleave', function() {
		$(this).removeClass('flicker');
	});
	
	leftbar.getRemind('assetsalert');
	
	leftbar.getRemind('alarm');
	
	leftbar.getRemind('regularcheck');
	
	leftbar.getRemind('monitormlist');
	
	leftbar.getRemind('actormlist');
	
	leftbar.bindSocket();
};
*/

/**
 * Description: 监听websocket
 */
/**
leftbar.bindSocket = function() {
	var userKey = commonutil.getUserKey();
	leftbar.ws = commonutil.getWebSocket('websocket/'+userKey);
	// 用户未登录或者不支持websocket
	if (!leftbar.ws) {
		return;
	}

	// 收到消息
	leftbar.ws.onmessage = function(evt) {
		if (evt.data) {
			var result = JSON.parse(evt.data);
			// 没有变化，无需闪烁
			if (!result || !result.pointIds) {
				return;
			}
			// 当前页面是所有运维点或者当前运维点有变化，闪烁
			var pointId = $('#menuPointId').val();
			if (!pointId || commonutil.arrayContain(result.pointIds, pointId)) {
				$('#' + result.module + 'Remind').removeClass('loaded').addClass('active flicker');
			}
		}
	};
};
*/
/**
 * Description: 查询提醒
 * @param module 模块名称
 */
/**
leftbar.getRemind = function(module) {
	var url = commonutil.actionPath + '/' + module + '/remind';
	commonutil.doAjax(url, {
		'pointId' : $('#menuPointId').val(),'module' : module
	}, function(data) {
		var $obj = $('#' + module + 'Remind');
		$obj.addClass('loaded').find('.popover-content').html(data);
		if ($obj.find('.newRemind').val() > 0) {
			$obj.addClass('active');
		}
		if (!$obj.hasClass('init')) {
			$obj.addClass('init').children().css('top', ($obj.height() - $obj.children().height()) / 2);
		}
	}, 'html');
};
*/
/**
 * Description: 将当前选中的菜单项移动至可视窗口内
 */
leftbar.showCurrent = function() {
	if ($('.lay-left-bar .com-active').length > 0) {
		leftbar.top = $('.lay-left').height() - $('.lay-left-bar .com-active').parent().position().top - leftbar.step;
		leftbar.setScroll();
	}
};

/**
 * Description: 菜单窗口上移
 */
leftbar.showUp = function() {
	leftbar.top += leftbar.step;
	leftbar.setScroll();
};

/**
 * Description: 菜单窗口下移
 */
leftbar.showDown = function() {
	leftbar.top -= leftbar.step;
	leftbar.setScroll();
};

/**
 * Description: 移动窗口，根据当前位置切换控制按钮的可用状态
 */
leftbar.setScroll = function() {
	var max = $('.lay-left-bar').height() - $('.lay-left').height();
	$('.lay-left-up').prop('disabled', false);
	$('.lay-left-down').prop('disabled', false);
	if (leftbar.top >= 0) {
		leftbar.top = 0;
		$('.lay-left-up').prop('disabled', true);
	}
	if (leftbar.top + max <= 0) {
		leftbar.top = -max;
		$('.lay-left-down').prop('disabled', true);
	}
	$('.lay-left-bar').css({
		top : leftbar.top
	});
};