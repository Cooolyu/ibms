<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="alarmlistModule">
<head>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<jsp:include page="<%=commonLib%>"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报警列表</title>
</head>
<body ng-controller="alarmlistController">
<jsp:include page="<%=widgetHeader%>"/>
<jsp:include page="<%=widgetAnRightBar%>">
	<jsp:param name="module1" value="/page/jsp/alarm/changeAlarm.jsp"/>
</jsp:include>
<div class="lay-wrap">

	<div class="lay-left col-xs-1">
		<jsp:include page="../frame/leftbar.jsp">
			<jsp:param value="alarmlist" name="module"/>
			<jsp:param value="1" name="buildId" />
		</jsp:include>
	</div>

<div class="lay-main">
<div class="panel panel-default">
	<div class="panel-heading">
		<div class="row">
		<div class="col-xs-10">
		<div class="form-inline" role="form">
			<div class="form-group">
				<input type="text" class="form-control datepicker" id="startTime" ng-model="alarmQuery.startTime" readonly placeholder="开始时间"/>
			</div>
		
			<div class="form-group">
				<input type="text" class="form-control datepicker" id="endTime" ng-model="alarmQuery.endTime" readonly placeholder="开始时间"/>
			</div>
			
		
			<div class="form-group">
				<select class="form-control" ng-model="alarmQuery.status" >
					<option value="0" ng-if="alarmQuery.status == 0" selected="selected">状态选择</option>
					<option value="0" ng-if="alarmQuery.status != 0">状态选择</option>
					<option ng-repeat="status in statuss" value="{{status.id}}">{{status.name}}</option>
				</select>
		</div>
		</div>
		</div>
		<div class="col-xs-2" style="float:right">
			<a href="javascript:void(0);" ng-click="doQuery()" class="btn btn-default">查询</a>
		</div>
		</div>
	</div>
	<div class="panel-body">
		<div class="row">
			<div class="col-md-12">
				<table class="table">
					<thead>
						<tr>
							<th style="width: 10%">序号</th>
							<th style="width: 20%">报警时间</th>
							<th style="width: 20%">设备名称</th>
							<th style="width: 20%">状态</th>
							<th style="width: 10%">操作</th>
						</tr>
					</thead>
					<tbody >
						<tr ng-repeat="alarm in alarms">
							<td ng-bind="$index+1"></td>
							<td>{{alarm.alarmTime | date:'yyyy-MM-dd HH:mm:ss'}}</td>
							<td>{{alarm.assetsName}}</td>
							<td ng-if="alarm.status==2">已处理</td><td ng-if="alarm.status==1">未处理</td>
							<td>							
								<a href="javascript:void(0)" title="处理" ng-click="goChange($index)" class="com-btn-icon glyphicon glyphicon-edit"></a>
							</td>
						</tr>
					</tbody>
				</table>
				
				<jsp:include page="<%=widgetAnPagition%>"></jsp:include>
				
			</div>
		</div>
	</div>
</div>
</div>
<jsp:include page="<%=widgetFooter %>"></jsp:include>
</div>
</body>
<script type="text/javascript" src="<%=pagePath%>/js/alarm/alarmlistController.js"></script>
</html>