<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div ng-class="{'com-hide': rightPart!='modify'}">
	<form class="form-horizontal" id="modifyForm" name="modifyForm" method="post">
	<div class="form-group col-sm-12">
		<label>状态</label>
		<select ng-change="selFloor()" ng-model="build" ng-options="a.name for a in builds"  class="form-control" ></select>
		<label>生命结束日</label>
		<input type="text" class="form-control datepicker" readonly  />
		<label>备注</label>
		<textarea class="form-control" rows="3" cols="3"></textarea>
	</div>
	</form>
</div>