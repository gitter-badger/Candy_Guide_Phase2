candyService.factory('rootService', function(){

    var root = firebase.database().ref();

    var service = {
        root: root,
        users: root.child('users'),
        globalConfig: root.child('globalConfig'),
        locations: root.child('locations')
    };

    return service;

});
