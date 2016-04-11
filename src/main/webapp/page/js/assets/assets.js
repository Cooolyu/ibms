/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: assets.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013-11-04     |       1.0       |  GMSZ)GuoRuofei | original version
 *******************************************************************************
 */

/**
 * 资产管理
 */
 /**
 * @author zhouyunlong
 *
 */
var assets = assets || {};

assets.re_price=/^([0-9]{1,10}|0\.[0-9]{1,2}|[1-9]{1}[0-9]{0,9}\.[0-9]{1,2})$/;

/**
 * 显示录入资产框
 */
assets.showAddAssets = function(pointId,categoryId) {
	var url = commonutil.actionPath + '/assets/assetsaddinfo';
	commonutil.doAjax(url, {'pointId':pointId,categoryId:categoryId}, function(data) {
	pageutil.showRightBar(data, '资产录入');
	}, 'html');
};

/**
 * 选择类别
 */
assets.selectCategory = function(pointId,categorySelect,cateporyId) {
	if(categorySelect!=cateporyId){
		window.location.href=commonutil.actionPath + "/assets/assetslist/"+pointId+"/"+cateporyId;
	}
};

/**
 * 添加资产时的检查
 * @returns {Boolean}
 */
assets.checkAssets = function(){
	var checkInputFlag = true;
	var nummatch = /^([\d]*)$/;
	var nummatch2 = /^[0-9]+(.[0-9]{1,2})?$/;
	var serialNumber = commonutil.stringTrim($("#serialNumber").val());
	if(!serialNumber){
		checkInputFlag=false;
		pageutil.showCheckResult('serialNumberDiv',3,'编号不能为空');
	} else if(!commonutil.checkLength(serialNumber,20)){
		checkInputFlag=false;
		pageutil.showCheckResult('serialNumberDiv',3,'编号不能超过20个字符');
	}else{
		pageutil.showCheckResult('serialNumberDiv',1,'');
	}
	var name = commonutil.stringTrim($("#name").val());
	if(!name){
		checkInputFlag=false;
		pageutil.showCheckResult('nameDiv',3,'名称不能为空');
	} else if(!commonutil.checkLength(name,100)){
		checkInputFlag=false;
		pageutil.showCheckResult('nameDiv',3,'名称不能超过100个字符');
	}else{
		pageutil.showCheckResult('nameDiv',1,'');
	}
	
	var categoryId = $("#categoryId").val();
	if(categoryId==0){
		checkInputFlag=false;
		pageutil.showCheckResult('categoryIdDiv',3,'请选择资产类别');
	}else{
		pageutil.showCheckResult('categoryIdDiv',1,'');
	}
	
	var brandId = $("#brandId").val();
	if(brandId==0){
		checkInputFlag=false;
		pageutil.showCheckResult('brandIdDiv',3,'请选择资产品牌');
	}else{
		pageutil.showCheckResult('brandIdDiv',1,'');
	}
	
	var model = commonutil.stringTrim($("#model").val());
	if(!model){
		pageutil.showCheckResult('modelDiv',1,'');
	}else if(!commonutil.checkLength(model,200)){
		checkInputFlag=false;
		pageutil.showCheckResult('modelDiv',3,'型号不能超过200个字符');
	}else{
		pageutil.showCheckResult('modelDiv',1,'');
	}
	
	var number = commonutil.stringTrim($("#number").val());
	if(!number){
		pageutil.showCheckResult('numberDiv',3,'数量不能为空');
	}else if(!nummatch2.test(number)){
		checkInputFlag=false;
		pageutil.showCheckResult('numberDiv',3,'数量必须为数字,精确到小数点后两位');
	}else{
		pageutil.showCheckResult('numberDiv',1,'');
	}
	
	var mangerMode = $("#mangerMode").val();
	if(mangerMode==-1){
		checkInputFlag=false;
		pageutil.showCheckResult('mangerModeDiv',3,'请选择资管理方式');
	}else{
		pageutil.showCheckResult('mangerModeDiv',1,'');
	}
	
	var unit = commonutil.stringTrim($("#unit").val());
	if(!unit){
		pageutil.showCheckResult('unitDiv',1,'');
	}else if(!commonutil.checkLength(unit,20)){
		checkInputFlag=false;
		pageutil.showCheckResult('unitDiv',3,'单位不能超过20个字符');
	}else{
		pageutil.showCheckResult('unitDiv',1,'');
	}
	
	
//	var valuable = commonutil.stringTrim($("#valuable").val());
//	if(valuable==-1){
//		checkInputFlag=false;
//		pageutil.showCheckResult('valuableDiv',3,'请选择贵重程度');
//	}else{
//		pageutil.showCheckResult('valuableDiv',1,'');
//	}
	
	var position = commonutil.stringTrim($("#position").val());
	if(!position){
		pageutil.showCheckResult('positionDiv',1,'');
	}else if(!commonutil.checkLength(position,20)){
		checkInputFlag=false;
		pageutil.showCheckResult('positionDiv',3,'位置不能超过20个字符');
	}else{
		pageutil.showCheckResult('positionDiv',1,'');
	}
	
	var status = $("#status").val();
	if(status==0){
		checkInputFlag=false;
		pageutil.showCheckResult('statusDiv',3,'请选择状态');
	}else{
		pageutil.showCheckResult('statusDiv',1,'');
	}
	pageutil.showCheckResult('useStartDateDiv',1,'');
//	
//	var purchaseDate = commonutil.stringTrim($("#purchaseDate").val());
//	
//	pageutil.showCheckResult('purchaseDateDiv',1,'');
//	
//	var useStartDate = commonutil.stringTrim($("#useStartDate").val());
//	if(status!=3 && !useStartDate){
//		pageutil.showCheckResult('useStartDateDiv',1,'');
//	}else if(purchaseDate && useStartDate && purchaseDate > useStartDate){
//		checkInputFlag=false;
//		pageutil.showCheckResult('useStartDateDiv',3,'移交客户使用日必须大于等于期购置日期');
//	}else{
//		pageutil.showCheckResult('useStartDateDiv',1,'');
//	}
	var makerWarrantMonths = commonutil.stringTrim($("#makerWarrantMonths").val());
	if(!makerWarrantMonths){
		pageutil.showCheckResult('makerWarrantMonthsDiv',1,'');
	}else if(!nummatch.test(makerWarrantMonths)){
		checkInputFlag=false;
		pageutil.showCheckResult('makerWarrantMonthsDiv',3,'厂商质保年限必须是0~1200内正整数');
	}else{
		if(parseInt(makerWarrantMonths,10)<0 || parseInt(makerWarrantMonths,10)>1200){
			checkInputFlag=false;
			pageutil.showCheckResult('makerWarrantMonthsDiv',3,'厂商质保年限必须是0~1200内正整数');

		}else{
			pageutil.showCheckResult('makerWarrantMonthsDiv',1,'');
		}
	}
//
//	var comWarrantMonths = commonutil.stringTrim($("#comWarrantMonths").val());
//	if(!comWarrantMonths){
//		pageutil.showCheckResult('comWarrantMonthsDiv',1,'');
//	}else if(!nummatch.test(comWarrantMonths)){
//		checkInputFlag=false;
//		pageutil.showCheckResult('comWarrantMonthsDiv',3,'公司质保年限必须是0~1200内正整数');
//	}else{
//		if(parseInt(comWarrantMonths,10)<0 || parseInt(comWarrantMonths,10)>1200){
//			checkInputFlag=false;
//			pageutil.showCheckResult('comWarrantMonthsDiv',3,'公司质保年限必须是0~1200内正整数');
//		}else{
//			pageutil.showCheckResult('comWarrantMonthsDiv',1,'');
//		}
//	}
	
	var lifeEndMonths = commonutil.stringTrim($("#lifeEndMonths").val());
	
	if(!lifeEndMonths){
		pageutil.showCheckResult('lifeEndMonthsDiv',1,'');
	}else if(!nummatch.test(lifeEndMonths)){
		checkInputFlag=false;
		pageutil.showCheckResult('lifeEndMonthsDiv',3,'生命期必须是0~1200内正整数');	
	}else{
		if(parseInt(lifeEndMonths,10)<0 || parseInt(lifeEndMonths,10)>1200){
			checkInputFlag=false;
			pageutil.showCheckResult('lifeEndMonthsDiv',3,'生命期必须是0~1200内正整数');	
		}else{
			pageutil.showCheckResult('lifeEndMonthsDiv',1,'');
		}
	}
	
	var memo = commonutil.stringTrim($("#memo").val());
	if(!commonutil.checkLength(memo,200)){
		checkInputFlag=false;
		pageutil.showCheckResult('memoDiv',3,'备注不能超过200个字符');	
	}else{
		pageutil.showCheckResult('memoDiv',1,'');
	}
	
	return checkInputFlag;
};

