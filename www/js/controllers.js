angular.module('starter.controllers', [])

.controller('friendsCtrl', function($scope) {})
.controller('chatsCtrl', function($scope) {})
.controller('chatDetailCtrl', function($scope) {})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
