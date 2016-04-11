<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div ng-class="{'com-hide': rightPart!='add'}">
<form class="form-horizontal" role="form" id="buildAddForm" name="buildAddForm" method="post">
	<div class="form-group col-sm-12">
		<label for="modifyName">楼名:</label>
		<input type="text" class="form-control"  ng-model="addBuild.name" placeholder="请输入楼宇名字"/>
	</div>
	<div class="form-group col-sm-12">
	    <label for="modifyMemo">楼宇备注:</label>
		<input type="text" class="form-control"  ng-model="addBuild.memo" placeholder="请输入楼宇的备注"/>
	</div>
	<div class="form-group col-sm-12">
		<input type="button" ng-click="doAdd(buildAddForm.$valid)" class="btn btn-primary btn-block" value="确&nbsp;&nbsp;定"/>
	</div>
</form>
</div>