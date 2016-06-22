<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
	<div class="lay-wrap">
		<div class="lay-left col-xs-1 ">
				<jsp:include page="../frame/leftbar.jsp">
					<jsp:param value="airCdtShow" name="subMenu"/>
				</jsp:include>
			<div class="lay-sub-menu">
<!-- 				<div style="margin-left:15px; margin-top: 20px;">
					<span style="font-size: 20px;font-family:微软雅黑;">暖通空调</span>
				</div>
				<hr color=#DDDDDD style="margin-left:5px;margin-right:5px; margin-top:2px; margin-bottom:5px; height: 3px"> -->
				<div >
					<a  class="com-tab com-tab-default com-tab-sm 
						<c:if test="${param.main=='airCdtShow'}"> thrid-tab-default thrid-active </c:if>"
						 style="margin-left:25px; font-size: 15px;font-family:微软雅黑;"href="<%=actionPath %>/airCdt/show">暖通空调</a>
					<a class="com-tab com-tab-default com-tab-sm
					<c:if test="${param.main=='sswShow'}"> thrid-tab-default thrid-active </c:if> " style="margin-left:25px; font-size: 15px;font-family:微软雅黑;" href="<%=actionPath %>/ssw/show">给排水</a>
					<a class="com-tab com-tab-default com-tab-sm 
					<c:if test="${param.main=='tadShow'}">thrid-tab-default thrid-active </c:if>" style="margin-left:25px; font-size: 15px;font-family:微软雅黑;" href="<%=actionPath %>/tad/show">供配电</a>
				</div>
			</div>
		</div>
	</div>