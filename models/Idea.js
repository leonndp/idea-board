const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const moment = require('moment')

// Create Schema
const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    createdAt: {
        type: Date,
        default: moment()
    }
})

module.exports = Idea = mongoose.model('idea', IdeaSchema);