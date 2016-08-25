candyCtrl.controller('friendsCtrl', function($scope, chats) {

    $scope.chats = chats.all();

});
