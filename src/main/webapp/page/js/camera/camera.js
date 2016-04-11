var camera = camera || {};

camera.changeBuilding = function(id){
	$('#cameraForm').attr('action',commonutil.actionPath+'/camera/show/'+id);
	$('#cameraForm').submit();
};

camera.changeFloor = function(id){
	var buildingId = $('#buildId').val();
	$('#floorId').val(id);
	$('#cameraForm').attr('action',commonutil.actionPath+'/camera/show/'+buildingId);
	$('#cameraForm').submit();
};