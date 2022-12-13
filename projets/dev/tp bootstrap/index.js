// Initialize and add the map
function initMap() {
    // The location of Uluru
    const SuperInfo = { lat: 53.339688, lng: -6.236688, };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: SuperInfo,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: SuperInfo,
        map: map,
    });
}