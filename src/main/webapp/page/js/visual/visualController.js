var visualModule = angular.module('visualModule', ['anajaxService']);
visualModule.controller('visualController', function($scope, $http, anajax) {	
	
	$scope.stop=0;$scope.run=0;$scope.rerun=0;
	
	var airCount = function(params) {
		var url = commonutil.actionPath + "/visShow/airCount";
		anajax.doajax(url,{"sysId":5}, function(data) {
		    var myChart = echarts.init(document.getElementById('main'));
			$scope.run = data.run;
			$scope.stop = data.stop;
			$scope.rerun = data.rerun;
			option = {
		    	    tooltip: {
		    	        trigger: 'item',
		    	        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    	    },
		    	    legend: {
		    	        orient: 'vertical',
		    	        x: 'left',
		    	        data:['运行中','关机状态','维护中']
		    	    },
		    	    series: [
		    	        {
		    	            name:'设备状态',
		    	            type:'pie',
		    	            radius: ['30%', '50%'],
		    	            avoidLabelOverlap: false,
		    	            label: {
		    	                normal: {
		    	                    show: false,
		    	                    position: 'center'
		    	                },
		    	                emphasis: {
		    	                    show: true,
		    	                    textStyle: {
		    	                        fontSize: '15',
		    	                        fontWeight: 'bold'
		    	                    }
		    	                }
		    	            },
		    	            labelLine: {
		    	                normal: {
		    	                    show: false
		    	                }
		    	            },
		    	            data:[
		    	                {value:$scope.run, name:'运行中'},
		    	                {value:$scope.stop, name:'关机状态'},
		    	                {value:$scope.rerun, name:'维护中'}
		    	            ]
		    	        }
		    	    ]
		    	};
		    myChart.setOption(option);
		});
	}
	airCount();
	
	var sswCount = function(params) {
		var url = commonutil.actionPath + "/visShow/airCount";
		anajax.doajax(url,{"sysId":6}, function(data) {
			 var myChart2 = echarts.init(document.getElementById('main2'));
			$scope.run = data.run;
			$scope.stop = data.stop;
			$scope.rerun = data.rerun;
			option = {
		    	    tooltip: {
		    	        trigger: 'item',
		    	        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    	    },
		    	    legend: {
		    	        orient: 'vertical',
		    	        x: 'left',
		    	        data:['运行中','关机状态','维护中']
		    	    },
		    	    series: [
		    	        {
		    	            name:'设备状态',
		    	            type:'pie',
		    	            radius: ['30%', '50%'],
		    	            avoidLabelOverlap: false,
		    	            label: {
		    	                normal: {
		    	                    show: false,
		    	                    position: 'center'
		    	                },
		    	                emphasis: {
		    	                    show: true,
		    	                    textStyle: {
		    	                        fontSize: '15',
		    	                        fontWeight: 'bold'
		    	                    }
		    	                }
		    	            },
		    	            labelLine: {
		    	                normal: {
		    	                    show: false
		    	                }
		    	            },
		    	            data:[
		    	                {value:$scope.run, name:'运行中'},
		    	                {value:$scope.stop, name:'关机状态'},
		    	                {value:$scope.rerun, name:'维护中'}
		    	            ]
		    	        }
		    	    ]
		    	};

		myChart2.setOption(option);
		});
	}
	sswCount()
	
	var tadCount = function(params) {
		var url = commonutil.actionPath + "/visShow/airCount";
		anajax.doajax(url,{"sysId":7}, function(data) {
			 var myChart2 = echarts.init(document.getElementById('main3'));
			$scope.run = data.run;
			$scope.stop = data.stop;
			$scope.rerun = data.rerun;
			option = {
		    	    tooltip: {
		    	        trigger: 'item',
		    	        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    	    },
		    	    legend: {
		    	        orient: 'vertical',
		    	        x: 'left',
		    	        data:['运行中','关机状态','维护中']
		    	    },
		    	    series: [
		    	        {
		    	            name:'设备状态',
		    	            type:'pie',
		    	            radius: ['30%', '50%'],
		    	            avoidLabelOverlap: false,
		    	            label: {
		    	                normal: {
		    	                    show: false,
		    	                    position: 'center'
		    	                },
		    	                emphasis: {
		    	                    show: true,
		    	                    textStyle: {
		    	                        fontSize: '15',
		    	                        fontWeight: 'bold'
		    	                    }
		    	                }
		    	            },
		    	            labelLine: {
		    	                normal: {
		    	                    show: false
		    	                }
		    	            },
		    	            data:[
		    	                {value:$scope.run, name:'运行中'},
		    	                {value:$scope.stop, name:'关机状态'},
		    	                {value:$scope.rerun, name:'维护中'}
		    	            ]
		    	        }
		    	    ]
		    	};

		myChart2.setOption(option);
		});
	}
	tadCount()
	
	
	
	
	
	
	 // 基于准备好的dom，初始化echarts实例

   
    var myChart4 = echarts.init(document.getElementById('main4'));
    var myChart5 = echarts.init(document.getElementById('main5'));
    var myChart6 = echarts.init(document.getElementById('main6'));
    
    





option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['耗电量', '耗水量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'耗水量',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[200, 170, 240, 244, 200, 220, 210]
        },
        {
            name:'耗电量',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[320, 302, 341, 374, 390, 450, 420]
        }
    ]
};

myChart4.setOption(option);



var timeData = ['周一','周二','周三','周四','周五','周六','周日'];


option = {
title: {
    text: '',
    subtext: '',
    x: 'center'
},
tooltip: {
    trigger: 'axis',
    axisPointer: {
        animation: false
    }
},
legend: {
    data:['给水量','排水量'],
    x: 'left'
},
dataZoom: [
    {
        show: true,
        realtime: true,
        start: 70,
        end: 400,
        xAxisIndex: [0, 1]
    },
    {
        type: 'inside',
        realtime: true,
        start: 70,
        end: 400,
        xAxisIndex: [0, 1]
    }
],
grid: [{
    left: 30,
    right: 30,
    height: '35%'
}, {
    left: 30,
    right: 30,
    top: '55%',
    height: '35%'
}],
xAxis : [
    {
        type : 'category',
        boundaryGap : false,
        axisLine: {onZero: true},
        data: timeData
    },
    {
        gridIndex: 1,
        type : 'category',
        boundaryGap : false,
        axisLine: {onZero: true},
        data: timeData,
        position: 'top'
    }
],
yAxis : [
    {
        name : '给水量(m^3)',
        type : 'value',
        max : 350
    },
    {
        gridIndex: 1,
        name : '排水量(m^3)',
        type : 'value',
        inverse: true
    }
],
series : [
    {
        name:'给水量',
        type:'line',
        symbolSize: 4,
        hoverAnimation: false,
        data:[100,88,90,120,130,115,99]
    },
    {
        name:'排水量',
        type:'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbolSize: 4,
        hoverAnimation: false,
        data: [80,62,78,109,121,101,85]
    }
]
};
myChart6.setOption(option);

option = {
    backgroundColor: '#2c343c',


    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'耗电量',
            type:'pie',
            radius : '65%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'冷机'},
                {value:310, name:'冷冻水泵'},
                {value:274, name:'冷却塔'},
                {value:235, name:'空调箱'},
                {value:400, name:'冷却水泵'},
                {value:400, name:'其他'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart5.setOption(option);
	
    	
   
	
	
	
});