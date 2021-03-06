<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="app">
<head>
<%@ include file = "/page/jsp/common/commonvariable.jsp" %>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>文件上传</title>
    <meta charset="utf-8" />
    <script src="<%=pagePath%>/test/angular.min.js"></script>
    <script src="<%=pagePath%>/test/ng-file-upload.min.js"></script>
    <script src="<%=pagePath%>/test/ng-file-upload-shim.min.js"></script>
    <script>
		var test;
        var app = angular.module('app', ['ngFileUpload']);
        app.controller('FileController', function ($scope, Upload) {
            $scope.uploadImg = '';
            //提交
            $scope.submit = function () {
                $scope.upload($scope.file);
            };
            $scope.upload = function (file) {
                $scope.fileInfo = file;
                Upload.upload({
                    //服务端接收
                    url: 'Ashx/UploadFile.ashx',
                    //上传的同时带的参数
                    data: { 'username': $scope.username },
                    file: file
                }).progress(function (evt) {
                    //进度条
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progess:' + progressPercentage + '%' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    //上传成功
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                    $scope.uploadImg = data;
                }).error(function (data, status, headers, config) {
                    //上传失败
                    console.log('error status: ' + status);
                });
            };
        });
    </script>
</head>
<body>
    <form ng-controller="FileController">
        <img src="{{uploadImg}}"/> 
当前上传用户:<input type="text" placeholder="请输入您的名称" name="name" ng-model="username"/><div class="button" ngf-select ng-model="file" name="file" ngf-pattern="'image/*" accept="image/*" ngf-max-size="20MB" ngf-min-height="100">Select</div><button type="submit" ng-click="submit()">submit</button> {{fileInfo.name}}<br /> {{fileInfo.size}} 
</form></body>
</html>