var map;

function initialize() {
  var center = new google.maps.LatLng(19.4326077, -99.13320799999997);
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 12
  });


var request = {
  location : center,
  radius: 8000,
  types: ['bar']
};

var service = new google.maps.places.PlacesService(map);

service.nearbySearch(request, callback);

}

const callback = (results, status) => {
  if(status === google.maps.places.PlacesServiceStatus.OK){
    for(i=0; i<results.length; i++){
      createMarker(results[i]);
      console.log(results[i]);
    }
  }
}

const createMarker = (place) => {
  let placeLoc = place.geometry.location;
  let market = new google.maps.Marker({
    map: map,
    position: place.geometry.location
 });
}


//google.maps.event.addDomListener(window, 'load', initialize);