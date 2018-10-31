function startup() {

	if (localStorage.getItem("visited") != "true") {
		alert("For best results, it is not recomended to size the width of this page to less than 1200 pixels")
		localStorage.setItem("visited", "true");
	}

	/*
	var pathname = window.location.pathname;
	//alert(pathname)

	var tf = (pathname.endsWith("index.html"))
	if (tf == true) {
		document.getElementById("TOC0").style.fontSize="22px";
		document.getElementById("TOC0").style.fontWeight="bold";
	}

	var tf = (pathname.endsWith("timeline.html"))
	if (tf == true) {
		document.getElementById("TOC1").style.fontSize="22px";
		document.getElementById("TOC1").style.fontWeight="bold";
	}

	var tf = (pathname.endsWith("conclusion.html"))
	if (tf == true) {
		document.getElementById("TOC2").style.fontSize="22px";
		document.getElementById("TOC2").style.fontWeight="bold";
	}

	var tf = (pathname.endsWith("sources.html"))
	if (tf == true) {
		document.getElementById("TOC3").style.fontSize="22px";
		document.getElementById("TOC3").style.fontWeight="bold";
	}
	*/

}

function TOC0() {
	document.getElementById("TOC0").style.fontSize="22px";
	document.getElementById("TOC0").style.fontWeight="bold";
	document.getElementById("TOC1").style.fontSize="18px";
	document.getElementById("TOC1").style.fontWeight="normal";
	document.getElementById("TOC2").style.fontSize="18px";
	document.getElementById("TOC2").style.fontWeight="normal";
	document.getElementById("TOC3").style.fontSize="18px";
	document.getElementById("TOC3").style.fontWeight="normal";

}

function TOC1() {
	document.getElementById("TOC0").style.fontSize="18px";
	document.getElementById("TOC0").style.fontWeight="normal";
	document.getElementById("TOC1").style.fontSize="22px";
	document.getElementById("TOC1").style.fontWeight="bold";
	document.getElementById("TOC2").style.fontSize="18px";
	document.getElementById("TOC2").style.fontWeight="normal";
	document.getElementById("TOC3").style.fontSize="18px";
	document.getElementById("TOC3").style.fontWeight="normal";

}

function TOC2() {
	document.getElementById("TOC0").style.fontSize="18px";
	document.getElementById("TOC0").style.fontWeight="normal";
	document.getElementById("TOC1").style.fontSize="18px";
	document.getElementById("TOC1").style.fontWeight="normal";
	document.getElementById("TOC2").style.fontSize="22px";
	document.getElementById("TOC2").style.fontWeight="bold";
	document.getElementById("TOC3").style.fontSize="18px";
	document.getElementById("TOC3").style.fontWeight="normal";

}

function TOC3() {
	document.getElementById("TOC0").style.fontSize="18px";
	document.getElementById("TOC0").style.fontWeight="normal";
	document.getElementById("TOC1").style.fontSize="18px";
	document.getElementById("TOC1").style.fontWeight="normal";
	document.getElementById("TOC2").style.fontSize="18px";
	document.getElementById("TOC2").style.fontWeight="normal";
	document.getElementById("TOC3").style.fontSize="22px";
	document.getElementById("TOC3").style.fontWeight="bold";

}
