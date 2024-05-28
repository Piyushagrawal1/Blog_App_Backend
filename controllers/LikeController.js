const express = require('express')
const Like = require('../models/likeModel')


exports.dummyLink = (req, res) => {
    res.send('This is dummy link')
}