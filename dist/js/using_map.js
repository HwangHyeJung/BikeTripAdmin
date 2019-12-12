function initMap() {
    // The location of Uluru
    var uluru = { lat: 37.4669621, lng: 126.8874035 };
    // The map, centered at Ulur
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 11, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}