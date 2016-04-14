<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div ng-class="{'com-hide': rightPart!='add'}">
<form class="form-horizontal" role="form" id="floorAddForm"  method="post">

	<div class="form-group col-sm-12">
		<label style="font: 11pt Microsoft YaHei;">请选择添加项</label>
		<select ng-change="selChange(selectVal)" ng-model="selectVal" ng-options="a.name for a in selectVals" class="form-control"></select>
	</div>
	
	<div ng-show="fShow" class="form-group col-sm-12">
		<input type="text" class="form-control" id="name" name="name" ng-model="addFloor.floorName" placeholder="请输入楼层名"/>
	</div>
	
	<div ng-show="aShow" class="form-group col-sm-12">
		<br>
		<label style="font: 11pt Microsoft YaHei;">请选择系统项</label>
		<select ng-model="assetCate" ng-options="a.name for a in assetCates" class="form-control"></select>
		<input style="margin-top: 5px;" type="text" class="form-control" id="name" name="name" ng-model="addFloor.assetName" placeholder="请输入资产系统名"/>
	</div>
	
	<div class="form-group col-sm-12">
		<input type="button" ng-click="doAdd(floorAddForm.$valid)" class="btn btn-primary btn-block" value="确&nbsp;&nbsp;定"/>
	</div>
</form>
</div>