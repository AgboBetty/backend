const config = require('config.jason');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
mongoose.promise = global.promise;

module.exports = {
    user: require('./user.model')
};