/**
 * 选择状态后的动作
 */
assets.changeStatus = function(){
	var status = commonutil.stringTrim($("#status").val());
	switch(status){
	case '3': //备用
		$("#useStartDateDiv").hide();
		$("#useStartDate").val("");
		break;
	default:
		$("#useStartDate").val("");
		$("#useStartDateDiv").show();
		break;
	}
		
};

/**
 * 添加资产
 */
assets.addAssets = function(){
	if(!assets.checkAssets()){
		return;
	}
	
	commonutil.doAjax(commonutil.actionPath + '/assets/addassets',$('#assetsForm').serialize(), function(data) {
		if (data.resultId == commonutil.SUCCESS_FLAG) {
			pageutil.showTip(data.message);
			setTimeout(function() {
				assets.queryAssetsList();
			}, pageutil.RELOAD_TIME);
		} else {
			alert(data.message);
		}
	}, 'json');
};

/**
 * 查询资产信息
 */
assets.queryAssetsList = function(){
	var serialNumber = commonutil.stringTrim($("#serialNumberIn").val());
	if(!commonutil.checkLength(serialNumber,20)){
		alert("编号不能超过20个字符");
		return;
	}
	
	$('#serialNumber').val($('#serialNumberIn').val());
	$('#name').val($('#nameIn').val());
	//$('#assetsCategoryId').val($('#assetsCategoryIdIn').val());
	$('#brandId').val($('#brandIdIn').val());
	$('#valuable').val($('#valuableIn').val());
	$('#status').val($('#statusIn').val());
	$('#purchaseStartDate').val($('#purchaseStartDateIn').val());
	$('#purchaseEndDate').val($('#purchaseEndDateIn').val());
	$('#makerWarrantStartDate').val($('#makerWarrantStartDateIn').val());
	$('#makerWarrantEndDate').val($('#makerWarrantEndDateIn').val());
	$('#useStartDate').val($('#useStartDateIn').val());
	$('#useEndDate').val($('#useEndDateIn').val());
	$('#comWarrantStartDate').val($('#comWarrantStartDateIn').val());
	$('#comWarrantEndDate').val($('#comWarrantEndDateIn').val());
	$('#lifeStartDate').val($('#lifeStartDateIn').val());
	$('#lifeEndDate').val($('#lifeEndDateIn').val());
	document.getElementById('assetsQueryForm').submit();
};


