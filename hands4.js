
function checkInfo() {
	var validity = true;
	var mailing = document.getElementById("emailAdd").value;
	var checkEmail = mailing.includes("@");
	var messageText = "";
	var infoComplete;
	
	try {
		//if statement to check if checkEmail is false
		if(checkEmail === false) {
			throw "Enter an email address with an \"@\" symbol.";
		} 
	} 
	catch(message) {
		messageText = message;
	}
	finally {
		//checks if email had set to false
		if(checkEmail === false) {
			//set validity to false so infoGather doesnt run
			validity = false;
		}
		document.getElementById("crewEmail").innerHTML =  messageText;
		//see if infoGather should run
		if(validity === true) {
		infoGather();
		}
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


document.addEventListener("onclick", checkInfo, false);