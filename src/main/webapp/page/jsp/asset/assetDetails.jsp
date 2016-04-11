<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<style type="text/css">
.record-shape-others{
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  background-color:#428bca;
  border-bottom: 1px solid transparent;
  border-radius: 4px;
  text-align: center; 
}

.record-shape-myselfe{
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  background-color:#ADD8E6;
  border-bottom: 1px solid transparent;
  border-radius: 4px;
  text-align: center; 
}
.div {   
        height:25px;   
        line-height:25px;   
        overflow:hidden;   
 } 
</style>
<div ng-class="{'com-hide': rightPart!='details'}">

<form class="form-horizontal" role="form">

<div id="assetsDetail">
<div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-toggle="collapse" href="#baseInfo" style="font: 11pt Microsoft YaHei;">基本信息</a>
      </h4>
    </div>
    <div id="baseInfo" class="panel-collapse collapse in">
      <div class="panel-body">
			<div class="form-group div">
				<label class="col-sm-2 control-label">编号</label>
				 <div class="col-sm-4 div">
				 	<p class="form-control-static" >{{assetDetails.serialNumber}}</p>
				</div>
				<label class="col-sm-2 control-label div">名称</label>
				 <div class="col-sm-4">
				 	<p class="form-control-static">{{assetDetails.name}}</p>
				</div>
			</div>
			
			<div class="form-group div">
				<label class="col-sm-2 control-label">类别</label>
				 <div class="col-sm-4 div">
				 	<p class="form-control-static">{{assetDetails.cateName}}</p>
				</div>
				<label class="col-sm-2 control-label">品牌</label>
				 <div class="col-sm-4 div">
				 	<p class="form-control-static">{{assetDetails.brandName | isNone}}</p>
				</div>
			</div>
			<div class="form-group div">
				<label class="col-sm-2 control-label">型号</label>
				 <div class="col-sm-4 div">
				 	<p class="form-control-static">{{assetDetails.modelName | isNone}}</p>
				</div>
				
				<label class="col-sm-2 control-label">位置</label>
				 <div class="col-sm-4 div">
				 	<p class="form-control-static">{{assetDetails.position | isNone}}</p>
				</div>
			</div>
			<div class="form-group div">
				<label class="col-sm-2 control-label">数量</label>
				 <div class="col-sm-4">
				 	<p class="form-control-static">{{assetDetails.number}}</p>
				</div>
				<label class="col-sm-2 control-label">单位</label>
				 <div class="col-sm-4 div">
				 	<p class="form-control-static">
						{{assetDetails.unit }}
					</p>
				</div>
			</div>
			<div class="form-group div">
				<label class="col-sm-2 control-label">状态</label>
				 <div class="col-sm-4 div">
				 	<p class="form-control-static">
				 		{{assetDetails.status | status}}
					</p>
				</div>
				<label class="col-sm-2 control-label">生命结束日</label>
				 <div class="col-sm-4 div">
				 	<p class="form-control-static">{{assetDetails.lifeEndDate | isNone |date:'yyyy-MM-dd'}}</p>
				</div>
			</div>
			<div class="form-group div">
				<label class="col-sm-2 control-label">备注</label>
				 <div class="col-sm-10 div">
				 	<p class="form-control-static">{{assetDetails.memo}}</p>
				</div>
			</div>	
		</div>
	</div>
</div>




</div>
</form>
</div>