function startup() {

	let tab = getParameterByName("tab");
	if(tab == 'toc1') {
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
	else if(tab == 'toc0') {
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
	else if(tab == 'toc2') {
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
	else if(tab == 'toc3') {
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





	// if (sessionStorage.getItem("emailveri") != "true") {
	// 	window.location="./index.html";
	// }


	// if (sessionStorage.getItem("visited") != "true") {
	// 	alert("For best results, it is not recomended to size the width of this page to less than 1200 pixels")
	// 	sessionStorage.setItem("visited", "true");
	// }

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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function moveWindow() {
	window.location = './home.html';
}

function emailsub() {
	// console.log('Inside emailsub');
	// sessionStorage.clear()
	// var cookiechecked = document.getElementById("cookieaccept").checked;
	// if (cookiechecked == true) {
	// 	var emailend = document.getElementById("emailform").value;
	// 	if (emailend.endsWith("@ucvts.org") || emailend.endsWith("@ucvts.tec.nj.us")) {
	// 		sessionStorage.setItem("emailveri", "true");
	// 		console.log("email valid");
	// 		console.log(window.location.href);
	// 		window.location = "./home.html";
	// 	}
	// 	else {
	// 		alert("This user is not allowed to view this site");
	// 	}
	// }
	// else {
	// 	alert("Please check the 'Accept Policy' checkbox before entering this site");
	// }


}


function TOCchange(type) {

	if(window.location.href.includes("home.html") != true || window.location.href.includes("index.html") != true) {
		if(window.location.href.includes("EnglishFinal/subpages") == true) {
			let tempstr = window.location.href;
			let temparr = tempstr.split("subpages");
			tempstr = temparr[0] + "home.html?tab="+type;
			console.log(tempstr);
			window.location.href = tempstr;
			return;
		}
	}

	if(type == 'toc0') {
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



	else if(type == 'toc1') {
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


	else if(type == 'toc2') {
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


	else if(type == 'toc3') {
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

}


function goTo(page) {
	if(page == 'precolonial') {
		window.location = './subpages/pre-colonial.html'
	}
}
