<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div class="text-center" id="pagination">
	<span ng-class="{hide:pagination.pages>0}">没有符合条件的内容</span>
	<ul class="pagination" ng-class="{hide:pagination.pages<1}">
		<li ng-class="{disabled: pagination.currentPage==1}"><a href="javascript:void(0);" ng-click="lastPage()">&laquo;</a></li>
		<li ng-class="{active: pagination.currentPage==pageNum}" ng-repeat="pageNum in pagination.pageNums"><a href="javascript:void(0);" ng-click="goPage(pageNum)">{{pageNum}}</a></li>
		<li ng-class="{disabled: pagination.currentPage==pagination.pages}"><a href="javascript:void(0);" ng-click="nextPage()">&raquo;</a></li>
	</ul>

</div>
