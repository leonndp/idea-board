const mongoose = require('mongoose')
const moment = require('moment')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024
    },
    createdAt: {
        type: Date,
        default: moment()
    }
})

module.exports = User = mongoose.model('user', UserSchema)