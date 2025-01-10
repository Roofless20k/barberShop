// When the user scrolls down 110px from the top of the document, show the button
window.onscroll = function () {
	showHideUpArrow();
};

function showHideUpArrow() {
	// Get the button:
	let mybutton = document.querySelector("#upButton");

	if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

/* ################################################################
   ##################### MOBILE HAMBURGER  ########################
   ################################################################ */

// click lines to toggle menu

const MENU = document.querySelector("#hamburger"); //nav burger btn

const MOBILE_NAVIGATION = document.querySelector("#hamburger-menu"); // mobile navigation

//on click display mobile nav
MENU.addEventListener("click", () => {
	MOBILE_NAVIGATION.classList.toggle("visible");

	//if displayed: rotate...
	if (MOBILE_NAVIGATION.classList.contains("visible") === false) {
		const flipper = document.querySelector("#flipper"); // burger btn
		flipper.style.rotate = "0deg";
		flipper.style.transition = "rotate 200ms ease-in-out";
	} else {
		//else color white and 0 rotate
		flipper.style.rotate = "90deg";
		flipper.style.transition = "rotate 200ms ease-in-out";
	}
});

//resets mobile nav to default and hide the navigation on each resize
window.onresize = () => {
	MOBILE_NAVIGATION.classList.remove("visible");
	flipper.style.rotate = "0deg";

    let hamburger = document.getElementById("hamburger");
    hamburger.setAttribute("aria-expanded", "false");
};

// progressive enhancement
document.body.classList.toggle("js-enabled");

document.addEventListener("DOMContentLoaded", function (event) {
	let hamburger = document.getElementById("hamburger");
	// If JS is enabled, it will un-expand the hamburger
	hamburger.setAttribute("aria-expanded", "false");
	hamburger.onclick = function () {
		if (this.getAttribute("aria-expanded") == "false") {
			this.setAttribute("aria-expanded", "true");
		} else {
			this.setAttribute("aria-expanded", "false");
		}
	};
});
