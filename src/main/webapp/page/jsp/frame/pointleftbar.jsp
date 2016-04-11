<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<button class="lay-left-up btn btn-default btn-xs" onclick="leftbar.showUp()"><i class="glyphicon glyphicon-chevron-up"></i></button>
<div class="lay-left-bar">
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='overview'}"> com-active</c:if>" href="<%=actionPath%>/overview/${param.pointId}">
			<img class="lay-left-menu-img" src="<%=pagePath%>/images/home.png"/><span class="lay-left-menu-text">概览</span></a>
	</div>
	
	<om:role expectRoles="6">
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='monitor'}"> com-active</c:if>" 
		href='<%=actionPath%>/olt/list/${param.pointId}'>
			<img class="lay-left-menu-img" src="<%=pagePath%>/images/monitor.png"/><span class="lay-left-menu-text">监控</span></a>
	</div>
	</om:role>
	
	<!-- 
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='alarm'}"> com-active</c:if>" href="<%=actionPath%>/alarm/list/${param.pointId}">
			<img class="lay-left-menu-img" src="<%=pagePath%>/images/alarm.png"/>
			<span class="lay-left-menu-text">报警</span></a>
		<div class="lay-left-remind glyphicon glyphicon-exclamation-sign" id="alarmRemind">
		<div class="popover right">
			<div class="arrow"></div>
			<div class="popover-content"></div>
		</div>
		</div>
	</div>
	 
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='assets'}"> com-active</c:if>" href="<%=actionPath%>/assets/assetslist/${param.pointId}">
			<img class="lay-left-menu-img" src="<%=pagePath%>/images/assets.png"/>
			<span class="lay-left-menu-text">资产设备</span></a>
	</div>
	-->
	<om:role expectRoles="2">
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='regularcheck'}"> com-active</c:if>" href="<%=actionPath%>/regularcheck/list/${param.pointId}">
			<img class="lay-left-menu-img" src="<%=pagePath%>/images/regularcheck.png"/>
			<span class="lay-left-menu-text">定期巡检</span></a>
	</div>
	</om:role>
	 <!-- 
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='energy'}"> com-active</c:if>" href="#?pointId=${param.pointId}">
			<img class="lay-left-menu-img" src="<%=pagePath%>/images/enegry.png"/><span class="lay-left-menu-text">能源</span></a>
	</div>
	
	<om:role expectRoles="1,2">
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='mlist'}"> com-active</c:if>" href="<%=actionPath%>/mlist/list/${param.pointId}">
			<img class="lay-left-menu-img" src="<%=pagePath%>/images/mlist.png"/><span class="lay-left-menu-text">维护单</span></a>
		<div class="lay-left-remind glyphicon glyphicon-exclamation-sign" id="monitormlistRemind">
			<div class="popover right">
				<div class="arrow"></div>
				<div class="popover-content"></div>
			</div>
		</div>
	</div>
	</om:role>
	<om:role expectRoles="3">
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='mlist'}"> com-active</c:if>" href="<%=actionPath%>/mlist/list/${param.pointId}">
			<img class="lay-left-menu-img" src="<%=pagePath%>/images/mlist.png"/><span class="lay-left-menu-text">维护单</span></a>
		<div class="lay-left-remind glyphicon glyphicon-exclamation-sign" id="actormlistRemind">
			<div class="popover right">
				<div class="arrow"></div>
				<div class="popover-content"></div>
			</div>
		</div>
	</div>
	</om:role>
	 -->
	<!-- 
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='points'}"> com-active</c:if>" href="#">
			<img class="lay-left-menu-img" src="<%=pagePath%>/images/report.png"/><span class="lay-left-menu-text">运维报告</span></a>
	</div>
	-->
</div>
<input type="hidden" id="menuPointId" value="${param.pointId}">
<button class="lay-left-down btn btn-default btn-xs" onclick="leftbar.showDown()"><i class="glyphicon glyphicon-chevron-down"></i></button>
