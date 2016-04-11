<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div class="list-group">
<c:forEach items="${remindMap}" var="map">
	<c:if test="${module=='assetsalert'}">
		<a class="list-group-item" href="<%=actionPath%>/assetsalert/list/${pointId}?status=23">
	</c:if>
	<c:if test="${module=='alarm'}">
		<a class="list-group-item" href="<%=actionPath%>/alarm/list/${pointId}?status=1">
	</c:if>
	<c:if test="${module=='regularcheck'}">
		<a class="list-group-item" href="<%=actionPath%>/regularcheck/checkrecord/list/${pointId}?status=1">
	</c:if>
	<c:if test="${module=='actormlist'}">
		<a class="list-group-item" href="<%=actionPath%>/mlist/list/${pointId}?status=5">
	</c:if>
	<c:if test="${module=='monitormlist'}">
		<a class="list-group-item" href="<%=actionPath%>/mlist/list/${pointId}?status=6">
	</c:if>

		${map.value.statusName}<span class="badge">${map.value.number}</span></a>
</c:forEach>
	<input type="hidden" class="newRemind" value="${newRemind}" />
</div>