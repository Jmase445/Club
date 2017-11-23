jQuery(document).ready(function($) {
  $.ajax({
  url : "https://api.wunderground.com/api/514ffe25deababf8/geolookup/conditions/q/AZ/Phoenix.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  var wind_MPH = parsed_json['current_observation']['wind_mph'];
  var windy = document.getElementById("theWind").value;
  var theTemp = document.getElementById("yourTemp").value;
  windy = wind_MPH;
  theTemp = temp_f;
  document.getElementById("yourTemp").innerHTML = theTemp + "F";
  document.getElementById("theWind").innerHTML = windy;
 // alert("Current temperature in " + location + " is: " + temp_f);
  }
  });
});