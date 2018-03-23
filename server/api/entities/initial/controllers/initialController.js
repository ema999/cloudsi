var UserService = require('../../../../services/userService');

var InitialController = {};

InitialController.getInitialState = function(token, callback){
  var userService = new UserService();

  var initialstate = {
    account: {
      metadata: null
    }
  };

  userService.getUserByToken(token, function(err, result){
    if (err) callback(err);

    userService.getUser(result.id, function(err, result){
      if (err) callback(err);

      initialstate.account.metadata = result;

      callback(null, initialstate)
    })

  })

}

module.exports = InitialController;
