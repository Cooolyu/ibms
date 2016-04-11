<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<html ng-app="alarmModule">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="<%=commonLib%>" />
<title></title>
<style type="text/css">
html{width: 100%}
body{width: 100%;}
.show-main{width: 100%;background-color: #DEDEDE;height: 900px;margin-top:10px;position: relative;}
.floor-div{height:50px;padding: 10px;width: 100%;background-color: #fff;}
.map-div{height:900px;padding: 10px;width: 100%;background-color: #fff;}
</style>
</head>
<body ng-controller="alarmController">
	<jsp:include page="<%=widgetHeader%>" />
	<div class="lay-wrap" >
		<div class="lay-left">
			<jsp:include page="../frame/leftbar.jsp">
				<jsp:param value="alarm" name="module" />
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
										href="javascript:alarm.changeBuilding(${buildItem.id });">${buildItem.name }</a></li>
								</c:forEach>
							</ul>
						</div>
					</div>
					<div class="form-group">
						<div class="btn-group" role="group" aria-label="...">
							<c:forEach items="${floorList }" var="floorItem">
								<button type="button"
									class="btn btn-default <c:if test="${floor.id == floorItem.id }">active</c:if>"
									onclick="alarm.changeFloor(${floorItem.id});">${floorItem.name }层</button>
							</c:forEach>
						</div>
				    </div>
					</div>
					<div class="col-xs-3 col-md-3">
					<font size="3">报警系统状态：</font>
						<div class="btn-group" role="group" aria-label="...">
							<button id="open" name="open" type="button" class="btn btn-default <c:if test="${building.status == 1 }">active</c:if>" ng-click = "bufang();">布防</button>
							<button id="close" name="close" type="button" class="btn btn-default <c:if test="${building.status == 2 }">active</c:if>" ng-click = "chefang();">撤防</button>
						</div>
					</div>
				</div>
			</div>
			</div>
		<div class = "show-main" id="container">
			
			<div class="map-div">
			
			<div style="position:relative;left:0px;top:0px">
				<img id="map" alt="map" src="<%=pagePath%>/${floor.imgUrl}"> 	
				 
			</div>
			
			<div ng-repeat="asset in assets" name="{{asset.id}}" ng-style="{position:'absolute',left:asset.locationX+'px',top:asset.locationY+'px'}">
			<a class="{{asset.imgUrl}}" href=""></a>
			<p class="text-primary">{{asset.name}}</p>
			</div>
			<canvas id = "myCanvas" style="position:absolute;"></canvas>				
			</div>
			
		</div>
		<jsp:include page="<%=widgetFooter %>"></jsp:include>
	</div>
	
	
	<form id = "alarmForm" action="" method="post">
		<input type="hidden" id="buildId" name="buildId" value = ${building.id }>
		<input type="hidden" id="floorId" name="floorId" value = ${floor.id }>
	</form>
</body>
</html>
<script type="text/javascript" src="<%=pagePath %>/js/alarm/alarm.js"></script>
<script type="text/javascript" src="<%=pagePath %>/js/alarm/alarmController.js"></script>
