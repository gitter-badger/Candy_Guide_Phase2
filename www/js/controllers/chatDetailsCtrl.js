candyCtrl.controller('chatDetailsCtrl', function($scope, $ionicPlatform, $cordovaGeolocation, $cordovaGoogleMap, $cordovaDeviceOrientation) {
    $ionicPlatform.ready(function() {
        console.log(window);
        console.log($cordovaGeolocation);
        
        //$cordovaGoogleMap.getMap()
        
        $cordovaGoogleMap.getMap({zoom: 12}).then(function(result) {
            console.log(result);
        }, function(err) {
            // An error occurred
            console.log(err);
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
            console.log(err);
            $scope.test = err;
        });
        
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            console.log(position.coords);
        }, function(err) {
            // error
            console.log("error");
        });
    });
});
