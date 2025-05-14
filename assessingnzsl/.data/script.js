function nextPage() {

	window.location.href = document.querySelector('link[rel="next"]').href;

}

function nextPageConfirm() {
	if(confirm("Click OK to confirm the end of this test.")) {
		nextPage();
	}
}

function prevPage() {

	window.location.href = document.querySelector('link[rel="prev"]').href;

}

document.onkeydown = function(event) {
	
	// <enter>, <page dwown>, <right arrow>, <down arrow>, N
	if(event.keyCode == 13 /*|| event.keyCode == 32*/ || event.keyCode == 34 ||
		event.keyCode == 39 || event.keyCode == 40 || event.keyCode == 78) {

			if(document.getElementsByTagName("body")[0].className == "end") {
				
				nextPageConfirm();
				
			} else {
				
				nextPage();
				
			}

	}

	// <backspace>, <page up>, <left arrow>, <down arrow>, P
	if(event.keyCode == 8 || event.keyCode == 33 || event.keyCode == 37 ||
		event.keyCode == 38 || event.keyCode == 80) {

		prevPage();
	}
	
	// <space>
	if(event.keyCode === 32) {
		
		video = document.getElementsByTagName("video")[0];
		video.paused ? video.play() : video.pause();
		
	}

};