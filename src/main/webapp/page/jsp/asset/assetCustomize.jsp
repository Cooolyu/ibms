<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<style>
.has-warn{border-color: red}
.no-warn{border-color:""}
</style>
<div ng-class="{'com-hide': rightPart!='customize'}">
	<input style="display: none" ng-model="assetId" value="1" />
	<form role="form" name="cusForm" class="form-horizontal" method="post">
	<input style="display: none" ng-model="assetProp.assetsId" />
		<div class="panel panel-default" >
		<div class="panel-heading panel-title">
			资产自定义属性
		</div>
		<div class="panel-body" >
		<div class="form-group col-sm-12">
		
			<div ng-repeat="assetProp in assetProps">
				<label >{{assetProp.name | isNone}}:</label>
				<input name="value" type="text" ng-model="assetProp.value" ng-class="{'has-warn':cusForm.value.$error.required}" required ng-trim="true" class="form-control" maxlength="200"  placeholder="200字以内"/>
			</div>
		
			<div class="form-group col-md-12 form-inline" style="margin-top: 5px">
				<label class="control-label form-group clearfiix" style="margin-right: 5px; margin-left: 5px">属性列表：</label>
				<select ng-model='propChild'ng-options="p.name for p in propChilds" style="width: 60%; text-align: center;" class="form-control form-group clearfiix"  ></select>
				<input type="button" ng-click="addPropChild()" class="btn btn-primary form-group clearfiix" style="margin-left: 15px" value="添&nbsp;&nbsp;加"/>
			</div>
		</div>
		</div>
		</div>
		
		<div class="panel panel-default">
		<div class="panel-heading panel-title">
			资产监控项
		</div>
		<div class="panel-body" >
		<div class="form-group col-sm-12" ng-repeat="monitorChild in monitorChilds">
			<div class="form-group col-md-12 form-inline">
				<label class="control-label">{{monitorChild.name}}：</label>
				<input type="checkbox" ng-model="monitorChild.checked"  style="margin-left: 80px">
			</div>
		</div>
		</div>
		</div>
		
<!-- 		<div class="panel panel-default">
		<div class="panel-heading panel-title">
				<span class="control-label">是否使用SNMP</span>
				<input type="checkbox" style="float: right;margin-right: 20px" ng-model="show" ng-click="showEvent()">
		</div>
		<div class="panel-body" ng-show="show" >
		<div class="form-group col-sm-12" >
		
			<div ng-repeat="snmpChild in snmpChilds">
			<div class="form-group col-md-12 form-inline">
				<input name="code" type="text" ng-model="snmpChild.code" ng-class="{'has-warn':cusForm.code.$error.required}" required ng-trim="true" class="form-control " style="width: 32%; " placeholder="监控名称" />
				<input name="oid" type="text" ng-model="snmpChild.oid" ng-class="{'has-warn':cusForm.oid.$error.required}" required ng-trim="true" class="form-control " style="width: 32%;" placeholder="OID" />
				<input type="text" ng-model="snmpChild.ext" class="form-control " style="width: 32%;" placeholder="上传数据的后缀" />
			</div>
			</div>
							<input type="button" ng-click="addSnmp()" class="btn btn-primary btn-block" style="margin-top: 10px;" value="添&nbsp;&nbsp;加"/>

		</div>
		</div>
		</div> -->
		
		<div class="form-group col-sm-12">
			<input type="button" ng-click="doCustomize(cusForm.$valid)" class="btn btn-primary btn-block" value="保&nbsp;&nbsp;存"/>
		</div>
		
	</form>
</div>