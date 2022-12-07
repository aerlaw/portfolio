function initMap() {
    // Localisation map + zoom
    var options = {
        zoom: 10,
        center: {
            lat: 48.8764489,
            lng: 2.3544364
        }
    }

    // Nouvelle map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Ajout du marqueur
    var marker = new google.maps.Marker({
        position: { lat: 48.9269981384, lng: 2.38913011551 },
        map: map
    })
}