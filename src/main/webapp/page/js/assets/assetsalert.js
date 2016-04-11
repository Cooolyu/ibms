/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: assets.js
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013-1-10      |       1.0       |  GMSZ)yanwenjie | original version
 *******************************************************************************
 */

/**
 * 资产提醒管理
 */
var assetsalert = assetsalert || {};

$(function() {
	if($("#pointIdHidden").val()){
		mlist.storeSinglePointMlist($("#pointIdHidden").val());
	}else{
		mlist.storeAllPointMlist();
	}
});
/**
 * 查询提醒
 */
assetsalert.queryAssetsAlertList = function(){
//	$("#alertType").val($("#alertTypeIn").val());
	$("#status").val($("#statusIn").val());
//	$("#makerWarrantStartDate").val($("#makerWarrantStartDateIn").val());
//	$("#makerWarrantEndDate").val($("#makerWarrantEndDateIn").val());
	$("#lifeStartDate").val($("#lifeStartDateIn").val());
	$("#lifeEndDate").val($("#lifeEndDateIn").val());
	if(!$("#pointIdHidden").val()){	
		$("#pointId").val($("#pointIdIn").val());
	}else{
		$("#pointId").val($("#pointIdHidden").val());
	}

	document.getElementById('alertQueryForm').submit();
	
};


/**
 * 选择所有的资产提醒
 */
assetsalert.selectAllAlert = function(){
	if ($("#checkAll").is(":checked")){
		$("input[name=assetsIdsCheck]").each(function(){
			//选中所有框，并设置传给后台的参数
			$(this).prop("checked","checked");
			var strArray = new Array();
			strArray = $(this).val().split(",");
			$("#assetsIds_"+strArray[0]).val(strArray[1]);
			$("#alertTypeH"+strArray[0]).val(strArray[2]);
			$("#pointIdH"+strArray[0]).val(strArray[3]);
		});
	 }else{
		 $("input[name=assetsIdsCheck]").each(function(){
			//取消选中所有框，并清除传给后台的参数
			$(this).prop("checked",false);
			var strArray = new Array();
			strArray = $(this).val().split(",");
			$("#assetsIds_"+strArray[0]).val("");
			$("#alertTypeH"+strArray[0]).val("");
			$("#pointIdH"+strArray[0]).val("");
		});
	 }
};


/**
 * 查询资产提醒
 */
assetsalert.queryAlertList = function(){
	document.getElementById('alertQueryForm').submit();
};



/**
 * 选择某个提醒
 */
assetsalert.selectAlert = function(assetsId,indexId,alertType,pointId){
	if($("#assetsIdsCheck_"+indexId).is(":checked")){
		$("#assetsIds_"+indexId).val(assetsId);
		$("#alertTypeH"+indexId).val(alertType);
		$("#pointIdH"+indexId).val(pointId);
	}else{
		$("#assetsIds_"+indexId).val("");
		$("#alertTypeH"+indexId).val("");
		$("#pointIdH"+indexId).val("");
	}
};


/**
 * 为单个提醒创建维护单
 */
assetsalert.showCreateSingularMlist = function(pointId){
	var url = commonutil.actionPath + '/assetsalert/getcreatemlistinfo/'+pointId;
	commonutil.doAjax(url, {}, function(data) {
		pageutil.showRightBar(data, '创建维护单');
	}, 'html');
};


/**
 * 选择单个提醒添加到维护单
 */
assetsalert.showAddSingularMlist = function(assetsId,mlistNum){
	var pointId = $("#pointId").val();
	var url = commonutil.actionPath + '/assetsalert/getaddmlistinfo';
	commonutil.doAjax(url, {"assetsIdStr":assetsId,"pointId":pointId,"mlistNum":mlistNum}, function(data) {
		pageutil.showRightBar(data, '添加到维护单');
	}, 'html');
};


/**
 * 创建维护单
 */
