function trim(str)
{
	return (str || "").replace( /^\s+|\s+$/g, "" );
}

function validateInteger(value, label){
	if (value.length == 0 || isNaN(value)) {
		alert(label + "必须是一个整数.");
		return false;
	} else {
		var re = /^[0-9]+[0-9]*]*$/;   //判断正整数 
		if (!re.test(value)){
			alert(label + "必须是一个整数.");
	        return false;
	    }
		 
		var isNumber = false;
		for (var count = 0; count<value.length; count++) {
	       var code = value.charCodeAt(count);
	       if ((48 > code && code >57)) {
				alert(label + "必须是一个整数.");
				return false;
	       }
	   }
	}
	return true;
}
	
function validateIntegerRange(value, min, max, label) {
	if (value.length == 0 || isNaN(value)) {
		alert(label + "必须是一个整数.");
		return false;
	} else {
		var re = /^[0-9]+[0-9]*]*$/;   //判断正整数 
		if (!re.test(value)){
			alert(label + "必须是一个整数.");
	        return false;
	    }
		 
		var isNumber = false;
		for (var count = 0; count<value.length; count++) {
	       var code = value.charCodeAt(count);
	       if ((48 > code && code >57)) {
				alert(label + "必须是一个整数.");
				return false;
	       }
	   }
	}
	if (value < min || value > max){
		alert(label + "的取值范围:在" + min + "-" + max + "之间.");
		return false;
	}
	return true;
}

function validateAddress(ipAddress) {
	if (ipAddress.length == 0) {
		alert("IP地址不能为空！");
		return false;
	}
	var tokens = trim(ipAddress).split(".");
	if (tokens.length < 4 || tokens.length > 4) {
		alert("IP地址输入不正确！");
		return false;
	}
	if (tokens[0] == 0)
	{
		alert("IP地址输入不正确！");
		return false;
	}
	for (var k=0; k<4; k++) {
		if (isNaN(tokens[k])|| (tokens[k].length ==0) || (tokens[k].length >3) ||tokens[k]>255 || tokens[k]<0) {
			alert("IP地址输入不正确！");
			return false;
		}
		if (tokens[k].length > 1 && tokens[k].indexOf("0")==0) {
			alert("IP地址输入不正确！");
			return false;
		}
		if ((tokens[k].indexOf(" ")>-1)) {
			alert("IP地址输入不正确！");
			return false;
		}
	}
	return true;
}

    /*****实时预览******/
    function StartPlayView()
    {
        var OCXobj = document.getElementById("PlayViewOCX");
		CameraID = document.getElementById("TextCameraId").value;
		if(!(parseInt(CameraID)>=1 && parseInt(CameraID)<=2147483647)){
		showMethodInvokedInfo("CameraID介于1到2147483647之间！");
		return;
	}
		//if(""==CameraID){
		//	alert("请选择一个监控点！");
		//	return;
		//}
		if (CameraID.length == 0 || isNaN(CameraID) || ""==CameraID) {
		showMethodInvokedInfo("请选择监控点，且监控点必须是一个整数！");
		//alert("必须是一个整数.");
		return ;
		}
		var ret = OCXobj.StartTask_Preview_V11(CameraID);
		switch(ret){
		case 0:
			showMethodInvokedInfo("StartTask_Preview_V11接口调用成功！");
			break;
		case -1:
			showMethodInvokedInfo("StartTask_Preview_V11接口调用失败！错误码："+ OCXobj.GetLastError_V11());
			break;
		default:
			break;
		}
    }
    /*****指定窗口实时预览******/
    function StartPlayView_InWnd()
    {
        var OCXobj = document.getElementById("PlayViewOCX");
		CameraID = document.getElementById("TextCameraId").value;
		WndIndex = document.getElementById("SelectWnd").value;
		WndNum=OCXobj.GetWndNum();
		if(WndIndex>=WndNum){
			if(WndIndex>3&&WndIndex<=8){
				OCXobj.SetWndNum(9); 
			}else if(WndIndex>9&&WndIndex<=15){
				OCXobj.SetWndNum(16);
			}else{
				OCXobj.SetWndNum(25);
			}
		}
        //if(""==CameraID){
		//	alert("请选择一个监控点！");
		//	return;
	//	}
		//if (CameraID.length == 0 || isNaN(CameraID)) {
		//alert("必须是一个整数.");
		//return ;
		//}
		var ret = OCXobj.StartTask_Preview_InWnd_V11(CameraID,WndIndex);
		switch(ret){
		case 0:
			showMethodInvokedInfo("GetWndNum、SetWndNum、StartTask_Preview_InWnd_V11接口调用成功！");
			break;
		case -1:
			showMethodInvokedInfo("StartTask_Preview_InWnd_V11接口调用失败！错误码："+ OCXobj.GetLastError_V11());
			break;
		default:
			break;
		}
    }
    /*****空闲窗口实时预览******/
    function StartPlayView_Free()
    {
        var OCXobj = document.getElementById("PlayViewOCX");
		CameraID = document.getElementById("TextCameraId").value;
        //if(""==CameraID){
		//	alert("请选择一个监控点！");
		//	return;
		//}
		//if (CameraID.length == 0 || isNaN(CameraID)) {
		//alert("必须是一个整数.");
		//return ;
	//	}
		var ret = OCXobj.StartTask_Preview_FreeWnd_V11(CameraID);
		switch(ret){
		case 0:
			showMethodInvokedInfo("StartTask_Preview_FreeWnd_V11接口调用成功！");
			break;
		case -1:
			showMethodInvokedInfo("StartTask_Preview_FreeWnd_V11接口调用失败！错误码："+ OCXobj.GetLastError_V11());
			break;
		default:
			break;
		}
    }
    /*****停止所有预览******/
    function StopPlayView()
    {
        var OCXobj = document.getElementById("PlayViewOCX");
        var ret = OCXobj.StopAllPreview();
		switch(ret){
		case 0:
			showMethodInvokedInfo("StopPlayView接口调用成功！");
			break;
		case -1:
			showMethodInvokedInfo("StopPlayView接口调用失败！错误码："+ OCXobj.GetLastError_V11());
			break;
		default:
			break;
		}
    }

