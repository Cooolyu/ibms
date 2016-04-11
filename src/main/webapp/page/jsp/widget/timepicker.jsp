<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/page/thirdparty/timepicker/css/jquery.ui.timepicker.css"/>
<style>
.ui-timepicker-table td a{width:2em;}
.timepicker[readonly]{background-color:#fff;cursor:default;}
</style>
<script type="text/javascript" src="<%=request.getContextPath()%>/page/thirdparty/timepicker/js/jquery.ui.timepicker.js"></script>
<script type="text/javascript">
$(function() {
	// avoid timepicker initial twice bug
	$('#ui-timepicker-div').remove();
	$('.timepicker').timepicker({
		beforeShow : function(){
			console.log(arguments);
		},
		defaultTime : '',
		showCloseButton : true,
		closeButtonText : '关闭',
		hourText : '小时',
		minuteText : '分钟',
		amPmText : [ '上午', '下午' ]
	});
});
</script>