assetsalert.CreateMlist = function(pointIdPath){
	var checkInputFlag = true;
	/*var maintainUserId = $("#maintainUserId").val();
	if(!maintainUserId || maintainUserId==0){
		checkInputFlag=false;
		pageutil.showCheckResult('maintainUserIdDiv',3,'请选择实施人员');
	}else{
		pageutil.showCheckResult('maintainUserIdDiv',1,'');
	}*/

	/*var pointId = pointIdPath;
	if(!pointIdPath){
		pointId = $("#maintainMonitorId").val();
		if(!pointId || pointId==0){
			checkInputFlag=false;
			pageutil.showCheckResult('maintainMonitorIdDiv',3,'请选择运维点');
		}else{
			pageutil.showCheckResult('maintainMonitorIdDiv',1,'');
		}
	}
	*/
/*	var memo = commonutil.stringTrim($("#memo").val());
	if(!commonutil.checkLength(memo,200)){
		checkInputFlag=false;
		pageutil.showCheckResult('memoDiv',3,'备注不能超过200个字符');
	}else{
		pageutil.showCheckResult('memoDiv',1,'');
	}*/
	if(!checkInputFlag){
		return;
	}
	
	commonutil.doAjax(commonutil.actionPath + '/assetsalert/createmlist',{'maintainUserId':maintainUserId,'pointId':pointId,'memo':memo}, function(data) {
		if (data.resultId == commonutil.SUCCESS_FLAG) {
			if($("#pointIdHidden").val()){
				mlist.storeSinglePointMlist($("#pointIdHidden").val());
			}else{
				mlist.storeAllPointMlist();
			}
			alert(data.message);
			pageutil.hideRightBar();
		} else {
			alert(data.message);
		}
	}, 'json');
};

/**
 * 添加到一个已有的维护单中
 */
assetsalert.addToMlist = function(id,monitorPointId,alertTypeInt){
	if(confirm("确认要创建维护单吗?")){
		$("#actorId").val($("#maintainUserId").val());
		var actorId= $("#actorId").val();
		commonutil.doAjax(commonutil.actionPath + '/assetsalert/addtomlist',{'assetsIds':id,'alertTypeInts':alertTypeInt,'pointIds':monitorPointId,'actorId':actorId}, function(data) {
			if (data.resultId == commonutil.SUCCESS_FLAG) {
				pageutil.showTip(data.message);
				setTimeout(function() {
					assetsalert.queryAssetsAlertList();
				}, pageutil.RELOAD_TIME);
			} else {
				alert(data.message);
				assetsalert.queryAssetsAlertList();
			}
		}, 'json');
	}
};

/**
 * 显示创建维护单
 */
assetsalert.getCreateMlistInfo = function(id,monitorPointId,alertTypeInt){
	var url = commonutil.actionPath + '/assetsalert/getcreatemlistinfo';
	commonutil.doAjax(url, {'assetsIds':id,'alertTypeInts':alertTypeInt,'pointIds':monitorPointId}, function(data) {
		pageutil.showRightBar(data, '创建维护单');
	}, 'html');
};

/**
 * 添加选择的提醒到一个已有的维护单中
 */
assetsalert.addSelectedToMlist = function(){

	var assetsIdsStr = ''; 
	$("input[name=assetsIds]").each(function(i){
		  if($(this).val()!=''){
			  assetsIdsStr  += ','+$(this).val(); 
		  }
	   });
	var alertTypeStr = ''; 
	$("input[name=alertTypeH]").each(function(j){
		  if($(this).val()!=''){
			  alertTypeStr  += ','+$(this).val(); 
		  }
	   });
	var alertPointIdStr = ''; 
	$("input[name=pointIdH]").each(function(j){
		  if($(this).val()!=''){
			  alertPointIdStr  += ','+$(this).val(); 
		  }
	   });
	
	if(!assetsIdsStr){
		alert("请至少选择一个提醒");
		return;
	}
	if(confirm("确认要添加吗?")){
		commonutil.doAjax(commonutil.actionPath + '/assetsalert/addtomlist',{'assetsIds':assetsIdsStr,'alertTypeInts':alertTypeStr,'pointIds':alertPointIdStr}, function(data) {
			if (data.resultId == commonutil.SUCCESS_FLAG) {
				pageutil.showTip(data.message);
				setTimeout(function() {
					assetsalert.queryAssetsAlertList();
				}, pageutil.RELOAD_TIME);	
			} else {
				alert(data.message);
				assetsalert.queryAssetsAlertList();
			}
		}, 'json');
	}
};


