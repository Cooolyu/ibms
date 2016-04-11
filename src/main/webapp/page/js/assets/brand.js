/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: login.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013年11月7日         |      1.0        | GMSZ)huangjuan   | original version
 *******************************************************************************
 */

var brand = brand || {};

/**
 * Description: 根据查询条件分页显示品牌列表
 */
brand.doquery = function() {
	var showBrandName = commonutil.stringTrim($("#showBrandName").val());
	if(!commonutil.checkLength(showBrandName,20)){
		alert("品牌名称不能超过20个字符");
		return;
	}
	$('#start').val(0);
	$('#pageSize').val(30);
	$('#currentPage').val(1);
	$('#brandName').val(showBrandName);
	$('#assetsBrandQueryForm').submit();
};

/**
 * Description: 打开添加品牌页面
 */
brand.goAdd = function() {
	var url = commonutil.actionPath  + '/assetsbrand/add';
	commonutil.doAjax(url, {}, function(data) {
		pageutil.showRightBar(data, '品牌添加');
	}, 'html');
};

/**
 * Description: 添加品牌
 */
brand.doAdd = function() {
	var name = $('#addAssetsBrandName').val();
	if (brand.checkAssetsBrandName(name) == false) return;
	
	var url = commonutil.actionPath + '/assetsbrand/doadd';
	commonutil.doAjax(url, $('#assetsBrandAddForm').serialize(), function(data) {
		if (data.resultValue == true) {
			pageutil.showTip('品牌添加成功');
			pageutil.hideRightBar();
			setTimeout(brand.doquery, 1500);
		} else {
			alert(data.message);
		}
	}, 'json');
};

/**
 * Description: 检查品牌名称是否符合规范
 */
brand.checkAssetsBrandName = function(name) {
	var flag = true;
	if (name.length == 0) {
		alert('名称不可为空!');
		flag = false;
	} else if (commonutil.stringTrim(name).length != name.length) {
		alert('名称开始和结尾不可以是空格!');
		flag = false;
	} else if (commonutil.checkLength(name, 20) == false) {
		alert('名称不可以超过20个字!');
		flag = false;
	}
	return flag;
};

/**
 * Description: 删除品牌
 */
brand.doDel = function(assetsBrandId) {
	if (confirm('您确定要删除吗?删除后将不可恢复!')) {
		var url = commonutil.actionPath + '/assetsbrand/delete';
		commonutil.doAjax(url, {'brandId':assetsBrandId}, function(data) {
			if (data.resultValue == true) {
				pageutil.showTip('品牌删除成功');
				setTimeout(brand.doquery,1500);
			} else {
				alert(data.message);
			}
		}, 'json');
	}
};

/**
 * Description: 打开修改界面
 */
brand.goModify= function(assetsBrandId) {
	var url = commonutil.actionPath + '/assetsbrand/modify';
	commonutil.doAjax(url, {'brandId':assetsBrandId}, function(data) {
		pageutil.showRightBar(data, '修改品牌信息');
	}, 'html');
};

/**
 * Description: 修改品牌信息
 */
brand.doModify = function() {
	var brandId = $('#modifyBrandId').val();
	var brandName = $('#modifyBrandName').val();
	if (brand.checkAssetsBrandName(brandName) == false) return;
	
	var url = commonutil.actionPath + '/assetsbrand/domodify';
	commonutil.doAjax(url, $('#brandModifyForm').serialize(), function(data) {
		if (data.resultValue == true) {
			brand.oneLine(brandId);
			pageutil.showTip('修改成功');
			setTimeout(brand.doquery,1500);
		} else {
			alert(data.message);
		}
	}, 'json');
};

/**
 * Description: 获取列表中某一行品牌的html代码
 */
brand.oneLine = function(brandId) {
	var onelineurl = commonutil.actionPath + '/assetsbrand/onelinebrand';
	commonutil.doAjax(onelineurl, {'brandId':brandId}, function(data) {
		var lineNum = $('#tr'+brandId+'>td:first').text();
		$('#tr'+brandId).html(data);
		$('#tr'+brandId+'>td:first').text(lineNum);
	}, 'html');
};