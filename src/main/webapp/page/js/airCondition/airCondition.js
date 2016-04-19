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
		$scope.floorTemp = floor;
		$scope.floor = floor;
		assetList(floor)
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
	$scope.airColds = [{name:'送风温度',value:'20℃',name2:'送风湿度', value2:'60%'},
	                   {name:'回风温度',value:'20℃',name2:'回风湿度', value2:'60%'},
	                   {name:'回水温度',value:'20℃',name2:'回风CO2', value2:'60PPM'}
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
//		alert(iasset.assetId)
		$scope.asvName = iasset.name;
		$('#showModal').modal('show');
	}
	
	
	
	
	
	
});