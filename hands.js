
function infoGather() {
	var mailing = document.getElementById("emailAdd").value;
	var phone = document.getElementById("phoneNum").value;
	var xp = document.getElementById("yearsDrv").value;
	
	document.getElementById("crewEmail").innerHTML =  mailing; 
	document.getElementById("crewNumber").innerHTML = phone;
	document.getElementById("crewYears").innerHTML =  xp; 
	
}
/*
function updateInfo() {
	infoGather();
}
*/


		/*  setup variables for the image src */
			 var rokk = "images/rokk.jpg";
			 var mase = "images/mase.jpg";
			 var ault = "images/ault.jpg";
			 
			 
document.addEventListener("onclick", infoGather, false);