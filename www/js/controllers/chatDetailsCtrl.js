candyCtrl.controller('chatDetailsCtrl', function($rootScope,$scope, $ionicHistory, $ionicPlatform, $cordovaGeolocation,googlemapService) {
    //ng-click of index.html
    $rootScope.showtab = function() {
        $ionicHistory.goBack();
        $rootScope.hideTabs = false;
    };

    // this page does't need tabs
    $rootScope.hideTabs = true;

    //init event of this page
    $ionicPlatform.ready(function() {
        var posOptions = {timeout: 3000, maximumAge: 900000, enableHighAccuracy: false};
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            googlemapService.loadMap(position);
            googlemapService.createimageurl(position, googlemapService.addmarker);
        }, function(err) {
            // error
            googlemapService.loadMap(null);
        });
        var watchOptions = {timeout : 3000,enableHighAccuracy: true};
        var watch = $cordovaGeolocation.watchPosition(watchOptions);
            watch.then(
                null,
                function(err) {
                    // error
                },
                function(position) {
                    var lat  = position.coords.latitude
                    var long = position.coords.longitude
            });
    });
});
