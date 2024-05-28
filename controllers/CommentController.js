const express = require('express')
const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

//business logic
exports.createComment = async (req, res) => {
    try {
        //fetch data from req ki body
        const { user, body, post } = req.body
        //create a comment
        const comment = new Comment({
            user,
            body,
            post
        })
        //save comment
        const savedComment = await comment.save()
        //find the post by id and the new comments to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {
            $push: { comments: savedComment._id },
            new: true
        })
            .populate('comments') //populte the comments array with comment document
            .exec()

        res.json({
            success: true,
            message: 'Comment created successfully',
            post: updatedPost
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error while creating comments',
        })
    }
}