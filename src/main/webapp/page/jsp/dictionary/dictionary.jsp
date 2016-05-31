<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="dictionaryModule">
<head>
<%@ include file = "/page/jsp/common/commonvariable.jsp" %>
<jsp:include page="<%=commonLib%>"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
</head>
<body ng-controller="dictionaryController">

<jsp:include page="<%=widgetHeader%>"/>
<%-- <jsp:include page="<%=widgetAnRightBar%>"> --%>
<%-- <jsp:param name="module1" value="/page/jsp/floor/changeFloor.jsp"/>
<jsp:param name="module2" value="/page/jsp/floor/addFloor.jsp"/> --%>
<%-- </jsp:include> --%>


</body>
	<div class="lay-wrap">
		<div class="lay-left col-xs-1 ">
				<jsp:include page="../frame/leftbar.jsp">
					<jsp:param value="dictionary" name="module"/>
				</jsp:include>
		</div>
	</div>
	
	<div class="lay-main" >
		<select ng-change="pdictSelect()" ng-model="pdict" ng-options="a.name for a in pdicts"></select>
		<select></select>
	</div>
	
	
	
<script type="text/javascript" src="<%=pagePath%>/js/dictionary/dictionary.js"></script>
</html>