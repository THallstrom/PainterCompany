document.addEventListener("scroll", function () {
	let sections = document.querySelectorAll(".parallax-section");

	sections.forEach(function (section) {
		let scrollPosition = window.scrollY;
		let parallaxBackground = section.querySelector(".parallax-background");
		let speed = parallaxBackground.getAttribute("data-speed");
		parallaxBackground.style.transform =
			"translateY(" + scrollPosition * speed + "px)";
	});
});
