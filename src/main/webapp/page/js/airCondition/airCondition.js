var airColdModule = angular.module('airColdModule', ['anajaxService']);
airColdModule.controller('airColdController', function($scope, $http, anajax) {	
	

	
	

	
	
	//获取楼栋
	var buildList = function(params) {
		var url = commonutil.actionPath + "/airCdt/buildList";
		anajax.doajax(url,params, function(data) {
			$scope.builds = data;
			$scope.build = $scope.builds[0];
			floorList($scope.builds[0]);
			$scope.floorTemp = $scope.builds[0];
		});
	}
	buildList();
	
	//获取楼层
	var floorList = function (build) {
		var url = commonutil.actionPath + "/airCdt/floorList";
		anajax.doajax(url,{'buildId':build.id,'sysModuleId':$("#sysModuleId").val()}, function(data) {
			$scope.floors = data;
			if($scope.floors.length == 0){
				//判断楼栋是否有系统，没有清空数据
				$scope.floor={};
				$scope.assets={};
				$scope.uassets= {};
				$scope.iassets= {};
			return;
			}
			
			chooseFloor($scope.floors[0]);
			
		});
	}

	//楼栋选择项
	$scope.chooseBuild = function(build) {
		$scope.build = build;
		floorList(build)
	}
	//楼层选择项
	var chooseFloor = function(floor) {
		if(floor.name=="冷站系统"){
			$scope.airColdsName = airColdsName;
			$scope.airColds = airColds
		}
		else if(floor.name=="热源系统"){
			$scope.airColdsName = airhotName;
			$scope.airColds = airhot
		}
		else if(floor.name=="暖通空调"){
			$scope.airColdsName = airName;
			$scope.airColds = air
		}
		else if(floor.name=="排水系统"){
			$scope.airColdsName = sswtName;
			$scope.airColds = sswt
		}
		else if(floor.name=="给水系统"){
			$scope.airColdsName = sswName;
			$scope.airColds = ssw
		}
		else if(floor.name=="WY1_1_1AA"){
			$scope.airColdsName = sswName;
			$scope.airColds = ssw
		}
		$scope.floorTemp = floor;
		$scope.floor = floor;
		assetList(floor)
		$scope.floorName = floor.name;
		//初始显示选项
		$("#panel1").hide();
		$("#panel2").show();
		$(function () {
		    setTimeout(function () {
		        init();
		    }, 50);
		})
		
	}
	
	$scope.chooseFloor = chooseFloor;
	
	//资产显示项
	var assetList = function(floor) {
		var url = commonutil.actionPath + "/airCdt/assetList";
		anajax.doajax(url,{'floorId':floor.id}, function(data) {
			$scope.assets = data;
			//定义图标未分配的数组和已分配的数组
			$scope.iassets = new Array();
			$scope.uassets = new Array();
			for(var i=0 ; i<$scope.assets.length; i++){
				if($scope.assets[i].locationX == 0 && $scope.assets[i].locationY == 0){
					//添加图标未分配的数组
					$scope.uassets.push($scope.assets[i]);
				}else{
					//添加图标已分配的数组
					$scope.iassets.push($scope.assets[i]);
				}
			}
		});
	}
	
/**-----------------------------------控件拖拽-----------------------------------------**/	
	var airColdsName= "冷站系统参数"
	var airColds = [{name:'送风温度',value:'20℃',name2:'送风湿度', value2:'60%'},
	                   {name:'回风温度',value:'20℃',name2:'回风湿度', value2:'60%'},
	                   {name:'回水温度',value:'20℃',name2:'回风CO2', value2:'60PPM'}
	                   ]
	var airhotName= "热源系统参数"
	var airhot = [{name:'热水温度',value:'39℃',name2:'热水回水压力', value2:'4.7Bar'},
	                   {name:'热水供水流量',value:'604.9m^3/h',name2:'热水供水温度', value2:'40℃'},
	                   {name:'热水供水压力',value:'5.4Bar'}
	                   ]
	var airName= "AKB0048空调机组"
	var air = [{name:'送风温度',value:'29℃',name2:'送风湿度', value2:'60%'},
	                   {name:'水阀开度',value:'90%',name2:'回风温度', value2:'34℃'},
	                   {name:'回风湿度',value:'50%',name:'回水温度',value:'32℃'}
	                   ]
	var sswtName= "39#S306集水坑"
	var sswt = [{name:'1#泵状态：',value:'运行',name2:'1#泵故障', value2:'正常'},
	                   {name:'主备切换',value:'备用',name2:'高液位报警', value2:'超高液位'},
	                   {name:'2#泵运行状态',value:'运行',name:'2#泵故障',value:'正常'}
	                   ]
	var sswName= "1#冷却水补水系统"
	var ssw = [{name:'1#泵状态',value:'运行',name2:'1#泵故障', value2:'正常'},
	                   {name:'主备切换',value:'备用',name2:'供水量', value2:'100m^3'},
	                   {name:'2#泵运行状态',value:'运行',name:'2#泵故障',value:'正常'}
	                   ]
	var sswName= "WY1_1_1AA"
	var ssw = [{name:'A相电流',value:'100.0A',name2:'B相电流', value2:'120.0A'},
	                   {name:'C相电流',value:'1150.0A',name2:'有功功率', value2:'67.0Kw'},
	                   {name:'无功功率',value:'85.0KVar',name:'A相电压',value:'350.0V'},
	                   {name:'B相电压',value:'320.0V',name:'C相电压',value:'400.0V'}
	                   ]
	 
	
	
	var edit = function() {
		$scope.bol = false;
		//编辑显示项
		$("#panel1").show();
		$("#panel2").hide();
		init();
		//-----end
		$(".moveDiv").each(function(){
			var moveDiv = $(this);
			var moveBtn = moveDiv.find(".moveBtn");
			var assetId = moveDiv.find(".val").val();
			if (moveDiv.find(".leftVal").val() == 0  &&  moveDiv.find(".topVal").val() == 0) {
//				$("#a"+assetId).show();
//				$("#name"+assetId).show();
			}
			moveBtn.bind("mousedown", function(){
				$(document).mousemove(function(e){
					mouseMove(e,moveDiv);
				}).mouseup(function(){
					$(document).unbind("mousemove").unbind("mouseup");
				});
			});
		});
	}
	
	$scope.edit = edit;
	
	//查看模式
	var view = function() {
		$scope.bol = true;//判断标识符
		//保存图标位置
		$(".moveDiv").each(function(){
			var moveDiv = $(this)
			var assetId = moveDiv.find(".val").val();
			var icon = moveDiv.find(".moveBtn");
			save(icon , assetId);
			
		});
		
		//编辑显示项
		$("#panel1").hide();
		$("#panel2").show();
		
		//图标重新排布
		assetList($scope.floorTemp);
		$(function () {
		    setTimeout(function () {
		        init();
		    }, 50);
		})
		
		//图标弹出事件
		$scope.showView = function(iasset) {
			if($scope.bol == false)
				return;
			showView(iasset);
		};
	}
	
	$scope.view = view;
	
	//保存坐标
	var save = function(icon , assetId) {
		//图片相对窗口的坐标
		var imgDiv = document.getElementById("imgDiv");
		var imgDivTop = getTop(imgDiv);
		var imgDivLeft = getLeft(imgDiv);
		
		//图标相对窗口的坐标
		var iconTop = icon.offset().top;
		var iconLeft = icon.offset().left;
		
		//计算相对坐标
		var reTop = iconTop - imgDivTop;
		var reLeft = iconLeft - imgDivLeft;
		//若有改变则重新赋值
		if($("#x"+assetId).val() != reTop || $("#y"+assetId).val() != reLeft){
			if(reTop>1 && reLeft>1 && $("#x"+assetId).val() != 0 && $("#y"+assetId).val() != 0){
				$("#x"+assetId).val(reTop);
				$("#y"+assetId).val(reLeft);
				var url = commonutil.actionPath + "/airCdt/savePosition";
				anajax.doajax(url,{'assetId':assetId , 'locationX':reTop , 'locationY':reLeft}, function(data) {
				});
			}
		}
	}
	
	//获取元素的纵坐标 
	var getTop = function(e){ 
	var offset=e.offsetTop; 
	if(e.offsetParent!=null) offset+=getTop(e.offsetParent); 
	return offset; 
	} 
	//获取元素的横坐标 
	var  getLeft = function(e){ 
	var offset=e.offsetLeft; 
	if(e.offsetParent!=null) offset+=getLeft(e.offsetParent); 
	return offset; 
	} 
	
	//窗口改变事件
	$(window).resize(function() { 
		init();
//		edit();
		  
		//  alert($(window).width()); //浏览器时下窗口可视区域宽度 
		//  alert($(window).height()); //浏览器时下窗口可视区域高度 
		//  alert($(document).height()); //浏览器时下窗口文档的高度 
		//  alert($(document.body).height());//浏览器时下窗口文档body的高度 
		//  alert($(document.body).outerHeight(true));//浏览器时下窗口文档body的总高度 包括border padding margin 
		//  
		//  alert($(document).width());//浏览器时下窗口文档对于象宽度 
		//  alert($(document.body).width());//浏览器时下窗口文档body的高度 
		//  alert($(document.body).outerWidth(true));//浏览器时下窗口文档body的总宽度 包括border padding margin 
		 })
	
	//坐标初始化
	var init = function (){
		$(".moveDiv").each(function(){
			var x=document.getElementById("imgDiv");
			var moveDiv = $(this);
			var topNum = getTop(x)+parseInt(moveDiv.find(".leftVal").val());
			var leftNum = getLeft(x)+parseInt(moveDiv.find(".topVal").val());
			if (moveDiv.find(".leftVal").val() == 0  &&  moveDiv.find(".topVal").val()==0) {
				return;
			}
			moveDiv.offset({ top: topNum, left:leftNum });
		});
	}
	
	
	//移动事件
	var mouseMove = function (e,obj){
		obj.offset({left: e.pageX,top: e.pageY});
		obj.find(".leftVal").val(e.pageY);
		obj.find(".topVal").val(e.pageX);
	}
	/**-------------------------------------显示弹出框-------------------------------------**/
	
	var showView = function(iasset) {
		$scope.iconList={}
		var iconList = function(params) {
			var url = commonutil.actionPath + "/airCdt/iconList";
			anajax.doajax(url,{"assetId":params}, function(data) {
				$scope.iconList = data;
			});
		}
		iconList(iasset.assetId)
		$scope.asvName = iasset.name;
		$scope.assetId = iasset.assetId;
		var url = commonutil.actionPath + "/asset/dictionaryIdAndName";
		anajax.doajax(url,{'assetId':iasset.assetId}, function(data) {
			$scope.assetProps = data;
			bindSocket();
		});
		url = commonutil.actionPath + "/asset/"
		$('#showModal').modal('show');
		
		
	}
	
	/**-----------------------------------绑定webSocket----------------------------------**/
	var bindSocket = function() {
		var url = 'ws://172.16.120.139:8080/omf/websocket/airCold';
		var ws = null;
    		if ('WebSocket' in window)
    			ws = new WebSocket(url);
    		else if ('MozWebSocket' in window)
    			ws = new MozWebSocket(url);
    		else
    			//alert('当前浏览器不支持websocket，请使用IE10+、Chrome17+、Firefox7+');
    			// 用户未登录或者不支持websocket
    			if (!ws) {
    				return;
    			}

    		// 收到消息
    		ws.onmessage = function(evt) {
    			if (evt.data) {
    				var data = evt.data.split("-");
    				if(data[1] == $scope.assetId){
    					for(var i=0; i<$scope.assetProps.length;i++){
    						if($scope.assetProps[i].dictionaryId == data[0])
    							$("#"+$scope.assetProps[i].code).html(":"+data[2])
//    							alert(data[2])
    					}
    				}
    			}
    		};
    	};
    	
   
	
	
	
});