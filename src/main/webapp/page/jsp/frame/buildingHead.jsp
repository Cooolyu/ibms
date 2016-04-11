<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
	<div class="row" ng-app="builingModule" ng-controller="buildingController">
			<div class="col-xs-1 col-md-1">
				<div class="dropdown">
				<input name="buildId" ng-model="build.id" value="${param.building.id }">
					<button class="btn btn-default dropdown-toggle" type="button"
						id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="true">
						{{build.name }} <span class="caret"></span>
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
						<li ng-repeat="buildItem in buildingList">
							<a href="javascript:void(0);" ng-click="findFloors({{buildItem.id}})">{{buildItem.name }}</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-xs-11 col-md-11">
				<div class="btn-group" role="group" aria-label="...">
					<button ng-repeat="floorItem in floors" type="button" class="btn btn-default active" onclick="alarm.changeFloor({{floorItem.id}});">{{floorItem.name }}</button>
					
					<c:forEach items="${floorList }" var = "floorItem">
						<button type="button" class="btn btn-default <c:if test="${floor.id == floorItem.id }">active</c:if>" onclick="alarm.changeFloor(${floorItem.id});">${floorItem.name }</button>
					</c:forEach>
				</div>
			</div>
			</div>

<script type="text/javascript" src="<%=pagePath%>/js/frame/buildingController.js"></script>