candyCtrl.controller('chatDetailsCtrl', function($scope, $ionicPlatform, $cordovaGeolocation, $cordovaGoogleMap, $cordovaDeviceOrientation) {
    $ionicPlatform.ready(function() {
        plugin.google.maps.Map.isAvailable(function (isAvailable, message) {
            if (isAvailable) {
                alert('利用可能:' + isAvailable);
                var map = plugin.google.maps.Map.getMap(angular.element(document.querySelector('map_canvas')),
                    {
                        center: new plugin.google.maps.LatLng("35.690921", "139.700258"),  
                        zoom: 20
                     }
                );
            } else {
                alert(message);
            }
        });
        
        
        
        /*
        map.addEventListener(plugin.google.maps.event.MAP_CLICK,function(){
            alert("map ????  pass!!!!!!!!!!!!!!");
            map.showDialog();
            //map.setDiv(div);
        });
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
