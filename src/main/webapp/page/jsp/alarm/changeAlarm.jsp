<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div id="modifyDiv" ng-class="{'com-hide': rightPart!='modify'}">
<fieldset id="basicInfo">
<legend>报警确认</legend>
<form class="form-horizontal" role="form" id="alarmDealForm" method="post">
	<div class="form-group col-sm-12">
		<label for="alarmTime">报警时间:</label>
		{{modAlarm.alarmTime | date:'yyyy-MM-dd HH:mm:ss'}}
		
	</div>
	
	<div class="form-group col-sm-12">
		<label for="alarmName">设备名称:</label>
		{{modAlarm.assetsName}}
		
	</div>
	
	<div class="form-group col-sm-12">
		<label for="alarmLocation">设备位置:</label>
		{{modAlarm.assetsLocation}}
		
	</div>
	
	<div class="form-group col-sm-12">
		<label for="memo">备注:</label>
		<textarea class="form-control" rows="5" cols="3"  name="memo" id="memo" placeholder="200字以内" ng-model="modAlarm.memo"></textarea>
		
	</div>
	<div class="form-group col-sm-12" ng-class="{'com-hide': modAlarm.status!=1}">
		<input type="button" ng-click="deal(modAlarm,modAlarm.alarmIndex)" class="btn btn-primary btn-block" value="确&nbsp;&nbsp;认"/>
	</div>
</form>
</fieldset>
</div>