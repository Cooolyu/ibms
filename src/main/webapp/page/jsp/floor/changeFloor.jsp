<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<script src="<%=pagePath%>/test/angular.min.js"></script>
<script src="<%=pagePath%>/test/angular-file-upload.min.js"></script>
<div id="modifyFloor" ng-class="{'com-hide': rightPart!='modify'}">
<fieldset id="basicInfo">
<legend>楼层编辑</legend>
	<form  method="post" enctype="multipart/form-data" class="form-inline" name="fileinfo">
		<div class="form-group col-sm-12">
			<label for="modifyName">楼层名:</label>
			<input id="modifyName" name="modifyFloorName" type="text" class="form-control"  ng-model="modifyFloor.name" placeholder="楼栋名不能为空">
			<input name="id" style="display: none" ng-model="modifyFloor.id">
			<input name="buildingId" style="display: none" ng-model="modifyFloor.buildingId">
			<input id="floorName"name="floorName" style="display: none" ng-model="name">			
		</div>
		<div class="form-group col-sm-12" >
			<img id="img1" style="left:float; max-width:100%;max-height:50%; auto " src="<%=pagePath%>/{{modifyFloor.imgUrl}}">
         	<input  style="color: blue" type="file" id="file" name="file" required  />
         	
     	</div>
	</form>
	<div id="output"></div>
	<input type="button" onClick="sendForm()" class="btn btn-primary btn-block" value="确&nbsp;&nbsp;定"/>

	
	
	<script type="text/javascript"> 
	
	function sendForm() {
 		var url = commonutil.actionPath + "/floor/modifyFloor";
		var oOutput = document.getElementById("output");
	    var oData = new FormData(document.forms.namedItem("fileinfo"));
	    var name = document.getElementById("modifyName").value;
	    if(name.length == 0 ){
	    	alert("楼层名不能为空");
	    	return;
	    }
		  var oReq = new XMLHttpRequest();
		  oReq.open("POST", url, true);
		  oReq.onload = function(oEvent) {
			var data = eval("("+oReq.responseText+")");
		    if (data.resultValue == true) {
				pageutil.showTip('修改成功');
				pageutil.hideRightBar();
				location.reload();
		    } else {
		    	alert(data.message);
		    }
		  };
		  oReq.send(oData); 
	}
	
	
		$("#file").change(function(){
			var file = document.getElementById('file');
			var type = ".jpeg.png.gif.jpg";
        	if(type.indexOf(file.value.substr(file.value.lastIndexOf(".")).toLowerCase())==-1){
        		alert("请上传图片文件");
        		file.value = null;
        	}
         	var reader = new FileReader();
         	var f = file.files[0];
        	reader.onload = function (e) {
	      		var data = e.target.result;
	      		//加载图片获取图片真实宽度和高度
	      		var image = new Image();
	      		image.onload=function(){
	          		if(image.width > 1024){
	          			alert("图片宽不能超过1024，请重新上床图片");
	          			file.value = null;
	          			alert(image.width);
	          			var data = compress(image);
	          			window.open(data,"toDataURL() image", "width=600, height=200"); 
	          		}
	      		};
	      		image.src = data;
			}
        	reader.readAsDataURL(f);
		});
		
		function compress(img) {
		    //    用于压缩图片的canvas
		    var canvas = document.createElement("canvas");
		    var ctx = canvas.getContext('2d');
		    var ratio = img.width/1024
			canvas.width = img.width;
			canvas.height = img.height * ratio;
			// 铺底色
	        ctx.fillStyle = "#fff";
	        ctx.fillRect(0, 0, canvas.width, canvas.height);
	        
	        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	        
	      //进行最小压缩
	        var ndata = canvas.toDataURL('image/jpeg', 0.1);
	        return ndata;
		}
		
	
/*		alert(input.value)
			if(input.files){
		  		//读取图片数据
		  		var f = input.files[0];
		  		var reader = new FileReader();
		  		reader.onload = function (e) {
		      		var data = e.target.result;
		      		//加载图片获取图片真实宽度和高度
		      		var image = new Image();
		      		image.onload=function(){
		          		var width = image.width;
		          		var height = image.height;
		          		alert(width+'======'+height+"====="+f.size);
		      		};
		      		image.src= data;
		  		};
		  		reader.readAsDataURL(f);
		  	}else{
		  	var image = new Image(); 
		  	image.onload =function(){
		      var width = image.width;
		      var height = image.height;
		      var fileSize = image.fileSize;
		      alert(width+'－－－－－－－'+height+"－－－－"+fileSize);
		  	}
		  	image.src = input.value;
		  } */
	
	</script>
	
</fieldset>
</div>