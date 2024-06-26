const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post' //refrence to the post model
    }
})

//export
module.exports = mongoose.model('Comment', commentSchema)