function PTZControl(funcName){
	var OCXobj = $("#PlayViewOCX").get(0);
	if(OCXobj == null){
		alert("控件未安装！");
		return;
	}else{
		var res = null;
		switch(funcName){
			case "PTZLeftUp":
				res = OCXobj.StartTask_PTZ(25,1);	//云台：左上
				break;
			case "PTZUp":
				res = OCXobj.StartTask_PTZ(21,1);	//云台：上
				break;
			case "PTZRightUp":
				res = OCXobj.StartTask_PTZ(26,1);	//云台：右上
				break;
			case "PTZLeft":
				res = OCXobj.StartTask_PTZ(23,1);	//云台：左
				break;
			case "PTZAuto":
				res = OCXobj.StartTask_PTZ(29,1);	//云台：自转
				break;
			case "PTZRight":
				res = OCXobj.StartTask_PTZ(24,1);	//云台：右
				break;
			case "PTZLeftDown":
				res = OCXobj.StartTask_PTZ(27,1);	//云台：左下
				break;
			case "PTZDown":
				res = OCXobj.StartTask_PTZ(22,1);	//云台：下
				break;
			case "PTZRightDown":
				res = OCXobj.StartTask_PTZ(28,1);	//云台：右下
				break;
			case "PTZStop":
				res = OCXobj.StartTask_PTZ(-21,1);	//云台：停止
				break;
			case "PTZAddTimes":
				res = OCXobj.StartTask_PTZ(11,1);	//云台：焦距+
				break;
			case "PTZMinusTimes":
				res = OCXobj.StartTask_PTZ(12,1);	//云台：焦距-
				break;
			case "PTZFarFocus":
				res = OCXobj.StartTask_PTZ(13,1);	//云台：焦点+
				break;
			case "PTZNearFocus":
				res = OCXobj.StartTask_PTZ(14,1);	//云台：焦点-
				break;
			case "PTZLargeAperture":
				res = OCXobj.StartTask_PTZ(15,1);	//云台：光圈+
				break;
			case "PTZSmallAperture":
				res = OCXobj.StartTask_PTZ(16,1);	//云台：光圈-
				break;
		}
		
		if(res != null && res == 0){
			showMethodInvokedInfo("StartTask_PTZ接口调用成功！");
		}else{
			showMethodInvokedInfo("StartTask_PTZ接口调用失败！错误码：" + OCXobj.GetLastError_V11());
		}
	}
}
    
    /*****云台：调用预置点******/
    function GetPt()
    {
        var OCXobj = document.getElementById("PlayViewOCX");
        var ptNum = document.getElementById("usePreset").value;
		if(isNaN(ptNum)){
			showMethodInvokedInfo("参数错误：预置点是介于0到999之间的整数！");
			return;
		}
		var tempPtNum = parseInt(ptNum);
		if(!(tempPtNum>=0&&tempPtNum<=999)){
			showMethodInvokedInfo("参数错误：预置点是介于0到999之间的整数！");
			return;
		}
        var ret = OCXobj.PTZCtrlGotoPreset(ptNum); 
        switch(ret){
		case 0:
			showMethodInvokedInfo("PTZCtrlGotoPreset接口调用成功！");
			break;
		case -1:
			showMethodInvokedInfo("PTZCtrlGotoPreset接口调用失败！错误码："+ OCXobj.GetLastError_V11());
			break;
		default:
			break;
		}      
    }
    /*****云台：设置预置点******/
    function SetPt()
    {
        var OCXobj = document.getElementById("PlayViewOCX");
        var ptNum = document.getElementById("setPreset").value;
		if(isNaN(ptNum)){
			showMethodInvokedInfo("参数错误：预置点是介于0到999之间的整数！");
			return;
		}
		var tempPtNum = parseInt(ptNum);
		if(!(tempPtNum>=0&&tempPtNum<=999)){
			showMethodInvokedInfo("参数错误：预置点是介于0到999之间的整数！");
			return;
		}
        var ret = OCXobj.PTZCtrlSetPreset(parseInt(ptNum));
        switch(ret){
		case 0:
			alert("预置点设置成功！");
			showMethodInvokedInfo("PTZCtrlSetPreset接口调用成功！");
			break;
		case -1:
			alert("预置点设置失败！");
			showMethodInvokedInfo("PTZCtrlSetPreset接口调用失败！错误码："+ OCXobj.GetLastError_V11());
			break;
		default:
			break;
		}      
    }
    /*****获取视频参数******/
    function GetVideoEffect()
    {
        var OCXobj = document.getElementById("PlayViewOCX");
        retXML = OCXobj.GetVideoEffect();
		if(""==retXML){
			alert("获取失败,需要预览！");
			showMethodInvokedInfo("GetVideoEffect接口调用失败！错误码："+ OCXobj.GetLastError_V11())
			return;
		}
        var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
        xmlDoc.loadXML(retXML);
        document.getElementById("TextBright").value = xmlDoc.documentElement.childNodes[0].childNodes[0].nodeValue;
        document.getElementById("TextConstrast").value = xmlDoc.documentElement.childNodes[1].childNodes[0].nodeValue;
        document.getElementById("TextSaturation").value = xmlDoc.documentElement.childNodes[2].childNodes[0].nodeValue;
        document.getElementById("TextHue").value = xmlDoc.documentElement.childNodes[3].childNodes[0].nodeValue;
		showMethodInvokedInfo("GetVideoEffect接口调用成功！");
    }
    /*****设置视频参数******/
    function SetVideoEffect()
    {
        var OCXobj = document.getElementById("PlayViewOCX");
        BrightValue = document.getElementById("TextBright").value;
        ContrastValue = document.getElementById("TextConstrast").value;
        SaturationValue = document.getElementById("TextSaturation").value;
        HueValue = document.getElementById("TextHue").value;
		var validateRes = validateIntegerRange(BrightValue,1,10,'亮度') 
							& validateIntegerRange(ContrastValue,1,10,'对比度')
							& validateIntegerRange(SaturationValue,1,10,'饱和度')
							& validateIntegerRange(HueValue,1,10,'色调');
		if(!validateRes){
			return;
		}
        var ret = OCXobj.SetVideoEffect(parseInt(BrightValue),parseInt(ContrastValue),parseInt(SaturationValue),parseInt(HueValue));
		switch(ret){
		case 0:
			alert("设置成功！");
			showMethodInvokedInfo("SetVideoEffect接口调用成功！");
			break;
		case -1:
			alert("设置失败！");
			showMethodInvokedInfo("SetVideoEffect接口调用失败！错误码："+ OCXobj.GetLastError_V11());
			break;
		default:
			break;
		}
    }
    
