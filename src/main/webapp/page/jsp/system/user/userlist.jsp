<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="userModule">
<head>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<jsp:include page="<%=commonLib%>"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户列表</title>
</head>
<body ng-controller="UserController">
<jsp:include page="<%=widgetHeader%>"/>
<jsp:include page="<%=widgetAnRightBar%>">
	<jsp:param name="module1" value="/page/jsp/system/user/modifyuser.jsp"/>
	<jsp:param name="module2" value="/page/jsp/system/user/adduser.jsp"/>
</jsp:include>
<div class="lay-wrap">

	<div class="lay-left col-xs-1">
		<jsp:include page="../../frame/leftbar.jsp">
			<jsp:param value="sys" name="module"/>
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
				<input type="text" class="form-control" id="showUserName" ng-model="userQuery.userName" placeholder="用户名" value=""/>
			</div>
			<a href="javascript:void(0);" ng-click="doquery()" class="btn btn-default">查询</a>
		</div>
		</div>
		<div class="col-xs-2" style="float:right">
			<input type="button" class="btn btn-default" ng-click="goAdd();" value="添加用户"/>
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
							<th style="width: 20%">用户名</th>
							<th style="width: 15%">角色</th>
							<th style="width: 15%">状态</th>
							<th style="width: 20%">操作</th>
						</tr>
					</thead>
					<tbody >
						<tr ng-repeat="user in users">
							<td ng-bind="$index+1"></td>
							<td>{{user.username}}</td>
							<td>{{user.roleName}}</td>
							<td>{{user.statusStr}}</td>
							<td>
								<div ng-class="{'com-hide': user.status!=0}">
									<a href="javascript:void(0)" title="修改" ng-click="goChange($index)" class="com-btn-icon glyphicon glyphicon-edit"></a>
									<a ng-class="{'com-hide': user.id==1}" href="javascript:void(0)" title="删除" ng-click="doDel($index)" class="com-btn-icon glyphicon glyphicon-remove"></a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<form role="form" id="userQueryForm" method="post" action="<%=actionPath%>/system/user/list">
				<input type="hidden" id="userName" name="userName" value=""/>
				<jsp:include page="<%=widgetAnPagition%>"></jsp:include>
				</form>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</body>
<script type="text/javascript" src="<%=pagePath%>/thirdparty/sha/sha1.js"></script>
<script type="text/javascript" src="<%=pagePath%>/js/system/user/userController.js"></script>
</html>