candyCtrl.controller('chatDetailsCtrl', function($scope, $ionicPlatform, $cordovaGeolocation, $cordovaGoogleMap) {
    $ionicPlatform.ready(function() {
        var posOptions = {timeout: 3000, maximumAge: 900000, enableHighAccuracy: false};
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            console.log(position.coords);
            alert(position.coords);
            plugin.google.maps.Map.isAvailable(function (isAvailable, message) {
                if (isAvailable) {
                    var map = plugin.google.maps.Map.getMap(document.getElementById('map_canvas'),
                            {
                                'camera': {
                                    'latLng': new plugin.google.maps.LatLng(41.796875,140.757007),
                                    'tilt': 60,
                                    'zoom': 18,
                                    'bearing': 50
                                }
                            }
                    );
                } else {
                    alert(message);
                }
            });
        }, function(err) {
            // error
            console.log(err);
            plugin.google.maps.Map.isAvailable(function (isAvailable, message) {
                if (isAvailable) {
                    var map = plugin.google.maps.Map.getMap(document.getElementById('map_canvas'),
                            {
                                'camera': {
                                    'latLng': new plugin.google.maps.LatLng(41.796875,140.757007),
                                    'tilt': 60,
                                    'zoom': 18,
                                    'bearing': 50
                                }
                            }
                    );
                } else {
                    alert(message);
                }
            });
            alert("err");
        });
    });
});
