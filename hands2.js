function displayData() {
	var browserType = navigator.userAgent;
	var appVersion = navigator.appVersion;
	var cookiesInfo = navigator.cookieEnabled;
	var pixelDep = screen.pixelDepth;
	var screenHeight = screen.availHeight;
	var screenWidth = screen.availWidth;
	
	document.getElementById("brsw").innerHTML += browserType;
	document.getElementById("appv").innerHTML += appVersion;
	if (cookiesInfo === true) {
	document.getElementById("cook").innerHTML += "Yes";
	} else {
		document.getElementById("cook").innerHTML += "No";
	}	
	document.getElementById("pixDep").innerHTML += pixelDep;	
	document.getElementById("scrnh").innerHTML += screenHeight;
	document.getElementById("scrnw").innerHTML += screenWidth;
	
}


window.addEventListener("load", displayData, false);