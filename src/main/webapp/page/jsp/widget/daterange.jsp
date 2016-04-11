<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<style type="text/css">
.dateRange[readonly]{background-color:#fff;cursor:default;}
.dateRange{width:185px;}
.dateRange.shortLabel{width:240px;} /*4个字*/
.dateRange.longLabel{width:280px;} /*7个字*/
/* 浮出层 */
.itemPanel{overflow:visible;position:absolute;display:none;background-color:#fff;border:1px solid #9CACBC;border-radius:0 6px 6px;padding:10px;z-index:50;}
/* 日期区间 */
.rangeList{display:inline-block;overflow:hidden;white-space:nowrap;width:510px;padding:0;list-style:none;}
.rangeList li{float:left;}
.rangeList .dateText{margin-bottom:5px;}
.rangeList .startDate,
.rangeList .endDate{margin:0 10px 0 5px;}
</style>
<div id="dateRangeTemplate">
	<div class="itemPanel">
		<ul class="rangeList">
			<li>
				<div class="dateText">
					开始日期：<span class="startDate"></span><a href="javascript:void(0)" onclick="dateRange.clearStartDate();" 
					title="清除" class="com-btn-icon glyphicon glyphicon-remove-circle" style="display:none;"></a>
				</div>
				<div class="datepickerStart"></div>
			</li>
			<li style="margin-left:10px;">
				<div class="dateText">
					结束日期：<span class="endDate"></span><a href="javascript:void(0)" onclick="dateRange.clearEndDate();" 
					title="清除" class="com-btn-icon glyphicon glyphicon-remove-circle" style="display:none;"></a>
				</div>
				<div class="datepickerEnd"></div>
			</li>
		</ul>
		<div class="btn btn-primary btn-block control">确定</div>
	</div>
</div>