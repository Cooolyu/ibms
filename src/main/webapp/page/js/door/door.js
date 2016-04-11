var door = door || {};

door.changeBuilding = function(id){
	$('#doorForm').attr('action',commonutil.actionPath+'/door/show/'+id);
	$('#doorForm').submit();
};

door.changeFloor = function(id){
	var buildingId = $('#buildId').val();
	$('#floorId').val(id);
	$('#doorForm').attr('action',commonutil.actionPath+'/door/show/'+buildingId);
	$('#doorForm').submit();
};