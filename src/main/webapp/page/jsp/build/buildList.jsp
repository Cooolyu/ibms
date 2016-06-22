<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="buildListModule">
<head>
<%@ include file = "/page/jsp/common/commonvariable.jsp" %>
<jsp:include page="<%=commonLib%>"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>楼栋管理</title>
</head>
<body ng-controller="buildListController">
<jsp:include page="<%=widgetHeader%>"/>
<jsp:include page="<%=widgetAnRightBar%>">

<jsp:param name="module1" value="/page/jsp/build/changeBuild.jsp"/>
<jsp:param name="module2" value="/page/jsp/build/addBuild.jsp"/>
</jsp:include>


	<div class="lay-wrap">
		<div class="lay-left col-xs-1 ">
			<jsp:include page="../build/buildSubMenu.jsp">
				<jsp:param value="building" name="main" />
			</jsp:include>
		</div>
	

	<div class="lay-main lay-has-sub-menu">
 		<div class="panel panel-default">
 		
 		
			<div class="panel-heading">
				<div class="row">
				<div class="col-xs-10">
				<div class="form-inline">
					<div class="form-group">
						<input type="text" class="form-control" ng-model="buildQuery.selection" placeholder="楼栋"/>
					</div>
							
					<div class="form-group" >
						<a href="javascript:void(0);" ng-click="doQuery()" class="btn btn-default">查询</a>
					</div>	
					
				</div>
				</div>
					<div class="col-xs-2" style="float:right;margin-top: 8px">
						<span style="text-align: center">新增楼栋</span>
						<a href="javascript:void(0)" title="修改" ng-click="goAdd()" class="com-btn-icon glyphicon glyphicon-plus"></a>
					</div>	
				</div>
			</div>

			<div class="panel-body">
				<div class="row">
					<div class="col-md-12">
						<table class="table">
						
							<thead>
								<tr >
									<th style="width:33%; text-align:center;">序号</th>
									<th style="width:33%; text-align: center;">名称</th>
									<th style="width:33%; text-align:center;">操作</th>
								</tr>
							</thead>
							
							<tbody >
							<tr ng-repeat="build in builds">
								<td style="width:33%; text-align:center;" ng-bind="$index+1"></td>
								<td style="width:33%; text-align:center;">{{build.name}}</td>
								<td style="width:33%; text-align:center;">							
									<a href="javascript:void(0)" title="修改" ng-click="goChange($index)" class="com-btn-icon glyphicon glyphicon-edit"></a>
									<a href="javascript:void(0)" title="删除" ng-click="doDel($index)" class="com-btn-icon glyphicon glyphicon-remove"></a>
									<a href="<%=actionPath %>/floor/show/{{build.id}}"   title="前往"  class="com-btn-icon glyphicon glyphicon-circle-arrow-right"></a>
								</td>
							</tr>
							</tbody>
							
						</table>
						<form role="form" id="alarmQueryForm" method="post" action="<%=actionPath%>/building/getBuildingList">
							<jsp:include page="<%=widgetAnPagition%>"></jsp:include>
						</form>
					</div>
				</div>
			</div>
			
			
		</div>
	</div>
</div>
</body>
<script type="text/javascript" src="<%=pagePath%>/js/build/buildListController.js"></script>

</html>