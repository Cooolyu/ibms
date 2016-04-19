<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="assetListModule">
<head>
<%@ include file = "/page/jsp/common/commonvariable.jsp" %>
<jsp:include page="<%=commonLib%>"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>楼栋管理</title>
</head>
<body ng-controller="assetListController">
<jsp:include page="<%=widgetHeader%>"/>
<jsp:include page="<%=widgetAnRightBar%>">
<jsp:param name="module1" value="/page/jsp/asset/assetDetails.jsp"/>
<jsp:param name="module2" value="/page/jsp/asset/addAsset.jsp"/>
<jsp:param name="module3" value="/page/jsp/asset/assetCustomize.jsp"/>
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
				<div class="form-inline">
					<span style="text-align: center;" >编号：</span>
					<div class="form-group">
						<input type="text" class="form-control" ng-model="assetQuery.serialNum" placeholder="编号（20字以内）"/>
					</div>
					<span style="text-align: center;">名称：</span>
					<div class="form-group">
						<input type="text" class="form-control" ng-model="assetQuery.assetName" placeholder="名称"/>
					</div>
					<div class="form-group">
						<a href="javascript:void(0);" ng-click="doQuery()" class="btn btn-default">查询</a>
					</div>
				</div>
				</div>
					<div class="col-xs-2" style="float:right;margin-top: 10px; ">
						<span style="text-align: center">资产设备添加</span>
						<a href="javascript:void(0)" title="添加" ng-click="goAdd()" class="com-btn-icon glyphicon glyphicon-plus"></a>
					</div>	
				</div>
			</div>

			<div class="panel-body">
				<div class="row">
					<div class="col-md-12">
						<table class="table">
						
							<thead>
								<tr >
									<th style="width:10%; text-align:center;">序号</th>
									<th style="width:15%; text-align:center;">名称</th>
									<th style="width:10%; text-align:center;">品牌</th>
									<th style="width:15%; text-align:center;">型号</th>
									<th style="width:10%; text-align:center;">状态</th>
									<th style="width:12.5%; text-align:center;">位置</th>
									<th style="width:12.5%; text-align: center;">生命结束日</th>
									<th style="width:12.5%; text-align:center;">操作</th>
								</tr>
							</thead>
							
							<tbody >
							<tr ng-repeat="asset in assets">
								<td style="width:10%; text-align:center;" ng-bind="$index+1"></td>
								<td style="width:15%; text-align:center;">{{asset.name}}</td>
								<td style="width:10%; text-align:center;">{{asset.brandName}}</td>
								<td style="width:15%; text-align:center;">{{asset.modelName}}</td>
								<td style="width:10%; text-align:center;">{{asset.status|status}}</td>
								<td style="width:12.5%; text-align:center;">{{asset.buildingName}}-{{asset.floorName}}</td>
								<td style="width:12.5%; text-align:center;">{{asset.lifeEndDate|date:'yyyy-MM-dd'}}</td>
								<td style="width:12.5%; text-align:center;">
									<a href="javascript:void(0)" title="资产详情" ng-click="goDetails($index)" class="com-btn-icon glyphicon glyphicon-th-large"></a>
									<a href="javascript:void(0)" title="修改" ng-click="goChange($index)" class="com-btn-icon glyphicon glyphicon-edit"></a>
									<a href="javascript:void(0)" title="自定义" ng-click="goCustomize($index)"  class="com-btn-icon glyphicon glyphicon glyphicon-magnet"></a>
									<a href="javascript:void(0)" title="删除" ng-click="doDel($index)" class="com-btn-icon glyphicon glyphicon-remove"></a>
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
	<jsp:include page="<%=widgetFooter %>"></jsp:include>
</div>
</body>
<script type="text/javascript" src="<%=pagePath%>/js/assets/assetListController.js"></script>

</html>