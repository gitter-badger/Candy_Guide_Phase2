candyService.factory('Chats', function() {


  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Yusuke Shimizu',
    lastText: 'Where are you?',
    face: 'img/ben.png',
    unReadMessages: 23
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
    unReadMessages: 1
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});