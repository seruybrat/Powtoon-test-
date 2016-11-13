
// HTML VIDEO

function playPause(btn,vid){
	var vid = document.getElementById(vid);
	if(vid.paused){
		vid.play();
		btn.classList.add("active");
	} else {
		vid.pause();
		btn.classList.remove("active");
	}
}

// GO TO

function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function doScrolling(element, duration) {
	var startingY = window.pageYOffset;
 	var elementY = getElementY(element);
	var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
	var diff = targetY - startingY;
	var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 };
	var start;

	if (!diff) return

	window.requestAnimationFrame(function step(timestamp) {
		if (!start) start = timestamp

		var time = timestamp - start;
		var percent = Math.min(time / duration, 1);
		percent = easing(percent);

		window.scrollTo(0, startingY + diff * percent);

		if (time < duration) {
			window.requestAnimationFrame(step);
		}
	})
}

document.getElementById('goTo').addEventListener('click', doScrolling.bind(null, '#goThis', 1000));