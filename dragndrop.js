/**
 * dragndrop.js
 * author: Sergey Sedyshev
 */

var dragndrop = function( elem, limitByParent ) {
	elem.addEventListener("mousedown", onMouseDown);
	elem.addEventListener("change", onChange);
	
	var startX;
	var startY;
	
	var startMouseX;
	var startMouseY;
	
	var parent;
	var limited;
	
	function refresh() {
		parent = elem.parentNode;
		limited = limitByParent;
		if (limited === undefined && parent) {
			limited = parent.classList.contains(dragndrop.dragndropLimiterClass);
		}
	}
	
	function setPos( x, y ) {
		if (limited) {
			var xMax = parent.offsetWidth - elem.offsetWidth;
			var yMax = parent.offsetHeight - elem.offsetHeight;
			
			x = (x > xMax) ? xMax : ((x < 0) ? 0 : x);
			y = (y > yMax) ? yMax : ((y < 0) ? 0 : y);
		}
		
		elem.style.left = x + "px";
		elem.style.top = y + "px";
	}
	
	function onMouseDown( e ) {
		e.stopPropagation();
		
		refresh();
		
		startX = elem.offsetLeft;
		startY = elem.offsetTop;
		
		startMouseX = e.screenX;
		startMouseY = e.screenY;
		
		document.addEventListener("mouseup", onMouseUp);
		document.addEventListener("mousemove", onMouseMove);
	}
	
	function onMouseUp( e ) {
		onMouseMove(e);
		document.removeEventListener("mouseup", onMouseUp);
		document.removeEventListener("mousemove", onMouseMove);
	}
	
	function onMouseMove( e ) {
		var x = startX + e.screenX - startMouseX;
		var y = startY + e.screenY - startMouseY;
		setPos(x, y);
	}
	
	function onChange( e ) {
		refresh();
		setPos(elem.offsetLeft, elem.offsetTop);
	}
}


dragndrop.dragndropClass = "dragndrop";
dragndrop.dragndropLimiterClass = "dragndrop-limiter";


dragndrop.init = function() {
	var arr = document.querySelectorAll("." + dragndrop.dragndropClass);
	var i = -1;
	var l = arr.length;
	while (++i < l) {
		dragndrop(arr[i]);
	}
}

dragndrop.initOnDocumentReady = function() {
	document.addEventListener("DOMContentLoaded", dragndrop.init);
}

