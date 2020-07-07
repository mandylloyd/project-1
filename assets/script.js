$(document).ready(function(){

    var queryURL = "https://developers.zomato.com/api/v2.1/search?lat=" + lat + "&lon=" + long; 
    var apiKey = "b2f666e78eb609db1442ad0b8d5780e8";
    var lat; 
    var long;

$.ajax({
    method: "GET",
    url: queryURL,
    headers: {
        "user-key": apiKey,
        "content-type": "application/json"
    }
    }).then(response => {
        console.log(response);
    })


//refugee api call 
var queryURL = "https://www.refugerestrooms.org/api/swagger_doc.json";

$.ajax({
method: "GET",
url: queryURL,
headers: {
    "content-type": "application/json"
}
}).then(response => {
    console.log(response);
})


//map search api 
      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }




}); 