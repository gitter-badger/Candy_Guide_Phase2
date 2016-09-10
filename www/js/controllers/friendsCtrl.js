candyCtrl.controller('friendsCtrl', function($scope, Chats, configService) {

    $scope.chats = Chats.all();

});
