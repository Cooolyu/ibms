<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html >
<head>
	<%@ include file = "/page/jsp/common/commonvariable.jsp" %>
	<jsp:include page="<%=commonLib%>"/>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>给水排水</title>
	<style type="text/css">
.div {   
        height:25px;   
        line-height:25px;   
        overflow:hidden;   
 }
</style>
</head>
<body >
	<input id="sysModuleId" style="hidden" value="${sysModuleId}" />
	<jsp:include page="<%=widgetHeader%>"/>
	
	<div class="lay-wrap">
		<div class="lay-left col-xs-1 ">
				<jsp:include page="../frame/leftbar.jsp">
					<jsp:param value="sswShow" name="module"/>
				</jsp:include>
		</div>
	</div>
	
	<div class="lay-main" >
			<div class="form-inline" >
				<div class="row">
					<div class="col-xs-9 col-md-9">
					<div class="form-group">
						<div class="dropdown">
							<button class="btn btn-default dropdown-toggle" type="button"
								id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
								aria-expanded="true">
								{{build.name}}
							<span class="caret"></span>
							</button>
							<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
								<li ng-click="chooseBuild(build)"  ng-repeat="build in builds"><a>{{build.name}}</a></li>
							</ul>
						</div>
					</div>
					<div class="form-group">
						<div class="btn-group" role="group" aria-label="...">
							<button ng-click="chooseFloor(floor)" ng-repeat="floor in floors" type="button" class="btn btn-default">{{floor.name}}层</button>
						</div>
				    </div>
					</div>
					<div class="col-xs-3 col-md-3">
						<div class="btn-group" >
							<button id="open" name="open" type="button" class="btn btn-default " ng-click="edit()">编辑模式</button>
							<button id="close" name="close" type="button" class="btn btn-default " ng-click="view()">查看模式</button>
						</div>
					</div>
	
			</div>
			</div>
			<div class="form-inline">
			<div class="row" >
			<div id="imgDiv"  class="col-xs-8 col-md-8" >
			<div class="form-group" style="position:relative;margin-left:25px; margin-top:20px;">
				<img style="width: 630px; height: 450px; " src="<%=pagePath%>/{{floor.imgUrl}}"> 
			</div>
			</div>
			<div  class="col-xs-4 col-md-4" style="margin-top: 20px;">
				
				<div id="panel1" class="panel panel-default">
	    				<div id="head1" class="panel-heading">
	     				 <h4 class="panel-title" style="text-align: center;">
	       					 <a data-toggle="collapse" data-toggle="collapse"  style="font: 11pt Microsoft YaHei;">冷源设备列表</a>
	      				</h4>
	    				</div>

   				
 				    <div id="body1" class="panel-body">
 				    		<div ng-repeat="uasset in uassets" class="moveDiv" style="margin-bottom: 10px;">
							<a id="a{{asset.assetId}}" class="fa fa-2x fa-map-marker moveBtn" ></a>
							<label id="name{{asset.assetId}}" >{{uasset.name}}</label>
							<input type="hidden" class="val"  value="{{uasset.assetId}}" />
						    <input id="x{{uasset.assetId}}" type="hidden" class="leftVal"  value="{{uasset.locationX}}" />
						    <input id="y{{uasset.assetId}}" type="hidden" class="topVal"  value="{{uasset.locationY}}" />
						</div>	
	
					</div>
				</div>
		
				<div id="panel2" class="panel panel-default">
					<div id="head2" class="panel-heading">
     				 	<h4 class="panel-title" style="text-align: center;">
       						<a data-toggle="collapse" data-toggle="collapse"  style="font: 11pt Microsoft YaHei;">AKB0048 空调机组</a>
      					</h4>
    					</div>
					<div id="body2" class="panel-body">
						<div ng-repeat="airCold in airColds" class="form-inline">
						<div class="row">
							<label class=" control-label col-sm-3">{{airCold.name}}:</label>
				 			<p class="form-control-static col-sm-3" >{{airCold.value}}</p>
							<label class=" control-label col-sm-3">{{airCold.name2}}:</label>
				 			<p class="form-control-static col-sm-3">{{airCold.value2}}</p>
						</div>
						</div>
					</div>
				</div>
				<div ng-repeat="iasset in iassets" class="moveDiv" style="margin-bottom: 10px;">
					<a ng-click="showView(iasset)" id="a{{iasset.assetId}}" class="fa fa-2x fa-map-marker moveBtn" ></a>
					<label id="name{{asset.assetId}}" >{{iasset.name}}</label>
					<input type="hidden" class="val"  value="{{iasset.assetId}}" />
				    <input id="x{{iasset.assetId}}" type="hidden" class="leftVal"  value="{{iasset.locationX}}" />
				    <input id="y{{iasset.assetId}}" type="hidden" class="topVal"  value="{{iasset.locationY}}" />
				</div>	
			
		</div>
		</div>		
		</div>
		</div>

	<jsp:include page="<%=widgetFooter %>"></jsp:include>
	
	<div class="modal fade" id="showModal" role="dialog" aria-labelledby="gridSystemModalLabel">
  	<div class="modal-dialog" role="document">
    <div class="modal-content">
    		<div class="modal-header">
        		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        		<h4 class="modal-title">{{asvName}}</h4>
      	</div>
      	<div class="modal-body">
        		<div class="container-fluid" id="viewDiv">
        		<div style="margin-left: 10%;margin-top: 10px;">
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">冷冻水供水温度:</label>
        			<label id="fwaterTemp" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">冷冻水供水压力:</label>
        			<label id="fwaterPress" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">冷凝温度:</label>
        			<label id="condTemp" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        		</div>
        		<div style="margin-left: 10%;margin-top: 10px;">
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">冷冻水回水温度:</label>
        			<label id="rewaterTemp" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">冷冻水回水压力:</label>
        			<label id="rewaterPress" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">蒸发温度:</label>
        			<label id="evatTemp" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        		</div>
        		<div style="margin-left: 10%;margin-top: 10px;">
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">冷却水供水温度:</label>
        			<label id="coolwaterTemp" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">冷却水供水压力:</label>
        			<label id="coolwaterPress" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">冷凝压力:</label>
        			<label id="condPress" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        		</div>
        		<div style="margin-left: 10%;margin-top: 10px;">
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">冷却水回水温度:</label>
        			<label id="rcoolwaterTemp" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">冷却水回水压力:</label>
        			<label id="rcoolwaterPress" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">蒸发压力:</label>
        			<label id="evapPress" style="font: 11pt Microsoft YaHei;width: 16%;"></label>
        		</div>
        		</div>
      	</div>
        
      	<div class="modal-footer">
        		<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
      	</div>
    </div><!-- /.modal-content -->
  	</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->

</body>
</html>
