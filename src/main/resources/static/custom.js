var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
        zoom: 15,
        scrollwheel: false
    });

    for (i=0; i<busLocations.length; i++){
        var marker = new google.maps.Marker({
            position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
            map: map,
            icon: {
                url: "/Catbusbus.png",
                scaledSize: new google.maps.Size(60, 60)
            },
            animation: google.maps.Animation.BOUNCE
        });
    }

    const transitLayer = new google.maps.TransitLayer();
      transitLayer.setMap(map);
    const trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);

     let contentString = '<h2> Bus#:  Where Marta is outdated!</h2>';

      let infowindow = new google.maps.InfoWindow({
            content: contentString
        })
    google.maps.event.addListener(marker, 'click', () => infowindow.open(map, marker));

}

//var map;
//function initMap() {
//    map = new google.maps.Map(document.getElementById('map'), {
//        center: coords,
//        zoom: 15,
//        scrollwheel: false
//    });
//
//    var infoWindow = new google.maps.InfoWindow();
//
//    for (i=0; i<busLocations.length; i++){
//        var marker = new google.maps.Marker({
//            position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
//            map: map,
//            icon: {
//                url: "/bus.png",
//                scaledSize: new google.maps.Size(30, 30)
//            }
//        });
//
//        google.maps.event.addListener(marker, 'click', (function(marker, i) {
//            return function() {
//                infoWindow.setContent(busLocations[i].VEHICLE);
//                infoWindow.open(map, marker);
//            }
//        })(marker, i));
//
//    }
//
//    var userMarker = new google.maps.Marker({
//        position: coords,
//        map: map
//    });
//
//}
//
//function doGeocode() {
//    var address = document.getElementById("address");
//    var geoCoder = new google.maps.Geocoder();
//    geoCoder.geocode({
//        'address': address.value
//    }, function(results, status) {
//        if (status != google.maps.GeocoderStatus.OK) {
//            alert("Invalid address");
//        }
//    });
//};