'use strict';
//var mongoose = require('mongoose');
module.exports = function(app) {
  var todoList = require('../controllers/ldapApiController');

  // todoList Routes
  app.route('/auths')
    .get(todoList.list_all_auths)
    .post(todoList.create_an_auth);


  app.route('/auths/:username')
    .get(todoList.get_entitlements)
    .put(todoList.update_an_auth)
    .delete(todoList.delete_an_auth);
};