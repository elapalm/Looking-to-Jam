// Initialize and add the map
function initMap() {
    

    geocoder = new google.maps.Geocoder();
    // The location of tucson
    var tucson = {lat: 32.2226, lng: -110.9747};
    // The map, centered at tucson
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: tucson});
    // The marker, positioned at tucson
    var marker = new google.maps.Marker({position: tucson, map: map});

    

  }

  

  
  

  
  
