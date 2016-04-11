<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div class="lay-sub-menu">
	<a class="com-tab com-tab-default com-tab-sm <c:if test="${param.module=='user'}">com-active</c:if>" href="<%=actionPath%>/system/user/list">人员管理</a>
</div>