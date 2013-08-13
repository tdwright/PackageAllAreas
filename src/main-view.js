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
        // do something maybe?
    });
}
