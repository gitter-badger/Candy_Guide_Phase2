candyCtrl.controller('chatDetailsCtrl', function($scope, $ionicPlatform, $cordovaGeolocation, $cordovaGoogleMap, $cordovaDeviceOrientation) {
    $ionicPlatform.ready(function() {
        plugin.google.maps.Map.isAvailable(function (isAvailable, message) {
            if (isAvailable) {
                alert('利用可能:' + isAvailable);
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
                map.addEventListener(plugin.google.maps.event.MAP_CLICK,function(){
                    alert("map click!!!!!!!!!!!!!!!!");
                    map.showDialog();
                    //map.setDiv(div);
                });
            } else {
                alert(message);
            }
        });
        
        
        /*
        $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
           var magneticHeading = result.magneticHeading;
           $scope.test = result.magneticHeading;
           console.log("pass");
           var trueHeading = result.trueHeading;
           var accuracy = result.headingAccuracy;
           var timeStamp = result.timestamp;
           console.log(result);
        }, function(err) {
            // An error occurred
            console.log("cordovaDeviceOrientation error");
            console.log(err);
            $scope.test = err;
        });
        
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            console.log(position.coords);
        }, function(err) {
            // error
            console.log("cordovaGeolocation error");
            console.log(err);
        });
        */
    });
});
