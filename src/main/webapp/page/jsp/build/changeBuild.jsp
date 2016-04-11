<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div id="modifyBuild" ng-class="{'com-hide': rightPart!='modify'}">
<fieldset id="basicInfo">
<legend>楼栋修改</legend>
<form class="form-horizontal" role="form" id="buildModifyForm"  method="post">

	<div class="form-group col-sm-12">
		<label for="modifyName">楼名:</label>
		<input type="text" class="form-control"  ng-model="modifyBuild.name" placeholder="楼栋名不能为空">
	</div>
	
	<div class="form-group col-sm-12">
		<label for="memo">备注:</label>
			<textarea class="form-control" rows="5" cols="3" ng-model="modifyBuild.memo" ></textarea>	
    </div>
	
	<div class="form-group col-sm-12">
		<input type="button" ng-click="doChange(buildModifyForm.$valid)" class="btn btn-primary btn-block" value="确&nbsp;&nbsp;定"/>
	</div>
</form>
</fieldset>
</div>