/*****登录CMS******/
function loginCMS(){
	var userName=document.getElementById("TextName").value;
	var pw=document.getElementById("TextPwd").value;
	var ipAdd=document.getElementById("TextIP").value;
	var port=document.getElementById("TextPort").value;
	//if(!validateAddress(ipAdd))
	//{
	//	return;
	//}
	//if(""==port){
	//	alert("端口号不能为空！");
	//	return;
	//}
	if(!validateInteger(port,"端口"))
	{
		return;
	}
	if(!(parseInt(port)>=0 && parseInt(port)<=2147483647)){
		showMethodInvokedInfo("端口号介于0到2147483647之间！");
		return;
	}
	//if(!validateIntegerRange(port,1,65535,"端口"))
	//{
	//	return;
	//}
	//if(""==userName){
	//	alert("用户名不能为空！");
	//	return;
	//}if(""== pw){
	//	alert("密码不能为空！");
	//	return;
	//}
	var OCXobj = document.getElementById("PlayViewOCX");
	//var ret=OCXobj.LoginCMS(userName,pw,ipAdd,port);
	var ret=OCXobj.Login_V11(userName,pw,ipAdd,port,$("input:[name='dataFetchType']:radio:checked").val());
	switch(ret){
		case 0:
			//initCameraList();
			initTree();
			alert("登录成功！");
			showMethodInvokedInfo("Login_V11,GetResourceInfo 接口调用成功！");
			break;
		case -1:
			clearTree();
			alert("登录失败！");
			showMethodInvokedInfo("Login_V11接口调用失败！错误码："+ OCXobj.GetLastError_V11());
			break;
		default:
			break;
	}
	
}

