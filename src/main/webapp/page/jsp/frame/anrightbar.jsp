<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div class="lay-right-bar" id="rightBar" ng-class="{'com-active': showRightBar==true}">
	<div class="panel-default">
		<div class="panel-heading clearfix">
			<div class="col-xs-8">
				<span class="panel-title" id="rightBarTitle"></span>
			</div>
			<div class="col-xs-4 text-right">
				<a href="javascript:void(0)" id="rightBarEnlarge" onclick="pageutil.enlargeRightBar()">宽版</a>
				<a href="javascript:void(0)" id="rightBarShrink" onclick="pageutil.shrinkRightBar()" style="display:none;">窄版</a>
				<a href="javascript:void(0)" onclick="pageutil.hideRightBar()" style="margin:3px 0 0 10px;"
					class="h5 com-btn-icon glyphicon glyphicon-remove-sign"></a>
			</div>
		</div>
		<div class="lay-right-bar-body panel-body" id="rightBarBody">
			<c:forEach items="${param}" var="paramPage">
				<jsp:include page="${paramPage.value}"/>
			</c:forEach>
		</div>
	</div>
</div>