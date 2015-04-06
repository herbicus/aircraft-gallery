console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}

	// var menuAnimation = new TimelineMax({paused: true});
	// menuAnimation.to(".mobile-nav-menu", 0.75, { autoAlpha: 1, left: 0, ease: Back.easeInOut});

	// // MOBILE ICON - HAMBURGER
	// $(".mobile-nav-btn").on("click", function(){
	// 	$(this).toggleClass("open");

 //  		if ($(this).hasClass("played")) {
 //  			menuAnimation.reverse();	
 //  		} else {
 //  			menuAnimation.play();
 //  		}	
 //  		$(this).toggleClass("played");
	// });

	//main container bg section parallax background
	var backgroundParallax = new TimelineMax({paused: true});
				
	backgroundParallax.to(".l-main-container", 2, {css:{"background-position-y": 300}});

	window.addEventListener("scroll", function(){
		
		var parallaxTiming = document.body.scrollTop / 5000;

		backgroundParallax.seek(parallaxTiming);
	});

	// init
	var init = function() {
		
	};

	shared.init = init;

	return shared;

}());

$(document).ready(function() {
	cornerstoneAPI.init();
});
