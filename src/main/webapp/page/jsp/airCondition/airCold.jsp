<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<style type="text/css">
.div {   
        height:25px;   
        line-height:25px;   
        overflow:hidden;   
 }
</style>
<html ng-app="airColdModule">
<body ng-controller="airColdController">
	<div class="lay-main lay-has-sub-menu" >
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
					<a id="a{{asset.assetId}}" class="fa fa-2x fa-map-marker moveBtn" ></a>
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
</body>
</html>
<script type="text/javascript" src="<%=pagePath %>/js/airCondition/airCold.js"></script>