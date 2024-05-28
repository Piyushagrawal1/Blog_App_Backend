const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
    },
})

//export
module.exports = mongoose.model('Like', likeSchema)