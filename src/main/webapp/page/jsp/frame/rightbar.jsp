<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<div class="lay-right-bar" id="rightBar">
	<div class="panel-default">
		<div class="panel-heading clearfix">
		<div class="form-inline" >
			<div class="form-group col-xs-8">
					<div class="form-group">
						<a id="goback" style="display:none;" href='javascript:void(0)' class='com-btn-icon glyphicon glyphicon-arrow-left'></a>
					</div>
					<div class="form-group">
						<span class="panel-title" id="rightBarTitle"></span>
					</div>
					<div id="operateCoin" class="form-group"></div>
			</div>
			<div class="form-group col-xs-4 text-right">
				<a href="javascript:void(0)" id="rightBarEnlarge" onclick="pageutil.enlargeRightBar()">宽版</a>
				<a href="javascript:void(0)" id="rightBarShrink" onclick="pageutil.shrinkRightBar()" style="display:none;">窄版</a>
				<a href="javascript:void(0)" onclick="pageutil.hideRightBar()" style="margin:3px 0 0 10px;"
					class="h5 com-btn-icon glyphicon glyphicon-remove-sign"></a>
			</div>
		</div>
		</div>
		<div class="lay-right-bar-body panel-body" id="rightBarBody"></div>
	</div>
</div>