/*****登出CMS******/
function logoutCMS(){
	var OCXobj = document.getElementById("PlayViewOCX");
	//var ret=OCXobj.LogoutCMS();
	var ret = OCXobj.Logout_V11();
	switch(ret){
		case 0:	
		    OCXobj.StopAllPreview();
			document.getElementById("TextPwd").value="";
			init();
			alert("退出成功！");
			$("#TextInfo").html("Logout_V11,StopAllPreview接口调用成功！\r");
			break;
		case -1:
			alert("退出失败！");
			showMethodInvokedInfo("Logout_V11接口调用失败！错误码："+ OCXobj.GetLastError_V11());
			break;
		default:
			break;
	}
}
    
/*****初始化监控点列表**************/
function initCameraList(){
	var OCXobj = document.getElementById("PlayViewOCX");
	var xmlStr=OCXobj.GetResourceInfo(4);
	//alert(xmlStr);
	var htmlStr="";
	var xmldom=getXmlDomFromStr(xmlStr);
	$(xmldom).find("Camera").each(function(){
	//htmlStr+="<li ondblclick='startPreview("+$(this).find("CameraId").text()+");'>"+$(this).find("CameraName").text()+"</li>";
	htmlStr+="<li ondblclick='startPreview("+$(this).find("CameraId").text()+");' onclick='setCameraId("+$(this).find("CameraId").text()+");'><a href='#' style='text-decoration:none'>"+$(this).find("CameraName").text()+"</a></li>";
	});
	//htmlStr+="</ul>";
	$("#tree").html(htmlStr);
	
}

function initTree(){
	var OCXobj = document.getElementById("PlayViewOCX");
	$("#tree").html("");

	//初始化中心节点
	var xmlStr = OCXobj.GetResourceInfo(1);	
	var orderdCellIds = initControlUnitNodes(xmlStr);
	
	//初始化区域节点
	if(orderdCellIds.length > 0){
		xmlStr = OCXobj.GetResourceInfo(2);
		var regionIds = initRegionNodes(xmlStr, orderdCellIds);
		
		//初始化监控点节点
		if(regionIds.length > 0){
			xmlStr = OCXobj.GetResourceInfo(4);
			initCameraNodes(xmlStr, regionIds);
		}
	}
	
	$("#tree a").click(function(){
		//找到主菜单项对应的子菜单项
		$(this).next("ul").slideToggle();
		changeIcon($(this).parent("li"));
	});
}
function clearTree(){
	//var OCXobj = document.getElementById("PlayViewOCX");
	$("#tree").html("");
}
/**
 * 初始化中心节点
 * @param {} xmlStr
 * @return {}
 */
