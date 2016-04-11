<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<html ng-app="doorModule">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="<%=commonLib%>" />
<title>首页</title>
<style type="text/css">
html{width: 100%}
body{width: 100%;}
.show-main{width: 100%;background-color: #DEDEDE;height: 900px;margin-top:10px;position: relative;}
.floor-div{height:50px;padding: 10px;width: 100%;background-color: #fff;}
.map-div{height:900px;padding: 10px;width: 100%;background-color: #fff;}
</style>
</head>
<body  ng-controller="doorController">
	<jsp:include page="<%=widgetHeader%>" />
	<div class="lay-wrap" >
		<div class="lay-left">
			<jsp:include page="../frame/leftbar.jsp">
				<jsp:param value="door" name="module" />
				<jsp:param value="${building.id }" name="buildId" />
				<jsp:param value="${floor.id }" name="floorId" />
			</jsp:include>
		</div>
	</div>
	<div class="lay-main">
		<div class="floor-div">
		<div class="form-inline" >
				<div class="row">
					<div class="col-xs-9 col-md-9">
					<div class="form-group">
						<div class="dropdown">
							<button class="btn btn-default dropdown-toggle" type="button"
								id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
								aria-expanded="true">
								${building.name } <span class="caret"></span>
							</button>
							<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
								<c:forEach items="${buildList }" var="buildItem">
									<li><a
										href="javascript:door.changeBuilding(${buildItem.id });">${buildItem.name }</a></li>
								</c:forEach>
							</ul>
						</div>
						</div>
						<div class="form-group">
						<div class="btn-group" role="group" aria-label="...">
							<c:forEach items="${floorList }" var="floorItem">
								<button type="button"
									class="btn btn-default <c:if test="${floor.id == floorItem.id }">active</c:if>"
									onclick="door.changeFloor(${floorItem.id});">${floorItem.name }层</button>
							</c:forEach>
						</div>
						</div>
					</div>
					<div class="col-xs-2 col-md-2">
					
					</div>
				</div>
			</div>
			</div>
		<div class = "show-main">
			
			<div class="map-div">
			
			<div style="position:relative;left:0px;top:0px">
				<img id="map" alt="map" src="<%=pagePath%>/${floor.imgUrl}"> 	
				 
			</div>
			<div style="position:absolute;left:20px;top:20px;width: 200px;height: 30px">
				打开： <a class="fa fa-2x fa-unlock-alt  com-btn-icon3"></a>&nbsp;&nbsp;关闭： <a class="fa fa-2x fa-lock"></a>&nbsp;&nbsp;报警： <a class="fa fa-2x fa-unlock-alt com-btn-icon2"></a>
			</div>
			
			<div ng-repeat="asset in assets" name="{{asset.id}}" ng-style="{position:'absolute',left:asset.locationX+'px',top:asset.locationY+'px'}" ng-click="showDetail(asset);">
			<a class="{{asset.imgUrl}}" href=""></a>
			<p class="text-primary">{{asset.name}}</p>
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
        <h4 class="modal-title" id="gridSystemModalLabel">{{detail.name}}</h4>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="panel panel-default">
	<div class="panel-heading">
		<div class="row">
		<div class="col-xs-5">
		<div class="form-inline" role="form">
			<div class="form-group">
				<input type="text" class="form-control datepicker" id="startTime" ng-model="doorQuery.startTime" readonly placeholder="开始时间"/>
			</div>
		</div>
		</div>
		<div class="col-xs-5">
		<div class="form-inline" role="form">
			<div class="form-group">
				<input type="text" class="form-control datepicker" id="endTime" ng-model="doorQuery.endTime" readonly placeholder="结束时间"/>
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
							<th style="width: 20%">用户名</th>
							<th style="width: 20%">时间</th>
						</tr>
					</thead>
					<tbody >
						<tr ng-repeat="history in historys">
							<td>{{history.userName}}</td>
							<td>{{history.checkTime | date:'yyyy-MM-dd HH:mm:ss'}}</td>
						</tr>
					</tbody>
				</table>
				<jsp:include page="<%=widgetAnPagition%>"></jsp:include>
			</div>
		</div>
	</div>
</div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
	<form id = "doorForm" action="" method="post">
		<input type="hidden" id="buildId" name="buildId" value = ${building.id }>
		<input type="hidden" id="floorId" name="floorId" value = ${floor.id }>
	</form>
</body>
</html>
<script type="text/javascript" src="<%=pagePath %>/js/door/door.js"></script>
<script type="text/javascript" src="<%=pagePath %>/js/door/doorController.js"></script>
