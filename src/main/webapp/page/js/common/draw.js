function line(startX, startY, endX, endY, container) {
	if (startX == endX) {
		if (startY > endY) {
			var tempY = startY;
			startY = endY;
			endY = tempY;
		}
		for (var k = startY; k < endY; k++) {
			createPoint(container, startX, k);
		}
	}
	// y = ax + b
	var a = (startY - endY) / (startX - endX);
	var b = startY - ((startY - endY) / (startX - endX)) * startX;
	if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
		if (startX > endX) {
			var tempX = endX;
			endX = startX;
			startX = tempX;
		}
		var left = container.style.left;
		var top = container.style.top;
		for (var i = startX; i <= endX; i++) {
			createPoint(container, i, a * i + b);
		}
	} else {
		if (startY > endY) {
			var tempY = startY;
			startY = endY;
			endY = tempY;
		}
		for (var j = startY; j <= endY; j++) {
			createPoint(container, (j - b) / a, j);
		}
	}
	
}

function createPoint(container, x, y) {
	var node = document.createElement('div');
	node.className = 'line';
	node.style.marginTop = y;
	node.style.marginLeft = x;
	container.appendChild(node);
}