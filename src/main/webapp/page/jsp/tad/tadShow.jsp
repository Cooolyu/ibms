<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="airColdModule">
<head>
	<%@ include file = "/page/jsp/common/commonvariable.jsp" %>
	<jsp:include page="<%=commonLib%>"/>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>暖通空调</title>
	<style type="text/css">
.div {   
        height:25px;   
        line-height:25px;   
        overflow:hidden;   
 }
</style>
</head>
<body ng-controller="airColdController">

	<input id="sysModuleId" style="hidden" value="${sysModuleId}" />
	<jsp:include page="<%=widgetHeader%>"/>
	
	<div class="lay-wrap">
		<div class="lay-left col-xs-1 ">

				<jsp:include page="../airCondition/airSubMenu.jsp">
					<jsp:param value="tadShow" name="main"/>
				</jsp:include>
				
		</div>
	</div>
 
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
							<button ng-click="chooseFloor(floor)" ng-repeat="floor in floors" type="button" class="btn btn-default">{{floor.name}}</button>
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
	       					 <a data-toggle="collapse" data-toggle="collapse"  style="font: 11pt Microsoft YaHei;">设备待排布列表</a>
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
		
				<div id="panel2" class="panel panel-default" >
					<div id="head2" class="panel-heading" >
     				 	<h4 class="panel-title" style="text-align: center;">
       						<a data-toggle="collapse" data-toggle="collapse"  style="font: 11pt Microsoft YaHei;">{{airColdsName}}</a>
      					</h4>
    					</div>
					<div id="body2" class="panel-body">
						<div ng-repeat="airCold in airColds" class="form-inline">
						<div class="row">
							<label class=" control-label col-sm-4">{{airCold.name}}</label>
				 			<p class="form-control-static col-sm-2" >{{airCold.value}}</p>
							<label class=" control-label col-sm-4">{{airCold.name2}}</label>
				 			<p class="form-control-static col-sm-2">{{airCold.value2}}</p>
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
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">{{iconList[0].name}}</label>
        			<label id={{iconList[0].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[0].company}}</label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">{{iconList[1].name}}</label>
        			<label id={{iconList[1].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[1].company}}</label>
        			<label style="font: 12pt Microsoft YaHei;width: 10%;">{{iconList[2].name}}</label>
        			<label id={{iconList[2].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[2].company}}</label>
        		</div>
        		<div style="margin-left: 10%;margin-top: 10px;">
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">{{iconList[3].name}}</label>
        			<label id={{iconList[3].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[3].company}}</label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">{{iconList[4].name}}</label>
        			<label id={{iconList[4].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[4].company}}</label>
        			<label style="font: 12pt Microsoft YaHei;width: 10%;">{{iconList[5].name}}</label>
        			<label id={{iconList[5].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[5].company}}</label>
        		</div>
        		<div style="margin-left: 10%;margin-top: 10px;">
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">{{iconList[6].name}}</label>
        			<label id={{iconList[6].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[6].company}}</label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">{{iconList[7].name}}</label>
        			<label id={{iconList[7].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[7].company}}</label>
        			<label style="font: 12pt Microsoft YaHei;width: 10%;">{{iconList[8].name}}</label>
        			<label id={{iconList[8].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[8].company}}</label>
        		</div>
        		<div style="margin-left: 10%;margin-top: 10px;">
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">{{iconList[9].name}}</label>
        			<label id={{iconList[9].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[9].company}}</label>
        			<label style="font: 12pt Microsoft YaHei;width: 16%;">{{iconList[10].name}}</label>
        			<label id={{iconList[10].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[10].company}}</label>
        			<label style="font: 12pt Microsoft YaHei;width: 10%;">{{iconList[11].name}}</label>
        			<label id={{iconList[11].code}} style="font: 11pt Microsoft YaHei;width: 3%;"></label>
        			<label style="font: 11pt Microsoft YaHei;width: 13%;">{{iconList[11].company}}</label>
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
<script type="text/javascript" src="<%=pagePath %>/js/airCondition/airCondition.js"></script>