<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<html ng-app="mainModule">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="<%=commonLib%>" />
<title>首页</title>

<script type="text/javascript" src="<%=pagePath%>/thirdparty/chartjs/Chart.js"></script>
<script type="text/javascript" src="<%=pagePath%>/js/common/process2.js"></script>
<script type="text/javascript" src="<%=pagePath%>/thirdparty/clock/js/jquery.MyDigitClock.js"></script>
<link href="<%=request.getContextPath()%>/index/templatemo_style.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/index/css/nivo-slider.css" type="text/css" media="screen" />
<style type="text/css">
.map-wrap{height:570px;background:url(<%=pagePath%>/images/backpic.jpg) no-repeat top center;}
.message-div{position:relative;width:30%; height:8%; background-color:#CCC; color:#000; left:400px; top:400px}
.message2-div{position:relative;width:30%; height:15%; background-color:#CCC; color:#000; left:400px; top:400px}
.bulid1-div{position:relative;width:0%; height:0%; background-color:#CCC; color:#000; left:400px; top:200px}
.bulid2-div{position:relative;width:0%; height:0%; background-color:#CCC; color:#000; left:550px; top:300px}
</style>
</head>

<body class="homepage" ng-controller="mainController">
	
	<div id="templatemo_wrapper">
	<div id="templatemo_header">
    	
        <div id="site_title">
        	<h1>
        		<a href="">
        			<img src="<%=pagePath %>/images/logo.png" style="vertical-align:middle;">
        	 			智能建筑管理系统(IBMS)
        	 	</a>
        	 </h1>
        </div>
        
        <div id="search_box">
            <ul class="nav navbar-nav">
			<li>
				<a href="<%=actionPath%>/system/user/list" title="用户管理">
					<i class="glyphicon glyphicon-cog"></i></a>
			</li>
			
			<li id = "warn">
				<a href="<%=actionPath%>/alarm/list" title="报警列表">
					<i class="glyphicon glyphicon-time"></i></a>
			</li>
			<li>
				<a href="javascript:void(0)" class="lay-header-avatar" data-toggle="dropdown" onclick="header.getUserName();">
					<img src="<%=pagePath%>/images/avatar.png" alt="avatar"/>
					<i class="glyphicon glyphicon-chevron-down"></i></a>
				<ul class="dropdown-menu">
					<li><a href="javascript:void(0)" class=""><i class="glyphicon glyphicon-cog"></i>&nbsp;<span id="headUserName"></span></a></li>
					<li class="divider"></li>
					<li><a href="<%=actionPath%>/logout"><i class="glyphicon glyphicon-off"></i> 退出</a></li>
				</ul>
			</li>
		</ul>
        </div>
        
        <div class="cleaner"></div>
    </div>
    <div id="templatemo_menu">
    </div> 
    <div id="templatemo_middle">
    
    	<div class="map-wrap">
    		<div id="bulid1" class="bulid1-div" data-toggle="popover" data-placement="top" title="" data-content="">
		</div>
		<div id="bulid2" class="bulid2-div" data-toggle="popover" data-placement="top" title="" data-content="">
		</div>
    	</div>
    	 <div style="clear: both;width: 975px;height: 20px;">
    	</div> 
    	<div class="panel panel-default" style="margin-bottom:0px;">
  			<div class="panel-body">
    
  
    		<div class="row">
					
					<div class="col-xs-4 col-md-4">
					<div class="panel panel-default" style="margin-bottom:0px">
					  <div class="panel-heading">
					    <h4 class="panel-title">门禁系统运行状态</h4>
					  </div>
						 <div class="panel-body" style="padding-bottom:0;">
								<div class="row">
								<div class="col-xs-12" style="text-align:center;">
							<canvas class="process" width="100px" height="100px" id="doorProcess"></canvas><br>
						</div>
						</div>
						<div class="row" style="margin-top: 5px;">
							<table class="table table-bordered table-condensed" style="margin:0;width:100%">
								<tr>
									<td style="padding:0;text-align:center;background-color:#F2B968;color:white">总数：{{door.normal + door.erro}}</td>
									<td style="padding:0;text-align:center;background-color:#73C9E3;color:white">正常：{{door.normal}}</td></tr>
							</table>
						</div>
					</div>
					</div>
						
					</div>
					<div class="col-xs-4 col-md-4">
					<div class="panel panel-default" style="margin-bottom:0px">
					  <div class="panel-heading">
					    <h4 class="panel-title">监控系统运行状态</h4>
					  </div>
						 <div class="panel-body" style="padding-bottom:0;">
								<div class="row">
								<div class="col-xs-12" style="text-align:center;">
							<canvas class="process" width="100px" height="100px" id="cameraProcess"></canvas><br>
						</div>
						</div>
						<div class="row" style="margin-top: 5px;">
							<table class="table table-bordered table-condensed" style="margin:0;width:100%">
								<tr>
									<td style="padding:0;text-align:center;background-color:#F2B968;color:white">总数：{{camera.normal + camera.erro}}</td>
									<td style="padding:0;text-align:center;background-color:#73C9E3;color:white">正常：{{camera.normal}}</td></tr>
							</table>
						</div>
					</div>
					</div>
						
					</div>
					
					<div class="col-xs-4 col-md-4" >
					<div class="panel panel-default" style="margin-bottom:0px">
					  <div class="panel-heading">
					    <h4 class="panel-title">红外报警系统状态</h4>
					  </div>
						 <div class="panel-body" style="padding-bottom:0;">
								<div class="row">
								<div class="col-xs-12" style="text-align:center;">
							<div class="btn-group" role="group" aria-label="...">
							  <button type="button" class="btn btn-default" ng-click = "bufang();" ng-class="{'active':building1.status==1}">布防</button>
							  <button type="button" class="btn btn-default" ng-click = "chefang();" ng-class="{'active':building1.status==2}">撤防</button>
							</div>

						</div>
						</div>
						<div id="clock2" style="text-align:center;padding-top:37px;padding-bottom:37px;"></div>
					</div>
					</div>
						
					</div>
				</div>
				</div>
				
    	</div>
    	
		
		
		
		<div id="templatemo_footer_wrapper">
	<div id="templatemo_footer">
    	&copy; www.gm-sz.com 2004-2015. Designed by BigData 1.0.0
    </div> <!-- end of footer wrapper -->
</div>
	</div>
    </div>
    <div id="hideBack" class="hideBack"></div>
	<div id="tip" class="tip"></div>
</body>
</html>
<script type="text/javascript"
		src="<%=pagePath%>/js/main/mainController.js"></script>
<script type="text/javascript" src="<%=pagePath%>/js/frame/header.js"></script>
