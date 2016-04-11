var cameraModule = angular.module('cameraModule', ['paginationService', 'anajaxService']);

cameraModule.controller('cameraController', function($scope, $http, pagination, anajax) {
	
	setInterval(function(){
	    $scope.$apply(showmap);
	},10000);
	
	
	var showmap = function() {
		var url = commonutil.actionPath + '/camera/getInfo';
		anajax.doajax(url,{'floorId':$('#floorId').val()},function(data) {
			$scope.assets = data;
		});
	};
	
	showmap();
	
	$scope.showDetail = function(assets) {
		$('#backViewDiv').css('display', 'none');
    	$('#viewDiv').css('display', '');
		$scope.detail = assets;
		$('#showModal').modal('show');
		var url = commonutil.actionPath + '/camera/getParam';
		anajax.doajax(url,{'assetsId':assets.id},function(data) {
			StartPlayView(data);
		});	
	};
	
	/*****登录CMS******/
	
	var iflogin2 = false;
	var i = 0;
	var loginCMS = function(){
		var userName='admin';
		var pw='admin123';
		var ipAdd='172.25.35.239';
		var port='80';
		var OCXobj = document.getElementById("PlayView_OCX");
		var ret=OCXobj.Login_V11(userName,pw,ipAdd,port,0);
		switch(ret){
			case 0:
				//initCameraList();
				//initTree();
				//alert("登录成功！");
				i = 0;
				iflogin2 = true;
				//showMethodInvokedInfo("Login_V11,GetResourceInfo 接口调用成功！");
				break;
			case -1:
				//clearTree();
				i++;
				if(i<2) {
					loginCMS();
				} else {
					alert("登录失败！");
				}
				//showMethodInvokedInfo("Login_V11接口调用失败！错误码："+ OCXobj.GetLastError_V11());
				break;
			default:
				break;
		}
		
	};
	
	function logoutCMS(){
		var OCXobj = document.getElementById("PlayView_OCX");
		//var ret=OCXobj.LogoutCMS();
		OCXobj.SetWndNum(1);
		var ret = OCXobj.Logout_V11();
		switch(ret){
			case 0:
				//OCXobj.StopAllPlayBack();
				document.getElementById("TextPwd").value="";
				pageload();
				alert("退出成功！");
				//showMethodInvokedInfo("Logout_V11接口调用成功！");
				break;
			case -1:
				alert("退出失败！");
				//showMethodInvokedInfo("Logout_V11接口调用失败！错误码："+ OCXobj.GetLastError_V11());
				break;
			default:
				break;
		}
	}
	
	var iflogin = false;
	
	/*****登录CMS******/
	var loginCMS2 = function(){
		var userName='admin';
		var pw='admin123';
		var ipAdd='172.25.35.239';
		var port='80';
		var OCXobj = document.getElementById("PlayBack_OCX");
		var ret=OCXobj.Login_V11(userName,pw,ipAdd,port,0);
		switch(ret){
			case 0:
				//initCameraList();
				//initTree();
				//alert("登录成功！");
				i = 0;
				iflogin = true;
				//showMethodInvokedInfo("Login_V11,GetResourceInfo 接口调用成功！");
				break;
			case -1:
				//clearTree();
				i++;
				if(i<2) {
					loginCMS2();
				} else {
					alert("登录失败！");
				}
				//showMethodInvokedInfo("Login_V11接口调用失败！错误码："+ OCXobj.GetLastError_V11());
				break;
			default:
				break;
		}
		
	};
	
	function logoutCMS2(){
		var OCXobj = document.getElementById("PlayBack_OCX");
		//var ret=OCXobj.LogoutCMS();
		var ret = OCXobj.Logout_V11();
		switch(ret){
			case 0:
				//OCXobj.StopAllPlayBack();
				document.getElementById("TextPwd").value="";
				pageload();
				alert("退出成功！");
				//showMethodInvokedInfo("Logout_V11接口调用成功！");
				break;
			case -1:
				alert("退出失败！");
				//showMethodInvokedInfo("Logout_V11接口调用失败！错误码："+ OCXobj.GetLastError_V11());
				break;
			default:
				break;
		}
	}
	
	/*****实时预览******/
    function StartPlayView(cameraCode)
    {	
    	var OCXobj = document.getElementById("PlayView_OCX");
    		setTimeout(function() {
    			if(!iflogin2) {
    			loginCMS();
        		
        	}
    		CameraID = cameraCode;
    		var ret = OCXobj.StartTask_Preview_V11(CameraID);
    		OCXobj.SetWndNum(1);
    		switch(ret){
    		case 0:
    			break;
    		case -1:
    			alert("StartTask_Preview_V11接口调用失败！错误码："+ OCXobj.GetLastError_V11());
    			break;
    		default:
    			break;
    		}
    		}, 500);
    		
    }
    
    /** ***设置回放参数***** */
    var SetPlayBackParam = function(cameraCode, RecLocation) {
    	var OCXobj = document.getElementById("PlayBack_OCX");
    	var WndIndex = 0;// 获取当前选中窗口
    	CameraID = cameraCode;
    	//alert(CameraID+","+RecLocation);
    	//OCXobj.SetWndNum(1);
    	var ret = OCXobj.SetPlayBackParam_V11(CameraID, RecLocation, WndIndex);
    	switch (ret) {
    	case 0:
    		//alert("设置成功！");
    		//showMethodInvokedInfo("SetPlayBackParam_V11接口调用成功！");
    		break;
    	case -1:
    		alert("设置失败！");
    		//showMethodInvokedInfo("SetPlayBackParam_V11接口调用失败！错误码："
    		//		+ OCXobj.GetLastError_V11());
    		break;
    	default:
    		break;
    	}
    }
    
    var CheRecType = 23;

    $scope.StartQueryRecord = function(StartTime,EndTime) {
    	var OCXobj = document.getElementById("PlayBack_OCX");
    	var StartTime = document.getElementById("StartTime").value;
    	var EndTime = document.getElementById("EndTime").value;
    	if ("0" == CheRecType) {
    		alert("录像类型不能为空！");
    		return;
    	}
    	var ret = OCXobj.StartQueryRecord_V11(StartTime, EndTime, CheRecType);
    	switch (ret) {
    	case 0:
    		//showMethodInvokedInfo("StartQueryRecord_V11接口调用成功！");
    		break;
    	case -1:
    		alert("搜索失败！");
    		//showMethodInvokedInfo("StartQueryRecord_V11接口调用失败！错误码："
    		//		+ OCXobj.GetLastError_V11());
    		break;
    	default:
    		break;
    	}
    }
    
    
    
    var initTime = function() {
    	var now = new Date();
    	var year = now.getFullYear(); // 年
    	var month = now.getMonth() + 1; // 月
    	var day = now.getDate(); // 日
    	var clock = year + "-";
    	if (month < 10)
    		clock += "0";
    	clock += month + "-";
    	if (day < 10)
    		clock += "0";
    	clock += day + " ";
    	// alert(clock);
    	document.getElementById("StartTime").value = clock + "00:00:00";
    	document.getElementById("EndTime").value = clock + "23:59:59";
    }
	
    /*****验证时间格式******/
    var strDateTime = function(str){
    	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    	var r = str.match(reg);
    	if (r == null)
    		return false;
    	var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
    	return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3]
    			&& d.getDate() == r[4] && d.getHours() == r[5]
    			&& d.getMinutes() == r[6] && d.getSeconds() == r[7]);
    };
    	
    var checkDateTime = function(str) {
    	if (!strDateTime(str)) {
    		alert("您输入的时间格式不正确，请重新输入！\n正确的格式如：2012-01-01 00:00:00");
    	}
    };
    
    $scope.viewBack = function(assetsId) {
    	$('#viewDiv').css('display', 'none');
    	$('#backViewDiv').css('display', '');
		$('#showModal').modal('show');
		initTime();
		var url = commonutil.actionPath + '/camera/getParam';
		anajax.doajax(url,{'assetsId':assetsId},function(data) {	
			if(!iflogin) {
				loginCMS2();
			}	
			SetPlayBackParam(data,1);
		});	
    };
    
    $scope.viewImg = function(assetsId) {
    	$('#backViewDiv').css('display', 'none');
    	$('#viewDiv').css('display', '');
    };
	
});