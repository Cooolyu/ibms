<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="visualModule">
<head>
	<%@ include file = "/page/jsp/common/commonvariable.jsp" %>
	<jsp:include page="<%=commonLib%>"/>
	<script type="text/javascript" src="<%=pagePath %>/js/main/echarts.min.js"></script>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>暖通空调</title>
	<style type="text/css">
.div {   
        height:25px;   
        line-height:25px;   
        overflow:hidden;   
 }
</style>
</head>
<body ng-controller="visualController">

	<jsp:include page="<%=widgetHeader%>"/>
	
	<div class="lay-wrap">
		<div class="lay-left col-xs-1 ">
				<jsp:include page="../frame/leftbar.jsp">
					<jsp:param value="visShow" name="subMenu"/>
				</jsp:include>
		</div>
	</div>
 
	<div class="lay-main" >
	<div class="panel panel-default" style="width: 32%;float: left;position: relative;">
    <div class="panel-heading">
      <h4 class="panel-title" style="font: 11pt Microsoft YaHei;text-align: center;">
        暖通空调运行状态
      </h4>
    </div>
    <div class="panel-collapse collapse in">
        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 100%;height:260px;">
    </div>
    </div>
    </div>
    
    	<div class="panel panel-default" style="width: 32%;float: left;position: relative;margin-left: 10px">
    <div class="panel-heading">
      <h4 class="panel-title" style="font: 11pt Microsoft YaHei;text-align: center;">
        给排水运行状态
      </h4>
    </div>
    <div class="panel-collapse collapse in">
        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main2" style="width: 100%;height:260px;">
    </div>
    </div>
    </div>
    
    <div class="panel panel-default" style="width: 32%;float: left;position: relative;margin-left: 10px">
    <div class="panel-heading">
      <h4 class="panel-title" style="font: 11pt Microsoft YaHei;text-align: center;">
        供配电运行状态
      </h4>
    </div>
    <div class="panel-collapse collapse in">
        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main3" style="width: 100%;height:260px;">
    </div>
    </div>
    </div>
    
    <div class="panel panel-default" style="width: 32%;float: left;position: relative;">
    <div class="panel-heading">
      <h4 class="panel-title" style="font: 11pt Microsoft YaHei;text-align: center;">
        暖通空调耗电和耗水量
      </h4>
    </div>
    <div class="panel-collapse collapse in">
        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main4" style="width: 100%;height:600px;">
    </div>
    </div>
    </div>
    
    <div class="panel panel-default" style="width: 32%;float: left;position: relative;margin-left: 10px">
    <div class="panel-heading">
      <h4 class="panel-title" style="font: 11pt Microsoft YaHei;text-align: center;">
        暖通空调用电分项
      </h4>
    </div>
    <div class="panel-collapse collapse in">
        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main5" style="width: 100%;height:600px;">
    </div>
    </div>
    </div>
    
    <div class="panel panel-default" style="width: 32%;float: left;position: relative;margin-left: 10px">
    <div class="panel-heading">
      <h4 class="panel-title" style="font: 11pt Microsoft YaHei;text-align: center;">
        给水量和排水量关系图
      </h4>
    </div>
    <div class="panel-collapse collapse in">
        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main6" style="width: 100%;height:600px;">
    </div>
    </div>
    </div>

    </div>
	
			
</body>
<script type="text/javascript" src="<%=pagePath %>/js/visual/visualController.js"></script>
</html>
