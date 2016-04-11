var alarm = alarm || {};

alarm.ws = null;

$(function() {
	alarm.bindSocket();
});

alarm.changeBuilding = function(id){
	$('#alarmForm').attr('action',commonutil.actionPath+'/alarm/show/'+id);
	$('#alarmForm').submit();
};

alarm.changeFloor = function(id){
	var buildingId = $('#buildId').val();
	$('#floorId').val(id);
	$('#alarmForm').attr('action',commonutil.actionPath+'/alarm/show/'+buildingId);
	$('#alarmForm').submit();
};

alarm.bufang = function() {
	alarm.showText("布防中，请等待...");
};

alarm.chefang = function() {
	alarm.showText("撤防中，请等待...");
};


showText = function(text) {
	var tipId = 'tip';
	$('#'+tipId).empty();
	$('#'+tipId).append(text);
	
	var allWidth = document.body.clientWidth;
	var allHeight = window.innerHeight || document.body.clientHeight;
	var tipWidth = $('#'+tipId).width();
	var tipHeight = $('#'+tipId).height();
	
	var scrollTop = document.body.scrollTop > document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;

	$('#'+tipId).css('top', Math.abs((allHeight-tipHeight)/2+scrollTop));
	$('#'+tipId).css('left', Math.abs((allWidth-tipWidth)/2));

};

alarm.bindSocket = function() {
	var userKey = commonutil.getUserKey();
	alarm.ws = commonutil.getWebSocket('websocket/'+userKey);
	// 用户未登录或者不支持websocket
	if (!alarm.ws) {
		return;
	}

	// 收到消息
	alarm.ws.onmessage = function(evt) {
		if (evt.data) {
			var result = JSON.parse(evt.data);
			if(!result) {
				pageutil.showTip("布防失败");
			}else{
				$('#alarmForm').attr('action',commonutil.actionPath+'/alarm/show/'+id);
				$('#alarmForm').submit();
			}
			
		}
	};
};
