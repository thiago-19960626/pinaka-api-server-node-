﻿var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InterestSchema = new Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('interests', InterestSchema);