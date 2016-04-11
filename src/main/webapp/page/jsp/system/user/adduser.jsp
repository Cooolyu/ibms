<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div ng-class="{'com-hide': rightPart!='add'}">
<form class="form-horizontal" role="form" id="userAddForm" name="userAddForm" method="post">
	<div class="form-group col-sm-12">
		<label for="modifyUserName">用户名:</label>
		<input type="text" class="form-control" id="addUserName" name="username" ng-model="addUser.username" placeholder="最大长度16位"/>
	</div>

		<div class="form-group col-sm-12">
		<label>角色:</label>
		<select id="modifyRole" class="form-control" name="roleId" ng-model="addUser.roleId">
			<option value="-1">--请选择--</option>
			<option ng-repeat="role in roles" value="{{role.id}}">{{role.roleName}}</option>
		</select>
	</div>
	<div class="form-group col-sm-12">
		<label for="newPass">密码:</label>
		<!--  
		<input type="password" class="form-control" id="newPass" name="password" placeholder="6-16位半角英数字下划线" required ng-minlength="6" ng-maxlength="16" ng-model="addUser.password"/>
		-->
		<input type="password" class="form-control" id="newPass" name="password" placeholder="6-16位半角英数字下划线" ng-model="addUser.password"/>
	</div>
	<div class="form-group col-sm-12">
		<label for="newPass">确认密码:</label>
		<!--  
		<input type="password" class="form-control" id="newPassAgain" placeholder="6-16位半角英数字下划线" required ng-minlength="6" ng-maxlength="16" ng-model="addUser.passwordAgain"/>
		-->
		<input type="password" class="form-control" id="newPassAgain" placeholder="6-16位半角英数字下划线" ng-model="addUser.passwordAgain"/>
	</div>
	<div class="form-group col-sm-12">
		<input type="button" ng-click="doAdd(userAddForm.$valid)" class="btn btn-primary btn-block" value="确&nbsp;&nbsp;定"/>
	</div>
</form>
</div>