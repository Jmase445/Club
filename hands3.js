var waitForUser;

function geoTest() {
	waitForUser = setTimeout(fail, 10000);
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(createMap, fail, {timeout: 10000})
	} else {
		fail();
	}
}
	
function createMap(position) {
	clearTimeout(waitForUser);
	var currPosLat = position.coords.latitude;
	var currPosLng = position.coords.longitude;
		var currPosAlt = position.coords.altitude;
		var altAccur = position.coords.altitudeAccuracy;
	var mapOptions = { center: new google.maps.LatLng(currPosLat, currPosLng), 
		zoom: 15
	};
	var map =  new google.maps.Map(document.getElementById("map"), mapOptions);
	document.getElementById("lat").innerHTML = currPosLat;
	document.getElementById("lng").innerHTML = currPosLng;
	document.getElementById("alt").innerHTML = currPosAlt;
}
	
function fail() {
	//console.log("Geolocation info not availaible or not allowed.");
	document.getElementById("map").innerHTML = "Unable to set location.";
	
}


function runDays() {
	
	var dateEntered = new Date(document.getElementById("since").value);
	var showDate = document.getElementById("been");
	var showToday = document.getElementById("todayDate");
	var showYear = document.getElementById("yearsPast");
	var showMonth = document.getElementById("monthsPast");
	var showDay = document.getElementById("dayPast");
	var todaysDate = new Date();
	var dayOfWeek = todaysDate.getDate();
	var dayOfMonth = todaysDate.getMonth() + 1;
	var dayOfYear = todaysDate.getFullYear();
	var dayYear = dateEntered.getFullYear();
	var dayOfTheMonth = dateEntered.getMonth() + 1;
	var dayDay = dateEntered.getDate() + 1;
	var daysConverted = dayOfMonth + "\-" + dayDay + "\-" + dayOfYear;
	var daysConverted2 = dayOfMonth + "\-" + dayOfWeek + "\-" + dayOfYear;
	
	var calculateYears = dayOfYear - dayYear;
	var calculateMonth = dayOfMonth - dayOfTheMonth;
	var calculateDay = dayOfWeek - dayDay;
	
	showDate.innerHTML = daysConverted;
	showToday.innerHTML =  daysConverted2;
	showYear.innerHTML = "It has been: " + calculateYears + " years";
	showMonth.innerHTML = "and " + calculateMonth + " months";
	showDay.innerHTML = "and " + calculateDay + " days since the date you chose.";
	
}


if (window.addEventListener) {
	window.addEventListener("load", geoTest, false);
} else if (window.attachEvent) {
	window.attachEvent("onclick", geoTest);
}