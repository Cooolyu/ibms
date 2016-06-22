<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
	<div class="lay-wrap">
		<div class="lay-left col-xs-1 ">
				<jsp:include page="../frame/leftbar.jsp">
					<jsp:param value="building" name="subMenu"/>
				</jsp:include>
			<div class="lay-sub-menu">
<!-- 				<div style="margin-left:15px; margin-top: 20px;">
					<span style="font-size: 20px;font-family:微软雅黑;">暖通空调</span>
				</div>
				<hr color=#DDDDDD style="margin-left:5px;margin-right:5px; margin-top:2px; margin-bottom:5px; height: 3px"> -->
				<div >
					<a class="com-tab com-tab-default com-tab-sm <c:if test="${param.main=='building'}"> thrid-tab-default thrid-active </c:if> " style="margin-left:25px; font-size: 15px;font-family:微软雅黑;"href="<%=actionPath %>/building/show" >楼栋楼层管理</a>
					<a class="com-tab com-tab-default com-tab-sm <c:if test="${param.main=='asset'}"> thrid-tab-default thrid-active </c:if> "style="margin-left:25px; font-size: 15px;font-family:微软雅黑;" href="<%=actionPath %>/asset/show">设备资产管理</a>
				</div>
			</div>
		</div>
	</div>