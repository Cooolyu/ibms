/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: login.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013年11月7日         |      1.0        | GMSZ)huangjuan   | original version
 *******************************************************************************
 */

var category = category || {};

/**
 * Description: 根据查询条件分页显示子系统列表
 */
category.doquery = function() {
	var showCategoryName = commonutil.stringTrim($("#showCategoryName").val());
	if(!commonutil.checkLength(showCategoryName,100)){
		alert("子系统名称不能超过100个字符");
		return;
	}
	$('#start').val(0);
	$('#pageSize').val(30);
	$('#currentPage').val(1);
	$('#categoryName').val(showCategoryName);
	$('#assetsCategoryQueryForm').submit();
};

/**
 * Description: 打开添加子系统页面
 */
category.goAdd = function() {
	var url = commonutil.actionPath  + '/assetscategory/add';
	commonutil.doAjax(url, {}, function(data) {
		pageutil.showRightBar(data, '建筑子系统添加');
	}, 'html');
};

/**
 * Description: 添加更多检查项目
 */
category.moreItem = function() {
	var checkItem = '<div class="form-group col-sm-12">'
	+'<input type="hidden" id="checkItemId" name="checkItemId"/>'
	+'<label for="modifyAssetsCategoryName">子系统检查项目:</label>'
	+'<input type="text" class="form-control" id="checkItem" name="checkItem" placeholder="最大长度100位"/>'
	+'</div>';
	$("#addMoreItemDiv").before(checkItem);
};

/**
 * Description: 添加子系统
 */
category.doAdd = function() {
	var name = $('#addAssetsCategoryName').val();
	if (category.checkAssetsCategoryName(name) == false) return;
	
	var url = commonutil.actionPath + '/assetscategory/doadd';
	commonutil.doAjax(url, $('#assetsCategoryAddForm').serialize(), function(data) {
		if (data.resultValue == true) {
			pageutil.showTip('子系统添加成功');
			pageutil.hideRightBar();
			setTimeout(category.doquery, 1500);
		} else {
			alert(data.message);
		}
	}, 'json');
};

/**
 * Description: 检查子系统名称是否符合规范
 */
category.checkAssetsCategoryName = function(name) {
	var flag = true;
	if (name.length == 0) {
		alert('名称不可为空!');
		flag = false;
	} else if (commonutil.stringTrim(name).length != name.length) {
		alert('名称开始和结尾不可以是空格!');
		flag = false;
	} else if (commonutil.checkLength(name, 100) == false) {
		alert('名称不可以超过100个字!');
		flag = false;
	}
	return flag;
};

/**
 * Description: 检查设备类型ID
 */
category.checkNum = function(num) {
	var flag = true;
	var cellNum = /^\d+$/;
	if (num.length >0 && !cellNum.test(num)) {
		alert('设备类型ID必须是数字!');
		flag = false;
	}
	return flag;
};

/**
 * Description: 删除子系统
 */
category.doDel = function(assetsCategoryId) {
	if (confirm('您确定要删除吗?删除后将不可恢复!')) {
		var url = commonutil.actionPath + '/assetscategory/delete';
		commonutil.doAjax(url, {'categoryId':assetsCategoryId}, function(data) {
			if (data.resultValue == true) {
				pageutil.showTip('子系统删除成功');
				setTimeout(category.doquery,1500);
			} else {
				alert(data.message);
			}
		}, 'json');
	}
};

/**
 * Description: 打开修改界面
 */
category.goModify= function(assetsCategoryId) {
	var url = commonutil.actionPath + '/assetscategory/modify';
	commonutil.doAjax(url, {'categoryId':assetsCategoryId}, function(data) {
		pageutil.showRightBar(data, '修改子系统信息');
	}, 'html');
};

/**
 * Description: 修改子系统信息
 */
category.doModify = function() {
	var categoryId = $('#modifyCategoryId').val();
	var categoryName = $('#modifyCategoryName').val();
	if (category.checkAssetsCategoryName(categoryName) == false) return;

	var url = commonutil.actionPath + '/assetscategory/domodify';
	commonutil.doAjax(url, $('#categoryModifyForm').serialize(), function(data) {
		if (data.resultValue == true) {
			category.oneLine(categoryId);
			pageutil.showTip('修改成功');
			setTimeout(category.doquery,1500);
		} else {
			alert(data.message);
		}
	}, 'json');
};

/**
 * Description: 获取列表中某一行子系统的html代码
 */
category.oneLine = function(categoryId) {
	var onelineurl = commonutil.actionPath + '/assetscategory/onelinecategory';
	commonutil.doAjax(onelineurl, {'categoryId':categoryId}, function(data) {
		var lineNum = $('#tr'+categoryId+'>td:first').text();
		$('#tr'+categoryId).html(data);
		$('#tr'+categoryId+'>td:first').text(lineNum);
	}, 'html');
};


category.delItem = function(indexId,id) {
	if($("#delItem_"+indexId).is(":checked")){
		$("#delItem_"+indexId).val(id);
	}else{
		$("#delItem_"+indexId).val("");
	}
};
