/*
javascript for array list
*/
		var parts = [];
		var arrayString;
		var objectString;
		var endParts = {};
		
		function upgradePart(event) {
			var callerElement = event.target || event.srcElement;
			var upName = callerElement.value;
			if (callerElement.checked) {
				parts.push(upName);
				convertToString();
			} else {
				var listItems = document.getElementById("message");
				for (var i = 0; i < parts.length; i++) {
					if (parts[i] === upName) {
						parts.splice(i, 1);
						//listItems[i].parentNode.removeChild(listItems[i]);
						break;
					} 
				} convertToString()
			}
		}
		
		function convertToString() {
			arrayString = parts.toString();
			objectString = JSON.stringify(endParts);
			var endMessage = document.getElementById("message");
			endMessage.innerHTML = arrayString;
			
		}
		
		function resetForm() {
			createEventListeners();
		}
		
		//creates event listeners
		function createEventListeners() {
				
				var part = document.getElementsByName("part");
				if (part[0].addEventListener) {
					for(var i = 0; i < part.length; i++) {
						part[i].addEventListener("change", upgradePart, false);
					}
				} else if (part.attachEvent) {
				for(var i = 0; i <part.length; i++) {
					part[i].attachEvent("onchange", upgradePart);
				}
			} 
		}
		
window.addEventListener("load", createEventListeners, false);
		
		