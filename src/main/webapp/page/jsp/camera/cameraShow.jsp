<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<html ng-app="cameraModule">
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
<body ng-controller="cameraController">
	<jsp:include page="<%=widgetHeader%>" />
	<div class="lay-wrap" >
		<div class="lay-left">
			<jsp:include page="../frame/leftbar.jsp">
				<jsp:param value="camera" name="module" />
				<jsp:param value="${building.id }" name="buildId" />
				<jsp:param value="${floor.id }" name="floorId" />
			</jsp:include>
		</div>
	</div>
	<div class="lay-main">
		
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
										href="javascript:camera.changeBuilding(${buildItem.id });">${buildItem.name }</a></li>
								</c:forEach>
							</ul>
						</div>
						</div>
						<div class="form-group">
						<div class="btn-group" role="group" aria-label="...">
							<c:forEach items="${floorList }" var="floorItem">
								<button type="button"
									class="btn btn-default <c:if test="${floor.id == floorItem.id }">active</c:if>"
									onclick="camera.changeFloor(${floorItem.id});">${floorItem.name }层</button>
							</c:forEach>
						</div>
						</div>
					</div>
					<div class="col-xs-2 col-md-2">
					
					</div>
				</div>
			</div>
			
		<div class = "show-main">
			
			<div class="map-div">
			
			<div style="position:relative;left:0px;top:0px">
				<img id="map" alt="map" src="<%=pagePath%>/${floor.imgUrl}"> 	
				 
			</div>
			<div style="position:absolute;left:20px;top:20px;width: 200px;height: 30px">
				正常： <a class="fa fa-2x fa-video-camera"></a>&nbsp;&nbsp;&nbsp;&nbsp;异常： <a class="fa fa-2x fa-video-camera com-btn-icon2"></a>
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
        <div class="container-fluid" id="viewDiv">
        	<table>
        		<tr>
        			<td><object classid="clsid:D5E14042-7BF6-4E24-8B01-2F453E8154D7" id="PlayView_OCX"  width="850px" height="700" name="ocx" >
            	</object></td>
        		</tr>
        		<tr>
        		<td align="right"><button type="button" class="btn btn-default" ng-click="viewBack(detail.id);">查看回放</button></td>
        		</tr>
        	</table>
         	
        </div>
        <div id="backViewDiv" class="container-fluid" style="display: none">
         	<table>
        		<tr>
        			<td><object classid="clsid:61978326-6772-4595-9EC3-D23C5CD5E61F" id="PlayBack_OCX" width="850px" height="700" name="ocxback"></td>
        		</tr>
        		<tr>
        		<td align="right">
        		<input id="StartTime" name="StarTime" type = "text"  style="width: 130px" value="2012-04-16 00:00:00">
            	<input id="EndTime" name="EndTime" type = "text"  style="width: 130px" value="2012-04-16 23:59:59">
            	<button type="button" class="btn btn-default" ng-click="StartQueryRecord();">搜索</button>
            	<button type="button" class="btn btn-default" ng-click="viewImg(detail.id)">实时</button>
           		 </td>
        		</tr>
        	</table>
         	
        </div>
      </div>
        
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
	
	<form id = "cameraForm" action="" method="post">
		<input type="hidden" id="buildId" name="buildId" value = ${building.id }>
		<input type="hidden" id="floorId" name="floorId" value = ${floor.id }>
	</form>
</body>
</html>
<script type="text/javascript" src="<%=pagePath %>/js/camera/camera.js"></script>
<script type="text/javascript" src="<%=pagePath %>/js/camera/cameraController.js"></script>
