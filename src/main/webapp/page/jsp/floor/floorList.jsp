<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="floorListModule">
<head>
<%@ include file = "/page/jsp/common/commonvariable.jsp" %>
<jsp:include page="<%=commonLib%>"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>楼栋管理</title>
</head>
<body ng-controller="floorListController">

<jsp:include page="<%=widgetHeader%>"/>
<jsp:include page="<%=widgetAnRightBar%>">
<jsp:param name="module1" value="/page/jsp/floor/changeFloor.jsp"/>
<jsp:param name="module2" value="/page/jsp/floor/addFloor.jsp"/>
</jsp:include>

<input id="hidden" value=${id} style="display: none" />
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
				<div class="form-inline">
					<div class="form-group" style="float:left； vertical-align: middle;margin-right: 10px">
						<span style="text-align: center">${buildName}</span>
					</div>	
					<div class="form-group">
						<input type="text" class="form-control" ng-model="floorQuery.selection" placeholder="楼层"/>
					</div>
							
					<div class="form-group" >
						<a href="javascript:void(0);" ng-click="doQuery()" class="btn btn-default">查询</a>
					</div>	
					
				</div>
				</div>
					<div class="col-xs-2" style="float:right;">
						<span style="text-align: center;">新增楼栋</span>
						<a href="javascript:void(0)" title="修改" ng-click="goAdd()" class="com-btn-icon glyphicon glyphicon-plus"></a>
						<a href="<%=actionPath %>/building/show"  class="btn btn-default">返回</a>
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
							<tr ng-repeat="floor in floors">
								<td style="width:33%; text-align:center;" ng-bind="$index+1"></td>
								<td style="width:33%; text-align:center;">{{floor.name}}</td>
								<td style="width:33%; text-align:center;">							
									<a href="javascript:void(0)" title="修改" ng-click="goChange($index)" class="com-btn-icon glyphicon glyphicon-edit"></a>
									<a href="javascript:void(0)" title="删除" ng-click="doDel($index)" class="com-btn-icon glyphicon glyphicon-remove"></a>
									<a href="javascript:void(0)"   title="查看" ng-click="goView($index)" class="com-btn-icon glyphicon glyphicon-eye-open"></a>
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
	<div class="modal fade" id="showModal" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="gridSystemModalLabel" ng-model="viewFloorName">{{viewFloorName}}层图片</h4>
      </div>
      <div class="modal-body">
        <div class="container-fluid" id="viewDiv">
        	<img style="max-width:100%;max-height:100%; auto " src="<%=pagePath%>/{{viewFloorUrl}}">
        </div>
      </div>
        
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</body>
<script type="text/javascript" src="<%=pagePath%>/js/floor/floorListController.js"></script>
</html>