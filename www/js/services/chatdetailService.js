candyService.factory('ChatDetail', function() {

})
.service('googlemapService', function () {
    var map;
    var markers;
    //this function is to load the map into chatsDetail_map_canvas
    this.loadMap = function (position) {
            var lalng;
            if(position){
                lalng = new plugin.google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            }else{
                lalng = new plugin.google.maps.LatLng(41.796875,140.757007)
            }
            plugin.google.maps.Map.isAvailable(function (isAvailable) {
                if (isAvailable) {
                    map = plugin.google.maps.Map.getMap(document.getElementById('chatsDetail_map_canvas'),
                            {
                                'camera': {
                                    'latLng': lalng,
                                    'tilt': 60,
                                    'zoom': 17,
                                    'bearing': 50
                                },
                                'gestures': {
                                    'scroll': true,
                                    'tilt': true,
                                    'rotate': true,
                                    'zoom': true
                                },
                                'controls': {
                                    'compass': true,
                                    'myLocationButton': true,
                                    'indoorPicker': true
                                }
                            }
                    );
                } else {
                    alert("not available map");
                }
            });
    }
    //this function is to create marker by using CANVAS
    this.createimageurl = function(position, addmarker){
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
            addmarker(position, bg.toDataURL());
        }
    }
    //this function is to add marker
    this.addmarker = function(position, urlimage){
        map.addMarker({
            'position': new plugin.google.maps.LatLng(position.coords.latitude, position.coords.longitude),
            'title': "Hello GoogleMap for Cordova!",
            'icon': {
                'url': urlimage
            }
        }, function(marker) {
            markers = marker;
            marker.showInfoWindow();
        });
    }
});