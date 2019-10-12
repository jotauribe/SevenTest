var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Model to store Github users on Database
const userSchema = new Schema({
    username: {
        type: String
    },
    events: [{
        type: Object
    }],
    gists: [{
        type: Object
    }]
})

module.exports = mongoose.model('User', userSchema, 'User')