/**
 * 显示修改资产信息
 * @param assetsId
 */
assets.showModifyAssets = function(assetsId){
	var url = commonutil.actionPath + '/assets/assetsmodifyinfo';
	commonutil.doAjax(url, {'assetsId':assetsId}, function(data) {
		pageutil.showRightBar(data, '资产修改');
		$("#operateCoin").html($("#operateCoins_"+assetsId).html());
		$("#showModifyAssets_"+assetsId).hide();
	}, 'html');
};


/**
 * 修改资产
 */
assets.modifyAssets = function(){
	if(!assets.checkAssets()){
		return;
	}
	if(confirm("确认要修改吗?")){
	commonutil.doAjax(commonutil.actionPath + '/assets/modifyassets',$("#AssetsForm").serialize(), function(data) {
		if (data.resultId == commonutil.SUCCESS_FLAG) {
			pageutil.showTip(data.message);
			setTimeout(function() {
				assets.queryAssetsList();
			}, pageutil.RELOAD_TIME);
		} else {
			alert(data.message);
		}
	}, 'json');
	}
};

/**
 * 显示资产的详细信息
 */
assets.showAssetsDetail = function(assetsId){
	var url = commonutil.actionPath + '/assets/assetsdetail';
	commonutil.doAjax(url, {'assetsId':assetsId}, function(data) {
		pageutil.showRightBar(data, '资产详细');
		pageutil.enlargeRightBar();
		$("#operateCoin").html($("#operateCoins_"+assetsId).html());
		$("#showAssetsDetail_"+assetsId).hide();
	}, 'html');

};

