'use strict';
var fs = require('../assets/projects.json');

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  res.json(fs);
};




exports.create_a_task = function(req, res) {
  res.sned()
};


exports.read_a_task = function(req, res) {

};


exports.update_a_task = function(req, res) {

};


exports.delete_a_task = function(req, res) {


};


