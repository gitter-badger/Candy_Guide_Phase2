candyCtrl.controller('friendsCtrl', function($scope, Chats) {

    $scope.chats = Chats.all();

});
