	var bindSocket = function() {
    	var url = 'ws://172.16.120.131:8080/omf/websocket/airCold';
    	var ws = null;
    	if ('WebSocket' in window)
    		ws = new WebSocket(url);
    	else if ('MozWebSocket' in window)
    		ws = new MozWebSocket(url);
    	else
    		//alert('当前浏览器不支持websocket，请使用IE10+、Chrome17+、Firefox7+');
    	// 用户未登录或者不支持websocket
    	if (!ws) {
    		return;
    	}

    	// 收到消息
    	ws.onmessage = function(evt) {
    		if (evt.data) {
    			alert(evt.data)
//    			ws.close();
    		}
    	};
    };
    
    bindSocket();