function startup() {

	if (sessionStorage.getItem("emailveri") != "true") {
		window.location="./index.html";
	}


	if (sessionStorage.getItem("visited") != "true") {
		alert("For best results, it is not recomended to size the width of this page to less than 1200 pixels")
		sessionStorage.setItem("visited", "true");
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

function emailsub() {
	console.log('Inside emailsub');
	sessionStorage.clear()
	var cookiechecked = document.getElementById("cookieaccept").checked;
	if (cookiechecked == true) {
		var emailend = document.getElementById("emailform").value;
		if (emailend.endsWith("@ucvts.org") || emailend.endsWith("@ucvts.tec.nj.us")) {
			sessionStorage.setItem("emailveri", "true");
			console.log("email valid");
			console.log(window.location.href);
			window.location = "./home.html";
		}
		else {
			alert("This user is not allowed to view this site");
		}
	}
	else {
		alert("Please check the 'Accept Policy' checkbox before entering this site");
	}


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
	for(i=0; i<document.querySelectorAll(".pages").length; i++) {
		document.getElementsByClassName("pages")[i].style.display="none";
	}
	document.getElementById("page0").style.display="initial";

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
	for(i=0; i<document.querySelectorAll(".pages").length; i++) {
		document.getElementsByClassName("pages")[i].style.display="none";
	}
	document.getElementById("page1").style.display="initial";

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
	for(i=0; i<document.querySelectorAll(".pages").length; i++) {
		document.getElementsByClassName("pages")[i].style.display="none";
	}
	document.getElementById("page2").style.display="initial";

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
	for(i=0; i<document.querySelectorAll(".pages").length; i++) {
		document.getElementsByClassName("pages")[i].style.display="none";
	}
	document.getElementById("page3").style.display="initial";

}
