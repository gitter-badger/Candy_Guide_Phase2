candyCtrl.controller('chatsCtrl', function($scope, chats) {

    $scope.chats = chats.all();
    $scope.remove = function(chat) {
        chats.remove(chat);
    };

});
