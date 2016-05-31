<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ include file="/page/jsp/common/logincommonvariable.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="<%=logincommonLib%>"/>

<style type="text/css">
html{height:100%;}
body{height:100%;background-color: black;}
.login-wrap{height:100%;background:url(<%=pagePath%>/css/image/login-wrap-bg.jpg) no-repeat top center;}
.login-header{border-bottom:1px solid #aaa;font-size:24pt;color:#ddd;padding:20px;}
.login-main{position:relative;top:22%;margin-left: 35% auto 0;}
.lay-footer{margin-top:-30px;height:30px;background-color:black;position: relative;}
.touMingDiv{filter:Alpha(opacity=60);opacity:0.8;}
</style>
<title>登录</title>
</head>
<body onload="login.loadLogin();">
	<div class="login-wrap">
		<div class="login-header">
			智能设施监视系统
		</div>
		<div class="login-main">
			 <div class="panel panel-default col-xs-4 col-xs-offset-4">
				<div class="panel-heading">
					<div class="panel-title">用户登录</div>
				</div>
				<div class="panel-body">
				<div class="row" style="display:none;" id="errorRow">
					<div class="alert alert-danger col-xs-10 col-xs-offset-1" id="errorMsg"></div>
				</div>
					<form class="form-horizontal" role="form" method="post" id="loginForm" name="loginForm">
						<div class="form-group">
							<label for="loginName" class="col-xs-3 control-label">用&nbsp;户&nbsp;名:</label>
							<div class="col-xs-8">
								<input type="text" class="form-control loginInput" id="userName" name="userName" value="" placeholder="请输入用户名"/>
							</div>
						</div>
						<div class="form-group">
							<label for="loginPassword" class="col-xs-3 control-label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
							<div class="col-xs-8">
								<input type="password" class="form-control loginInput" name="password" id="password" value="" placeholder="请输入密码"/>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-offset-3 col-xs-8">
								<button type="button" onclick="login.dologin();" class="btn btn-primary btn-block">登&nbsp;&nbsp;录</button>
							</div>
						</div>
					</form>
					
				</div> 
				
			</div>
		</div>

	</div>
			<div class="touMingDiv">
		<jsp:include page="<%=widgetFooter%>"/>
		</div>
</body>
<script type="text/javascript" src="<%=pagePath%>/thirdparty/sha/sha1.js"></script>
<script type="text/javascript" src="<%=pagePath%>/js/login/login.js"></script>
</html>