/**
 * 显示资产的详细信息
 */
assets.showAssetsAlertDetail = function(assetsId){
	var url = commonutil.actionPath + '/assets/assetsdetail';
	commonutil.doAjax(url, {'assetsId':assetsId}, function(data) {
		pageutil.showRightBar(data, '资产详细');
		pageutil.enlargeRightBar();
		$("#operateCoin").html($("#operateCoins_"+assetsId).html());
		$("#showAssetsAlertDetail_"+assetsId).hide();
	}, 'html');
};

/**
 * 删除资产
 * @param assetsId
 */
assets.deleteAssets = function(assetsId){
	if(confirm("确认要删除吗?")){
		var url = commonutil.actionPath + '/assets/deleteassets';
		commonutil.doAjax(url,{"assetsId":assetsId}, function(data) {
			if (data.resultId == commonutil.SUCCESS_FLAG) {
				pageutil.showTip(data.message);
				setTimeout(function() {
					assets.queryAssetsList();
				}, pageutil.RELOAD_TIME);
			} else {
				alert(data.message);
			}
		}, 'json');
	}
};

assets.showAssetsList = function(pointId,cateporyId){
	window.location.href=commonutil.actionPath + "/assets/assetslist/"+pointId+"/"+cateporyId;
};


assets.importAssets = function(pointId) {
	  var file = $('#importFile').val();
	  file = file.substring(file.lastIndexOf("."),file.length);
	  if (!file) {
	   alert("请选择资产EXCEL文件!");
	   return false;
	  }
	  if (!(file == ".xls")) {
	   alert("请导入正确的EXCEL文件，仅支持xls格式!");
	   return false;
	  }
	  alert("确定导入所选的资产数据吗？");
	 $('#importForm').submit();
	 
};



/**显示资产供应商*/
assets.showAssetsSupplier=function(assetsId){
	var url = commonutil.actionPath + '/assets/assetssupplier';
	commonutil.doAjax(url, {'assetsId':assetsId}, function(data) {
		
		pageutil.showRightBar(data, '资产供应商');
		//$("#operateCoin").html($("#operateCoins_"+assetsId).html());
		//$("#supplier_"+assetsId).hide();
	}, 'html');
};

/**
 * 显示具体维护单详细信息
 * @param mlistId
 */
assets.showMlistDetail = function(mlistId){
	var url1 = commonutil.actionPath + '/mlist/detail';
	commonutil.doAjax(url1, {'mlistId':mlistId}, function(data) {
		$("#otherDetail").html(data);
		$("#assetsDetail").hide();
		$("#backAssets").show();
		$("#otherDetail").show();
		pageutil.showRightBarAn("维护单详细");
	}, 'html');
};
/**维护单返回资产*/
assets.backAssetsDetail=function(){
	pageutil.showRightBarAn("资产详细");
	$("#assetsDetail").show();
	$("#backAssets").hide();
	$("#otherDetail").hide();
}