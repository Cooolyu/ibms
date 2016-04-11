<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<style>
.has-warn{border-color: red}
.no-warn{border-color:""}
</style>
<div ng-class="{'com-hide': rightPart!='add'}">
<form class="form-horizontal" role="form" id="assetAddForm" name="assetAddForm" method="post">
	<div class="form-group col-sm-12">
		<label >*编号:</label>
		<input name="serialNumber" ng-class="{'has-warn':assetAddForm.serialNumber.$error.required}" type="text" class="form-control"  ng-model="addAsset.serialNumber" required ng-trim="true" placeholder="请输入编号"/>
		<label >*名称:</label>
		<input name="name" ng-class="{'has-warn':assetAddForm.name.$error.required}" type="text" class="form-control"  ng-model="addAsset.name" required ng-trim="true" placeholder="请输入名称"/>
		<label >*类别:</label>
　　     <select ng-model="assetCate" class="form-control" ng-options="a.name for a in assetCates"> </select>
		<label >*品牌:</label>
		<select ng-model="assetBrand" class="form-control" ng-options = "a.name for a in assetBrands" > </select>
		<label >型号:</label>
		<select ng-model="assetModel" ng-options="a.name for a in assetModels" class="form-control"  maxlength="200" placeholder="200字以内"></select>
		<label >*数量:</label>
		<input id="assetNum" name="number" type="text" ng-class="{'has-warn':assetAddForm.number.$error.required}" class="form-control"  ng-model="addAsset.number" onkeyup="isNum();" required ng-trim="true" placeholder="正整数"/>
		<label >单位:</label>
		<input type="text" class="form-control"  ng-model="addAsset.unit" maxlength="200" placeholder="200字以内"/>
		<label >位置:</label>
		<input type="text" class="form-control"  ng-model="addAsset.position" maxlength="200" placeholder="200字以内"/>
		<label >*状态:</label>
		<select ng-model="assetStatus" class="form-control" ng-options="a.name for a in assetStatuss"> </select>
		<label >生命到期时间:</label>
		<input type="text" class="form-control datepicker" readonly ng-model="addAsset.lifeEndDate" />
		<label >备注:</label>
		<textarea  class="form-control" rows="5" cols="3" maxlength="200" placeholder="200字以内" ng-model="modAlarm.memo"></textarea>
	</div>

	<div class="form-group col-sm-12">
		<input type="button" ng-click="doAdd(assetAddForm.$valid)" class="btn btn-primary btn-block" value="确&nbsp;&nbsp;定"/>
	</div>
</form>
<script type="text/javascript">

	function isNum() {
		var txtField = document.getElementById('assetNum');
		var txt = txtField.value;
		var regexp = /^[0-9]*[1-9][0-9]*$/;
		if (!regexp.test(txt)) {
			txtField.className = "has-warn form-control ";
			document.getElementById('assetNum').value = "";
		} else {
			txtField.className = "no-warn form-control ";
		}
	}
	
</script>
</div>