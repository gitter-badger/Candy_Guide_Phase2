candyCtrl.controller('chatsCtrl', function($scope, chats) {

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };

});
