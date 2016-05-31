<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

	<%@ include file = "/page/jsp/common/commonvariable.jsp" %>
	<jsp:include page="<%=commonLib%>"/>
	<script type="text/javascript" src="<%=pagePath %>/js/main/echarts.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="lay-main" >
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:400px;"></div>
    </div>
    <script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
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
        	                        fontSize: '30',
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
        	                {value:3, name:'运行中'},
        	                {value:2, name:'关机状态'},
        	                {value:1, name:'维护中'}
        	            ]
        	        }
        	    ]
        	};


myChart.setOption(option);

    </script>
</body>
</html>