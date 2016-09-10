candyService.factory('configService', function(rootService, $firebaseObject){

    // Creates a three-way binding config
    var globalConfig = $firebaseObject(rootService.globalConfig);
    // to take an action after the data loads, use the $loaded() promise
     globalConfig.$loaded().then(function() {
     // To iterate the key/value pairs of the object, use angular.forEach()
       angular.forEach(globalConfig, function(value, key) {
          console.log(key, value);
       });
     });

    var config = {
        globalConfig: globalConfig
    };

    return config;

});
