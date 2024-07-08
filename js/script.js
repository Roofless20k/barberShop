// Get the button:
let mybutton = document.querySelector("#upButton");

// When the user scrolls down 110px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
