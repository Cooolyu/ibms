<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div ng-class="{'com-hide': rightPart!='add'}">
<form class="form-horizontal" role="form" id="floorAddForm"  method="post">

	<div class="form-group col-sm-12">
		<label for="modifyName">楼层名:</label>
		<input type="text" class="form-control" id="name" name="name" ng-model="addFloor.name" placeholder="请输入楼宇名字"/>
	</div>
	<div class="form-group col-sm-12">
		<input type="button" ng-click="doAdd(floorAddForm.$valid)" class="btn btn-primary btn-block" value="确&nbsp;&nbsp;定"/>
	</div>
</form>
</div>