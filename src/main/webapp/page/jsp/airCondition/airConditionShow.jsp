<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html >
<head>
	<%@ include file = "/page/jsp/common/commonvariable.jsp" %>
	<jsp:include page="<%=commonLib%>"/>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>暖通空调</title>
</head>
<body >
	<jsp:include page="<%=widgetHeader%>"/>
	<jsp:include page="<%=widgetAnRightBar%>">
	<jsp:param name="module1" value=""/>
	</jsp:include>
	
	<!-- 引入二级菜单 -->
	<jsp:include page="/page/jsp/airCondition/airSubmenu.jsp"></jsp:include>
	<!-- 引入冷源编辑界面 -->
	<jsp:include page="/page/jsp/airCondition/airCold.jsp"></jsp:include>
</body>

</html>