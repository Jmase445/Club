



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