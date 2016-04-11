<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
	<div class="lay-wrap">
		<div class="lay-left col-xs-1 ">
				<jsp:include page="../frame/leftbar.jsp">
					<jsp:param value="airCdtShow" name="module"/>
				</jsp:include>
			<div class="lay-sub-menu">
				<div style="margin-left:15px; margin-top: 20px;">
					<span style="font-size: 20px;font-family:微软雅黑;">暖通空调</span>
				</div>
				<hr color=#DDDDDD style="margin-left:5px;margin-right:5px; margin-top:2px; margin-bottom:5px; height: 3px">
				<div >
					<a class="com-tab com-tab-default com-tab-sm " style="margin-left:25px; font-size: 15px;font-family:微软雅黑;">冷源</a>
					<a class="com-tab com-tab-default com-tab-sm " style="margin-left:25px; font-size: 15px;font-family:微软雅黑;" >热源</a>
					<a class="com-tab com-tab-default com-tab-sm " style="margin-left:25px; font-size: 15px;font-family:微软雅黑;" >组合式空调机组</a>
					<a class="com-tab com-tab-default com-tab-sm " style="margin-left:25px; font-size: 15px;font-family:微软雅黑;" >新风机组</a>
					<a class="com-tab com-tab-default com-tab-sm " style="margin-left:25px; font-size: 15px;font-family:微软雅黑;" >吊装式空调机组</a>
				</div>
			</div>
		</div>
	</div>