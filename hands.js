function leftPic() {
	var defaultPic = "images/hdbhDefault.jpg"
	var orginsPic = "images/hdbhOrgins.jpg"
	var proofPic = "images/proofOFconcept.jpg"
	
	
	
	if (document.getElementById("currentPic").src = defaultPic) 
	{
		document.getElementById("currentPic").src = orginsPic;
	} 
	else 
	{
		document.getElementById("currentPic").src = defaultPic;
	}
	
}

function rightPic() {
	var defaultPic = "images/hdbhDefault.jpg"
	var orginsPic = "images/hdbhOrgins.jpg"
	var proofPic = "images/proofOFconcept.jpg"
	
	
	
	if (document.getElementById("currentPic").src = defaultPic) 
	{
		document.getElementById("currentPic").src = proofPic;
	} 
	else 
	{
		document.getElementById("currentPic").src = defaultPic;
	}
	
}




function infoGather() {
	var mailing = document.getElementById("emailAdd").value;
	var phone = document.getElementById("phoneNum").value;
	var age = document.getElementById("getAge").value;
	var xp = document.getElementById("yearsDrv").value;
	
	document.getElementById("crewEmail").innerHTML =  mailing; 
	document.getElementById("crewNumber").innerHTML = phone;
	document.getElementById("crewAge").innerHTML = age;
	document.getElementById("crewYears").innerHTML =  xp; 
	document.getElementById("driveAge").innerHTML = age - xp;
	
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
			 
document.getElementById("leftButton").addEventListener("click", leftPic, false);
document.getElementById("rightButton").addEventListener("click", rightPic, false);		 
document.addEventListener("onclick", infoGather, false);