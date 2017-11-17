


function leftPic() {
	var defaultPic = "images/hdbhDefault.jpg"
	var orginsPic = "images/hdbhOrgins.jpg"
	var proofPic = "images/proofOFconcept.jpg"
	
	var showing = document.getElementById("currentPic");
	
	if (showing.getAttribute('src') == defaultPic) 
	{
		showing.setAttribute('src', orginsPic);
	} 
	else 
	{
		showing.setAttribute('src', defaultPic);
	}
	
}

function rightPic() {
	var defaultPic = "images/hdbhDefault.jpg";
	var orginsPic = "images/hdbhOrgins.jpg";
	var proofPic = "images/proofOFconcept.jpg";
	
	
	var showing = document.getElementById("currentPic");
	
	if (showing.getAttribute('src') == defaultPic) 
	{
		showing.setAttribute('src', proofPic);
	} 
	else 
	{
		showing.setAttribute('src', defaultPic);
	}
	
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
document.addEventListener("onclick", checkInfo, false);