function initControlUnitNodes(xmlStr){
	var xmldom=getXmlDomFromStr(xmlStr);
	
	//CtrlCell的jQuery对象数组
	var ctrlCells = new Array();
	var orderdCellIds = new Array();
	$(xmldom).find("CtrlCell").each(function(){
		ctrlCells.push($(this));
	});
	if(ctrlCells.length > 0){
		var rootUnit = ctrlCells[0];
		
		var curLevelCellIds = new Array();
		var parentCellId = 0;
		var curCellId = 0;
		curLevelCellIds.push($(rootUnit).find("HighCtrlCellId").text());
		//循环到ctrlCells中不再有任何元素
		while(ctrlCells.length>0){
			//本次for循环查找所用parentCellId
			parentCellId = curLevelCellIds.pop();
			
			//循环查找父中心Id=parentCellId的CtrlCell
			for(var i=0; i<ctrlCells.length; ){
				if($(ctrlCells[i]).find("HighCtrlCellId").text()==parentCellId){
					//子中心Id入栈，下次for循环查找时作为parentCellId
					curCellId = $(ctrlCells[i]).find("CtrlCellId").text();
					curLevelCellIds.push(curCellId);
					orderdCellIds.push(curCellId);
					//添加子中心节点
					if($("#tree").html()==""){
						$("#tree").html("<li class='control_unit_li'><a href='#'>"+$(ctrlCells[i]).find("CtrlCellName").text()+"</a><ul id='ul_cell_" + curCellId + "'></ul></li>");
					}else{
						var expr = "#ul_cell_"+parentCellId;
						$(expr).append("<li class='control_unit_li'><a href='#'>"+$(ctrlCells[i]).find("CtrlCellName").text()+"</a><ul id='ul_cell_" + curCellId + "'></ul></li>");
					}
					//从CtrlCell数组中删除已添加的CtrlCell
					ctrlCells.splice(i,1);
				}else{
					i++;
				}
			}
		}
	}
	return orderdCellIds;
}

/**
 * 将区域节点挂到各中心下
 * @param {} xmlStr
 * @param {} orderdCellIds
 * @return {}
 */
function initRegionNodes(xmlStr, orderdCellIds){
	var xmldom=getXmlDomFromStr(xmlStr);
	
	//alert(xmlStr);
	//Region的jQuery对象数组
	var regionIds = new Array();
	var regionsOff = new Array();
	var expr;
	for(var i=0; i<orderdCellIds.length; i++){
		var ctrlCellId = orderdCellIds[i];
		//查找中心下所有的区域
		$(xmldom).find("Region").each(function(){
			//该中心下的区域
			if($(this).find("CtrlCellId").text() == ctrlCellId){
				//该中心下的一级区域
				if($(this).find("HighRegionId").text() == 0){
					//将该中心下的一级区域直接挂到该中心下
					expr = "#ul_cell_" + ctrlCellId;
					$(expr).append("<li class='region_li'><a href='#'>"+$(this).find("RegionName").text()+"</a><ul id='ul_region_"+$(this).find("RegionId").text()+"'></ul></li>");
					//记录一级区域Id
					regionIds.push($(this).find("RegionId").text());
				}else{
					//该中心下的非一级区域入栈
					regionsOff.push(this);
				}
			}
		});

		while(regionsOff.length > 0){
			for(var j=0; j<regionsOff.length; ){
				var regionNode = regionsOff[j];
				expr = "#ul_region_" + $(regionNode).find("HighRegionId").text();
				if($(expr).length > 0){
					$(expr).append("<li class='region_li'><a href='#'>"+$(regionNode).find("RegionName").text()+"</a><ul id='ul_region_"+$(regionNode).find("RegionId").text()+"'></ul></li>");
					regionsOff.splice(j,1);
					regionIds.push($(regionNode).find("RegionId").text());
				}else{
					j++;
				}
			}
		}
	}
	
	return regionIds;
}

/**
 * 将监控点节点挂到各区域下
 * @param {} xmlStr
 * @param {} regionIds
 */
function initCameraNodes(xmlStr, regionIds){
	var xmldom=getXmlDomFromStr(xmlStr);
	
	var expr;
	var cameras = $(xmldom).find("Camera");
	for(var i=0; i<cameras.length; i++){
		expr = "#ul_region_" + $(cameras[i]).find("RegionId").text();
		$(expr).append("<li class='camera_li' ondblclick='startPreview("+$(cameras[i]).find("CameraId").text()+");' onclick='setCameraId("+$(cameras[i]).find("CameraId").text()+");'><a href='#'>"+$(cameras[i]).find("CameraName").text()+"</a></li>");
	}
}

	/*****************设置预览的cameraId**********************/
	function setCameraId(cameraId){
		document.getElementById("TextCameraId").value=cameraId;
	}
    
