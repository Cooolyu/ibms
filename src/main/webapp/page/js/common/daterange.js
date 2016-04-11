var dateRange = dateRange || {};

/** 点击查询条件显示浮出层，点击浮出层中的元素时，为true，此时onclick事件冒泡到body元素，不隐藏浮出层 */
dateRange.inPanel = false;

$(function() {
	dateRange.initSingleDatePicker();

	// 点击页面其它区域，隐藏浮出层，恢复状态
	$('body').click(function(e) {
		if (dateRange.inPanel) {
			dateRange.inPanel = false;
			return;
		}
		dateRange.hideExtPanel();
	});
});

/**
 * 初始化Jquery默认日期选择器
 */
dateRange.initSingleDatePicker = function() {
	if($(".datepicker").length > 0) {
	$(".datepicker").datepicker({
		changeMonth : true,
		changeYear : true,
		dateFormat : 'yy-mm-dd',
		numberOfMonths : 3
	});
	}
};

/**
 * Description: 日期区间选择控件
 * @param String [required] startId 开始日期元素Id 
 * @param String [required] endId 结束日期元素Id
 * @param Element [required] ele 当前点击的元素，一般情况下传this
 * @param String [optional] label 显示在日期前的说明文字
 * @param Function [optional] callback 回调方法，用户选择的开始日期和结束日期作为参数传递
 */
dateRange.toggle = function(startId, endId, ele, label, callback) {
	dateRange.inPanel = true;
	var $me = $(ele);
	if ($me.hasClass('itemActive')) {
		dateRange.hideExtPanel();
		return;
	}

	dateRange.hideExtPanel();
	// 显示日期区间选择控件，如果已经有日期选择控件，先移除
	$me.next('.itemPanel').remove();
	$me.addClass('itemActive').after($($('#dateRangeTemplate').html()).show());
	var startDate = $('#' + startId).val();
	var endDate = $('#' + endId).val();
	var $startDate = $('.itemPanel:visible .startDate');
	var $endDate = $('.itemPanel:visible .endDate');
	if (startDate) {
		$startDate.text(startDate).next().show();
	}
	if (endDate) {
		$endDate.text(endDate).next().show();
	}

	// 开始日期初始化
	$('.datepickerStart:visible').datepicker({
		defaultDate : startDate,
		changeMonth : true,
		changeYear : true,
		dateFormat : 'yy-mm-dd',
		numberOfMonths : 1,
		onSelect : function(date) {
			$startDate.text(date).next().show();
		}
	});
	// 结束日期初始化
	$('.datepickerEnd:visible').datepicker({
		defaultDate : endDate,
		changeMonth : true,
		changeYear : true,
		dateFormat : 'yy-mm-dd',
		numberOfMonths : 1,
		onSelect : function(date) {
			$endDate.text(date).next().show();
		}
	});
	// 点击确定回调
	$('.itemPanel:visible .control').unbind('click').click(function() {
		var text = '';
		if ($startDate.text() && $endDate.text()) {
			if ($startDate.text() > $endDate.text()) {
				alert('起始日期不能晚于结束日期');
				return;
			}
			text = $startDate.text() + '~' + $endDate.text();
		} else if ($endDate.text()) {
			text = $endDate.text() + '之前';
		} else if ($startDate.text()) {
			text = $startDate.text() + '之后';
		}
		text = text && ((label || '') + text);
		$me.val(text).text(text);
		$('#' + startId).val($startDate.text());
		$('#' + endId).val($endDate.text());
		dateRange.hideExtPanel();
		if (typeof callback == 'function') {
			callback();
		}
	});
	// 阻止浮出层被隐藏
	$('.itemPanel:visible').unbind('click').click(function() {
		dateRange.inPanel = true;
	});
};
/**
 * Description: [内部方法] 隐藏浮出层
 */
dateRange.hideExtPanel = function() {
	$('.itemActive').removeClass('itemActive');
	$('.itemPanel').hide();
};
/**
 * Description: [内部方法] 清除开始日期
 */
dateRange.clearStartDate = function() {
	$('.itemPanel:visible .startDate').text('').next().hide();
	$('.datepickerStart:visible').datepicker('setDate', null);
};
/**
 * Description: [内部方法] 清除结束日期
 */
dateRange.clearEndDate = function() {
	$('.itemPanel:visible .endDate').text('').next().hide();
	$('.datepickerEnd:visible').datepicker('setDate', null);
};