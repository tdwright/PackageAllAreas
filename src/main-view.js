"use strict";

$(document).ready(function() {
    loaded();
});

var loaded = function() {
    var webView = $('#main-webview')
    console.log('trying? ' + webView + ' ' + webView.get(0));
    
	addTitlebar('top-titlebar','../img/icon.png','Google Play: Package All Areas');
	
    webView.attr('src', 'https://play.google.com/music/listen');
    webView.on('loadstop', function() {
		webView.get(0).executeScript({file: '/src/injectme.js'});
    });
}

var injectCSS = function(webView, cssURL) {
    var url = chrome.runtime.getURL(cssURL);
    $.get(url, function(data) {
        var cssToInject = data;
        var js = 'var registered';
        webView.executeScript({ code: js });
        js = 'var cssToInject = ' + JSON.stringify(cssToInject) + ';';
        webView.executeScript({ code: js });
        webView.executeScript({ code: '(' + myCssHack + ')()' });
    });
}