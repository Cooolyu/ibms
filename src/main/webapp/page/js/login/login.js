/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: login.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013年11月7日         |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */

var login = login || {};

/**
 * Description: 初始化
 */
login.loadLogin = function() {
	document.getElementById('userName').focus();
	
	var oldValue = null;
	$('input.loginInput').unbind('keydown keyup').keydown(function(event) {
		var me = $(this);
		if (event.which == 13) {
			oldValue = me.val();
		}
	}).keyup(function(event) {
		var me = $(this);
		if (event.which == 13 && me.val() == oldValue) {
			login.dologin();
		}
	});
};

/**
 * Description: 登录
 */
login.dologin = function() {
	var url = commonutil.actionPath + '/login';
	var password = CryptoJS.SHA1($('#password').val()).toString();
	commonutil.doAjax(url, {'username': $('#userName').val(), 'password': password}, function(data) {
		if (data.resultValue == true) {
			if(data.roleId == 1) {
				window.location.href = commonutil.actionPath + '/main/index';
			}else if(data.roleId == 2) {
				window.location.href = commonutil.actionPath + '/main/index';
			}else if(data.roleId == 3) {
				window.location.href = commonutil.actionPath + '/main/index';
			}else if(data.roleId == 4) {
				window.location.href = commonutil.actionPath + '/main/index';
			}else if(data.roleId == 5) {
				window.location.href = commonutil.actionPath + '/main/index';
			}else if(data.roleId == 6) {
				window.location.href = commonutil.actionPath + '/main/index';
			}else {
				alert('对不起，您没有登录权限');
			}
			
		} else {
			$('#errorMsg').text('');
			$('#errorMsg').text(data.message);
			$('#errorRow').show();
		}
	}, 'json');
};