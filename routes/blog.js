const expres = require('express')
const router = expres.Router()

//Import Controller

const { dummyLink } = require('../controllers/LikeController')
const { createComment } = require('../controllers/CommentController')


//Mapping Create
router.get('/dummyRoute', dummyLink)
router.post('/comments/create', createComment)



//export
module.exports = router