<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div id="modifyDiv" ng-class="{'com-hide': rightPart!='modify'}">
<fieldset id="basicInfo">
<legend>基本信息修改</legend>
<form class="form-horizontal" role="form" id="userModifyForm" method="post">
	<div class="form-group col-sm-12">
		<label for="modifyUserName">用户名:</label>
		<input type="text" class="form-control" id="modifyUserName" name="username" ng-model="modUser.username" value="{{modUser.username}}" placeholder="最大长度16位"/>
	</div>
	
	<div class="form-group col-sm-12">
		<label>角色:</label>
		<select class="form-control" ng-model="modUser.roleId">
			<option ng-repeat="role in roles" value="{{role.id}}">{{role.roleName}}</option>
		</select>
	</div>
	<div class="form-group col-sm-12">
		<input type="button" ng-click="doModify(modUser.username,modUser.phone, modUser.userIndex)" class="btn btn-primary btn-block" value="确&nbsp;&nbsp;定"/>
	</div>
</form>
</fieldset>

<fieldset style="margin-top: 40px">
<legend>重设密码</legend>
<form class="form-horizontal" class="form-inline" role="form" id="resetPassForm" method="post">
	<div class="form-group col-sm-12">
		<label for="newPass">新密码:</label>
		<input type="password" class="form-control" id="newPass" ng-model="modUser.password" placeholder="6-16位半角英数字下划线"/>
	</div>
	<div class="form-group col-sm-12">
		<label for="newPass">确认密码:</label>
		<input type="password" class="form-control" id="newPassAgain" ng-model="modUser.passwordAgain" placeholder="6-16位半角英数字下划线"/>
	</div>
	<div class="form-group col-sm-12">
		<input type="button" ng-click="resetPassword(modUser.userIndex)" class="btn btn-primary btn-block" value="确&nbsp;&nbsp;定"/>
	</div>
</form>
</fieldset>
</div>