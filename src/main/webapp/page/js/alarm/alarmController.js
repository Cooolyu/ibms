var alarmModule = angular.module('alarmModule', ['paginationService', 'anajaxService']);

alarmModule.controller('alarmController', function($scope, $http, pagination, anajax) {
	
	setInterval(function(){
	    $scope.$apply(showmap);
	},10000);
	
	var showmap = function() {
		var url = commonutil.actionPath + '/alarm/getInfo';
		anajax.doajax(url,{'floorId':$('#floorId').val(),'buildingId':$('#buildId').val()},function(data) {
			$scope.assets = data;
			draw();
			$(data).each(function(index){
				if(data[index].buildingStatus == 2) {
					return false;
				}			
				else {
						$(data).each(function(i){
							if(data[index].id == data[i].id) {
								var x = data[index].locationX;
								var y = data[index].locationY;
								var ex = data[i].locationX;
								var ey = data[i].locationY;
								drawPath(x,y,ex,ey,data[i].assetsStatus);
							}
						});
				}
				
				
			});
		});
	};
	
	showmap();
	
	var draw = function() {
		var width = $('#container').width();
		var height = $('#container').height();
		$('#myCanvas').attr('width',width);
		$('#myCanvas').attr('height',height);
		$('#myCanvas').css('top','0px');
		$('#myCanvas').css('left','0px');
	};
	var myCanvas = document.getElementById("myCanvas");
	var context =  myCanvas.getContext("2d");
	
	var drawPath = function(x, y, ex, ey,status)
    {
		if(status != 'close') {
		    context.lineWidth = 3;
		    context.beginPath();
		    if(status == 'alarm') {
		    	context.strokeStyle ='#FF0000';//线条颜色：红色
		    }
		    if(status == 'normal') {
		    	context.strokeStyle ='#3ACF53';//线条颜色：绿色
		    }	    
		    context.moveTo(parseInt(x)+8, parseInt(y)+8);//8为图片的半径，75为面眉高度
		    context.lineTo(parseInt(ex)+8, parseInt(ey)+8);//
		    context.stroke();//画线
		}
    };
	
     var showText = function(text) {
    	var tipId = 'tip';
    	$('#'+tipId).empty();
    	$('#'+tipId).append(text);
    	var allWidth = document.body.clientWidth;
    	var allHeight = window.innerHeight || document.body.clientHeight;
    	var tipWidth = $('#'+tipId).width();
    	var tipHeight = $('#'+tipId).height();
    	
    	var scrollTop = document.body.scrollTop > document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
    	$('#'+tipId).css('top', Math.abs((allHeight-tipHeight)/2+scrollTop));
    	$('#'+tipId).css('left', Math.abs((allWidth-tipWidth)/2));
    	
    	
    	$('#'+tipId).fadeIn(250, function() {
    		setTimeout(function() {
    			$('#'+tipId).fadeOut(250);
    			$('html').css('overflow', 'auto');
    		}, 3000);
    	});

    };
    
    $scope.bufang = function() {
    	var url = commonutil.actionPath + '/alarm/bufang';
    	anajax.doajax(url,{'option':'open'},function(data) {
    		showText("布防中，请等待...");
    		$('#open').attr('class','btn btn-default active');
    		$('#close').attr('class','btn btn-default');
    	});  	
    };

    $scope.chefang = function() {
    	var url = commonutil.actionPath + '/alarm/bufang';
    	anajax.doajax(url,{'option':'close'},function(data) {
    		showText("撤防中，请等待...");
    		$('#close').attr('class','btn btn-default active');
    		$('#open').attr('class','btn btn-default');
    	});      	
    };
    
    
    var bindSocket = function() {
    	var url = 'ws://172.25.35.245.8080/websocket/alarm';
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
    			var result = JSON.parse(evt.data);
    			if(result.status == 'bufang') {
	    			if(result.value == "failure") {
	    				pageutil.showTip("布防失败");
	    			}else{
	    				$('#tip').fadeOut(250);
	    				$('html').css('overflow', 'auto');
	    				showmap();
	    			}
    		   }
    			if(result.status == 'warn') {
    				showmap();
    			}
    			
    		}
    	};
    };
    
    bindSocket();
   
});