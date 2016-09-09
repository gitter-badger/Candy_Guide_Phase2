candyCtrl.controller('chatDetailsCtrl', function($scope, $ionicPlatform, $cordovaGeolocation, $cordovaGoogleMap) {
    $ionicPlatform.ready(function() {
        var posOptions = {timeout: 3000, maximumAge: 900000, enableHighAccuracy: false};
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            alert("success geolocation");
            plugin.google.maps.Map.isAvailable(function (isAvailable, message) {
                if (isAvailable) {
                    var map = plugin.google.maps.Map.getMap(document.getElementById('map_canvas'),
                            {
                                'camera': {
                                    'latLng': new plugin.google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                                    'tilt': 60,
                                    'zoom': 17,
                                    'bearing': 50
                                }
                            }
                    );
                    var urlimage;
                    var img =new Image();
                    img.crossOrigin = "Anonymous";
                    img.src = 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/947020_1042295795843419_1720321809087675440_n.jpg?oh=d1e63c99c6cb445b0d86137405dafbe7&oe=583F9E17';
                    img.onload = function(that){
                        var bg = document.createElement("canvas");
                        bg.width = 54;
                        bg.height = 60;
                        var bgCtx = bg.getContext("2d");
                        // 黒枠の作成
                        bgCtx.beginPath();
                        bgCtx.fillStyle = "black";
                        bgCtx.fillRect(0,0,54,54);
                        bgCtx.fill();
                        bgCtx.stroke();
                        // 線の作成
                        bgCtx.beginPath();
                        bgCtx.moveTo(27,60);
                        bgCtx.lineTo(24,54);
                        bgCtx.moveTo(27,60);
                        bgCtx.lineTo(30,54);
                        bgCtx.stroke();
                        bgCtx.drawImage(img, 2, 2,50,50);
                        urlimage = bg.toDataURL();
                            map.addMarker({
                                'position': new plugin.google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                                'title': "Hello GoogleMap for Cordova!",
                                'icon': {
                                    'url': urlimage
                                }
                            }, function(marker) {
                                marker.showInfoWindow();
                            });
                    }
                    
                    
                    map.addCircle({
                        'center': new plugin.google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                        'radius': position.coords.radius,
                        'strokeColor' : '#AA00FF',
                        'strokeWidth': 5,
                        'fillColor' : '#880000'
                    }, function(circle) {
                        circle.on(plugin.google.maps.event.OVERLAY_CLICK, function(overlay) {
                            circle.setFillColor("blue");
                        });
                    });
                } else {
                    alert("not available map");
                }
            });
        }, function(err) {
            // error
            alert("geo location err");
            plugin.google.maps.Map.isAvailable(function (isAvailable, message) {
                if (isAvailable) {
                    var map = plugin.google.maps.Map.getMap(document.getElementById('map_canvas'),
                            {
                                'camera': {
                                    'latLng': new plugin.google.maps.LatLng(41.796875,140.757007),
                                    'tilt': 60,
                                    'zoom': 17,
                                    'bearing': 50
                                }
                            }
                    );
                    map.addMarker({
                        'position': new plugin.google.maps.LatLng(41.796875,140.757007),
                        'title': "Hello GoogleMap for Cordova!"
                    }, function(marker) {
                        marker.showInfoWindow();
                    });
                } else {
                    alert("not available map");
                }
            });
        });
    });
});
