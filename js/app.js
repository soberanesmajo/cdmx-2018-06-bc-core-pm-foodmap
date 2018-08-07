// Funciones de google maps

var map;
var infoWindow;

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

infoWindow = new google.maps.InfoWindow();

var service = new google.maps.places.PlacesService(map);

service.nearbySearch(request, callback);

}

function callback(results, status){
  if(status === google.maps.places.PlacesServiceStatus.OK){
    for(i=0; i<results.length; i++){
      createMarker(results[i]);
      filterName(results[i]);
      filterRating(results[i]);
      filterAddress(results[i]);
      paintDom(results[i]); 
      // console.log(results[i]);
    }
  }
}

function createMarker(place){
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
 });

 google.maps.event.addListener(marker, 'click', function(){
   infoWindow.setContent(place.name);
   infoWindow.open(map, this);
 });
}

// Funciones para filtrar

let nameKey;
let ratingKey;
let addressKey;

window.filterName = (results) => {
  nameKey= results.name;
  // console.log(nameKey);
  }

window.filterRating = (results) => {
  ratingKey = results.rating;
  // console.log(ratingKey);
}

window.filterAddress = (results) => {
  addressKey = results.vicinity;
  // console.log(addressKey);
}