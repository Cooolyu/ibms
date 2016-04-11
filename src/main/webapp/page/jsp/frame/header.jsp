<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div id=headdiv class="lay-header navbar navbar-inverse navbar-fixed-top" role="navigation">
	<div class="navbar-header">
		<c:if test="${param.pointId==null || param.pointId<=0}">
		<a class="lay-header-brand" 
			href = "<%=actionPath %>/main/index"
		title="IBMS">
			<img class="lay-header-logo" src="<%=pagePath%>/images/logo.png"> 智能建筑管理系统(IBMS)
		</a>
		</c:if>
		<c:if test="${param.pointId!=null && param.pointId>0}">
		<a class="lay-header-brand" 
		title="IBMS">
			<img class="lay-header-logo" src="<%=pagePath%>/images/logo.png"> 智能建筑管理系统(IBMS)
		</a>
		<input type="hidden" id="headPointId" value="${param.pointId}">
		<span id="headPointName" class="lay-header-point"></span>
		</c:if>
	</div>

	<div class="navbar-right">
		<ul class="nav navbar-nav">
			<!-- <li>
				<a href="javascript:void(0)" data-toggle="dropdown" title="消息中心">
					<i class="glyphicon glyphicon-globe"></i></a>
				<div class="dropdown-menu lay-header-notice-panel">
					<a class="list-group-item" href="#">
						<span class="pull-right text-muted">今天</span>
						<span class="list-group-item-heading h4">终端报警</span>
						<span class="list-group-item-text">东太湖温泉度假酒店#3楼F12043火灾报警器异常.</span>
					</a>
					<a class="list-group-item" href="#">
						<span class="pull-right text-muted">昨天</span>
						<span class="list-group-item-heading h4">资产设备管理</span>
						<span class="list-group-item-text">东太湖温泉度假酒店#5楼K38729空调即将到使用期限.</span>
					</a>
					<a class="list-group-item text-center" href="#">查看全部消息</a>
				</div>
			</li> -->
			<li>
				<a href="<%=actionPath%>/system/user/list" title="用户管理">
					<i class="glyphicon glyphicon-cog"></i></a>
			</li>
			
			<li id = "warn">
			  
				<a href="<%=actionPath%>/alarm/list" title="报警列表">
					<i class="glyphicon glyphicon-time"></i></a>
			<!--
			<a href="<%=actionPath%>/alarm/list">
			<img alt="" src="<%=pagePath %>/images/AnimationAlarm.gif" width="25px"></a>
			-->
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
</div>

<div id="hideBack" class="hideBack"></div>
<div id="tip" class="tip"></div>
<img id="uping" class="loading" style="display:none;" src="<%=pagePath%>/images/loading.gif"/>
<script type="text/javascript" src="<%=pagePath%>/js/frame/header.js"></script>