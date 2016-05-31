<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div ng-class="{'com-hide': rightPart!='modify'}">
	<form class="form-horizontal" id="modifyForm" name="modifyForm" method="post">
	<div class="form-group col-sm-12">
		<label>状态</label>
		<select ng-model="mStatus" ng-options="a.name for a in mStatuss"  class="form-control" ></select>
		<label>生命结束日</label>
		<input ng-model="mendDate" type="text" class="form-control datepicker" readonly  />
		<label>备注</label>
		<textarea ng-model="mmemo" class="form-control" rows="3" cols="3"></textarea>
	</div>
	<div class="form-group col-sm-12">
		<input type="button" ng-click="doChange()" class="btn btn-primary btn-block" value="确&nbsp;&nbsp;定"/>
	</div>
	</form>
</div>