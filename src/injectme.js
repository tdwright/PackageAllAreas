console.log('Injected from Package All Areas');

var tryHide = function() {
	if(document.getElementById('oneGoogleWrapper')!=null) {
		document.getElementById('oneGoogleWrapper').style.display = 'none';
		document.getElementById('doc').style.height = (document.body.offsetHeight-32) + "px";
	} else {
		setTimeout(tryHide, 200)
	}
}

setTimeout(tryHide, 500);