/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: login.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013年11月7日         |      1.0        | GMSZ)huangjuan   | original version
 *******************************************************************************
 */

var supplier = supplier || {};

/**
 * Description: 根据查询条件分页显示供应商列表
 */
supplier.doquery = function() {
	var showSupplierName = commonutil.stringTrim($("#showSupplierName").val());
	if(!commonutil.checkLength(showSupplierName,20)){
		alert("供应商名称不能超过20个字符");
		return;
	}
	$('#start').val(0);
	$('#pageSize').val(30);
	$('#currentPage').val(1);
	$('#supplierName').val(showSupplierName);
	$('#supplierQueryForm').submit();
};

/**
 * Description: 打开添加供应商页面
 */
supplier.goAdd = function() {
	var url = commonutil.actionPath  + '/assetssupplier/add';
	commonutil.doAjax(url, {}, function(data) {
		pageutil.showRightBar(data, '供应商添加');
	}, 'html');
};

/**
 * Description: 添加供应商
 */
supplier.doAdd = function() {
	if (supplier.checkSupplierName() == false) return;
	
	var url = commonutil.actionPath + '/assetssupplier/doadd';
	commonutil.doAjax(url, $('#supplierAddForm').serialize(), function(data) {
		if (data.resultValue == true) {
			pageutil.showTip('供应商添加成功');
			pageutil.hideRightBar();
			setTimeout(supplier.doquery, 1500);
		} else {
			alert(data.message);
		}
	}, 'json');
};

/**
 * Description: 检查供应商名称是否符合规范
 */
supplier.checkSupplierName = function() {
	var name = $('#supplierName').val();
	var flag = true;
	if (name.length == 0) {
		alert('供应商名称不可为空!');
		flag = false;
	} else if (commonutil.stringTrim(name).length != name.length) {
		alert('供应商名称开始和结尾不可以是空格!');
		flag = false;
	} else if (commonutil.checkLength(name, 20) == false) {
		alert('供应商名称不可以超过20个字!');
		flag = false;
	}
	var salesName = $('#salesName').val();
	if (salesName.length == 0) {
		alert('销售人员不可为空!');
		flag = false;
	} else if (commonutil.stringTrim(salesName).length != salesName.length) {
		alert('销售人员开始和结尾不可以是空格!');
		flag = false;
	} else if (commonutil.checkLength(salesName, 20) == false) {
		alert('销售人员不可以超过20个字!');
		flag = false;
	}
	var salesPhone = $('#salesPhone').val();
	var cellphone=/^([\d-]*)$/;
	
	if(!cellphone.test(salesPhone)){
		alert('电话只能包含数字、横线!');
		flag = false;
	}else if (commonutil.stringTrim(salesPhone).length >20) {
		alert('电话最长20个字符!');
		flag = false;
	}
	var salesMail = $('#salesMail').val();
	var cellEmail =/^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/;
	//var cellEmail=/\w@\w*\.\w/;
	if (commonutil.stringTrim(salesMail).length != 0) {
		if(!cellEmail.test(salesMail)){
//			alert('邮箱地址不合法!');
//			flag = false;
		}else if (commonutil.stringTrim(salesMail).length >50) {
			alert('邮箱最长50个字符!');
			flag = false;
		}
	}
	return flag;
};

/**
 * Description: 删除供应商
 */
supplier.doDel = function(supplierId) {
	if (confirm('您确定要删除吗?删除后将不可恢复!')) {
		var url = commonutil.actionPath + '/assetssupplier/delete';
		commonutil.doAjax(url, {'supplierId':supplierId}, function(data) {
			if (data.resultValue == true) {
				pageutil.showTip('供应商删除成功');
				setTimeout(supplier.doquery,1500);
			} else {
				alert(data.message);
			}
		}, 'json');
	}
};

/**
 * Description: 打开修改界面
 */
supplier.goModify= function(supplierId) {
	var url = commonutil.actionPath + '/assetssupplier/modify';
	commonutil.doAjax(url, {'supplierId':supplierId}, function(data) {
		pageutil.showRightBar(data, '修改供应商信息');
	}, 'html');
};

/**
 * Description: 修改供应商信息
 */
supplier.doModify = function() {
	var supplierId = $('#modifySupplierId').val();
	if (supplier.checkSupplierName() == false) return;
	
	var url = commonutil.actionPath + '/assetssupplier/domodify';
	commonutil.doAjax(url, $('#supplierModifyForm').serialize(), function(data) {
		if (data.resultValue == true) {
			supplier.oneLine(supplierId);
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
supplier.oneLine = function(supplierId) {
	var onelineurl = commonutil.actionPath + '/assetssupplier/onelinesupplier';
	commonutil.doAjax(onelineurl, {'supplierId':supplierId}, function(data) {
		var lineNum = $('#tr'+supplierId+'>td:first').text();
		$('#tr'+supplierId).html(data);
		$('#tr'+supplierId+'>td:first').text(lineNum);
	}, 'html');
};