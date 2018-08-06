let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.4326077, lng: -99.13320799999997},
    zoom: 13
  });
}

google.maps.event.addDomListener(window, 'load', initialize);