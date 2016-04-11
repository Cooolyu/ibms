<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="<%=commonLib%>"/>
<title>没有权限</title>
</head>
<body>
	<div class="lay-error-wrap">
		<div class="col-xs-3">
			<img class="lay-error-logo" alt="IBMS" src="<%=pagePath%>/images/logo-large.png">
		</div>
		<div class="col-xs-9">
			<div class="lay-error-title">没有权限</div>
			<p class="h4">对不起,您没有权限进行此操作!!!</p>
			<a class="btn btn-primary pull-right" 
				href="<%=actionPath%>/main/index" 
			>返回首页</a>
		</div>
	</div>
</body>
</html>