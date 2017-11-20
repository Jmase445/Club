var formValidity = true;
var specialChar = /[\#*|\":<>[\]{}`\\()';@&$]/;

function runValidate() {
	var firstNameInfo = document.getElementById("fName2");
	var lastNameInfo = document.getElementById("lName2");
	var makesInfo = document.getElementById("makes2");
	var errorList = document.getElementById("errorText");
	if(firstNameInfo != "") {
		firstNameInfo.innerHTML = "Your first name: ";
	}
	if(lastNameInfo != "") {
		lastNameInfo.innerHTML = "Your last name: ";
	}
	if(makesInfo != "") {
		makesInfo.innerHTML = "Your favorite make of car: ";
	}
	errorList.innerHTML = "";
	
	checkFields();
}
function checkFields() {
	
	var firstName = document.myInfoForm.fName.value;
	var lastName = document.myInfoForm.lName.value;
	var carMake = document.getElementById("makes").value;
	var errorList = document.getElementById("errorText");
	
	try {
		if(firstName == "" || specialChar.test(firstName)) {
			throw "Please fill in the first name entry with correct characters.";
			formValidity = false;
		} else {
			document.getElementById("fName2").innerHTML += firstName;
		}
		if(lastName == "" || specialChar.test(lastName)) {
			throw "Please fill in the last name entry with correct characters.";
			formValidity = false;
		} else {
			document.getElementById("lName2").innerHTML += lastName;
		}
		if(carMake == "") {
			throw "Please choose a car make.";
			formValidity = false;
		} else {
			document.getElementById("makes2").innerHTML += carMake;
		}
	}
	catch(msg) {
			errorList.innerHTML = msg;
	} 
}


