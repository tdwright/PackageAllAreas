"use strict";

chrome.app.runtime.onLaunched.addListener(function() {
	
	console.log('starting...');
	
	var startwidth = Math.round(screen.width / 1.25);
	var startheight = Math.round(screen.height / 1.25);
	
	chrome.app.window.create('../html/window.html', {
		'frame': 'none',
		'id': 'main-view',
		'width': startwidth,
		'height': startheight,
		'minWidth': 200,
		'minHeight': 300
	});
});
