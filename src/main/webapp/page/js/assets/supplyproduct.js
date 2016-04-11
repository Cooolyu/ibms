/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: login.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013年11月7日         |      1.0        | GMSZ)huangjuan   | original version
 *******************************************************************************
 */

var supplyProduct = supplyProduct || {};

/**
 * Description: 根据查询条件分页显示供应商列表
 */
supplyProduct.doquery = function() {
//	var showSupplyProductName = commonutil.stringTrim($("#showSupplyProductName").val());
//	if(!commonutil.checkLength(showSupplyProductName,20)){
//		alert("供应商名称不能超过20个字符");
//		return;
//	}
	
	$('#start').val(0);
	$('#pageSize').val(30);
	$('#currentPage').val(1);
	$('#supplierId').val($('#supplierIn').val());
	$('#categoryId').val($('#categoryIn').val());
	$('#brandId').val($('#brandIn').val());
	$('#model').val($('#modelIn').val());
	$('#supplyProductQueryForm').submit();
};

/**
 * Description: 打开添加供应商页面
 */
supplyProduct.goAdd = function() {
	var url = commonutil.actionPath  + '/assetssupplyProduct/add';
	commonutil.doAjax(url, {}, function(data) {
		pageutil.showRightBar(data, '供应商设备添加');
	}, 'html');
};

/**
 * Description: 添加供应商
 */
supplyProduct.doAdd = function() {
	if (supplyProduct.checkSupplyProductName() == false) return;
	
	var url = commonutil.actionPath + '/assetssupplyProduct/doadd';
	commonutil.doAjax(url, $('#supplyProductAddForm').serialize(), function(data) {
		if (data.resultValue == true) {
			pageutil.showTip('供应商设备添加成功');
			pageutil.hideRightBar();
			setTimeout(supplyProduct.doquery, 1500);
		} else {
			alert(data.message);
		}
	}, 'json');
};

/**
 * Description: 检查供应商名称是否符合规范
 */
supplyProduct.checkSupplyProductName = function() {
	var supplierIn = $("#supplierIn").val();
	if(supplierIn==0){
		alert('请选择供应商');
		return false;
	}
	var categoryIn = $("#categoryIn").val();
	if(categoryIn==0){
		alert('请选择分类');
		return false;
	}
	var brandIn = $("#brandIn").val();
	if(brandIn==0){
		alert('请选择品牌');
		return false;
	}
	var modelIn = $("#modelIn").val();
	if (modelIn.length == 0) {
		alert('型号不可为空!');
		return false;
	} else if (commonutil.stringTrim(modelIn).length != modelIn.length) {
		alert('型号开始和结尾不可以是空格!');
		return false;
	} else if (commonutil.checkLength(modelIn, 200) == false) {
		alert('型号不可以超过200个字!');
		return false;
	}
	
	var priceIn = $('#priceIn').val();
	if(priceIn.length > 20){
		alert('价格不可以超过20位!');
		return false;
	}
	
	
};

/**
 * Description: 删除供应商
 */
supplyProduct.doDel = function(supplyProductId) {
	if (confirm('您确定要删除吗?删除后将不可恢复!')) {
		var url = commonutil.actionPath + '/assetssupplyProduct/delete';
		commonutil.doAjax(url, {'supplyProductId':supplyProductId}, function(data) {
			if (data.resultValue == true) {
				pageutil.showTip('供应商删除成功');
				setTimeout(supplyProduct.doquery,1500);
			} else {
				alert(data.message);
			}
		}, 'json');
	}
};

/**
 * Description: 打开修改界面
 */
supplyProduct.goModify= function(supplyProductId) {
	var url = commonutil.actionPath + '/assetssupplyProduct/modify';
	commonutil.doAjax(url, {'supplyProductId':supplyProductId}, function(data) {
		pageutil.showRightBar(data, '修改供应商设备信息');
	}, 'html');
};

/**
 * Description: 修改供应商信息
 */
supplyProduct.doModify = function() {
	var supplyProductId = $('#modifySupplyProductId').val();
	if (supplyProduct.checkSupplyProductName() == false) return;
	
	var url = commonutil.actionPath + '/assetssupplyProduct/domodify';
	commonutil.doAjax(url, $('#supplyProductModifyForm').serialize(), function(data) {
		if (data.resultValue == true) {
			supplyProduct.oneLine(supplyProductId);
			pageutil.showTip('修改成功');
			pageutil.hideRightBar();
		} else {
			alert(data.message);
		}
	}, 'json');
};

/**
 * Description: 获取列表中某一行供应商的html代码
 */
supplyProduct.oneLine = function(supplyProductId) {
	var onelineurl = commonutil.actionPath + '/assetssupplyProduct/onelinesupplyProduct';
	commonutil.doAjax(onelineurl, {'supplyProductId':supplyProductId}, function(data) {
		var lineNum = $('#tr'+supplyProductId+'>td:first').text();
		$('#tr'+supplyProductId).html(data);
		$('#tr'+supplyProductId+'>td:first').text(lineNum);
	}, 'html');
};