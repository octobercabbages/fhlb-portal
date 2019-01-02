'use strict';
var auth = require('../controllers/auth.controller');
var users = require('../assets/authorizations.json');
var user = {};

exports.list_all_auths = function(req, res) {
  console.log("ALL");
  res.json(users);
};




exports.create_an_auth = function(req, res) {
  res.send(user);
};


exports.get_entitlements = function(req, res) {
  console.log(req.params.username);
  users.forEach(element => {
    if(element.username == req.params.username){
      user = element
    }
  });
  console.log(user);
  res.send(user);
};


exports.update_an_auth = function(req, res) {
  res.send("UPDATE");
};


exports.delete_an_auth = function(req, res) {
  res.send("DELETE");

};