/*****************调用预览**********************/
function startPreview(cameraId){
	var OCXobj = document.getElementById("PlayViewOCX");
	var ret=OCXobj.StartTask_Preview_FreeWnd_V11(cameraId);
	switch(ret){
		case 0:
			showMethodInvokedInfo("StartTask_Preview_FreeWnd_V11接口调用成功！");
			break;
		case -1:
			showMethodInvokedInfo("StartTask_Preview_FreeWnd_V11接口调用失败！错误码："+ OCXobj.GetLastError_V11());
			break;
		default:
			break;
	}
}
    
var count=0;
function setWndMode(){
	var OCXobj = document.getElementById("PlayViewOCX");
	var ret=OCXobj.SetWndMode((count++)%2);
	switch(ret){
		case 0:
			showMethodInvokedInfo("SetWndMode接口调用成功！");
			break;
		case -1:
			showMethodInvokedInfo("SetWndMode接口调用失败！错误码："+ OCXobj.GetLastError_V11());
			break;
		default:
			break;
	}
}

/*****************本地参数设置******************/
function SetlocalParam(){
	var PicType = $("#SelectPicType").val();
    var PicPath = $("#TextPicPath").val();
    var minSpace4Pic = $("#MinDiskSpaceForCap").val();
    var RecordPath = $("#TextRecordPath").val();
    var RecordSize = $("#PreviewPkgSize").val();
    var minSpace4Rec = $("#MinDiskSpaceForRec").val();
   // if(PicPath=="" || RecordPath==""){
	//	alert("保存路径不能为空！");
	//	return;
  //  }
    
	var OCXobj = document.getElementById("PlayViewOCX");
	
	//设置图片保存路径和格式
    var Ret = OCXobj.SetCapturParam(PicPath, PicType);
	if(Ret == 0)
	{
		showMethodInvokedInfo("SetCaptureParam接口调用成功！");
	}
	else
	{
		showMethodInvokedInfo("SetCaptureParam接口调用失败！错误码："+ OCXobj.GetLastError_V11());
	}
    
    
    //设置保存图片磁盘空间最小值
    OCXobj.SetPicDiskMinSize(minSpace4Pic);
    showMethodInvokedInfo("SetPicDiskMinSize接口调用成功！");
   
    //设置录像保存路径和文件大小
    var ret2 = OCXobj.SetRecordParam(RecordPath, RecordSize);
	if(ret2 == 0)
	{
		showMethodInvokedInfo("SetRecordParam接口调用成功！");
	}
	else
	{
		showMethodInvokedInfo("SetRecordParam接口调用失败！错误码："+ OCXobj.GetLastError_V11());
	}
    
    
    //设置录像磁盘空间最小值
    OCXobj.SetRecordDiskMinSize(minSpace4Rec);
    showMethodInvokedInfo("SetRecordDiskMinSize接口调用成功！");
}

function init(){
	$("#tree").html("");
	$("#TextInfo").html("");
	$("#MsgInfo").html("");
	$("#TextPwd")[0].focus();
}

function showMethodInvokedInfo(msg){
	$("#TextInfo").prepend(msg+"\r");
}

function changeIcon(mainNode) {
	if (mainNode) {
		if (mainNode.css("background-image").indexOf("Control_area_exp.png") >= 0) {
			mainNode.css("background-image","url('../images/Control_area_col.png')");
		} else if (mainNode.css("background-image").indexOf("Control_area_col.png") >= 0) {
			mainNode.css("background-image","url('../images/Control_area_exp.png')");
		} else if (mainNode.css("background-image").indexOf("Area_exp.png") >= 0) {
			mainNode.css("background-image","url('../images/Area_col.png')");
		} else if (mainNode.css("background-image").indexOf("Area_col.png") >= 0) {
			mainNode.css("background-image","url('../images/Area_exp.png')");
		}
	}
}

function getXmlDomFromStr(xmlStr){
	var xmldom=null;
	if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1){
		xmldom=new ActiveXObject("Microsoft.XMLDOM");
		xmldom.loadXML(xmlStr);
	}else{
		xmldom=new DOMParser().parseFromString(xmlStr,"text/xml");
	}
	return xmldom;
}