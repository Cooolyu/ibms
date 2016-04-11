<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div class="lay-sub-menu">
	<a class="com-tab com-tab-default com-tab-sm <c:if test="${param.module=='alarm'}">com-active</c:if>" href="<%=actionPath%>/alarm/list/${param.pointId}">报警一览</a>
	<a class="com-tab com-tab-default com-tab-sm <c:if test="${param.module=='statistics'}">com-active</c:if>" href="<%=actionPath%>/alarmcount/list/${param.pointId}">报警统计</a>
</div>
