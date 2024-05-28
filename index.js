const expres = require('express')
const app = expres()
const blog = require('./routes/blog')
const connectDb = require('./config/database')


require('dotenv').config()
const PORT = process.env.DATABASE_URL || 3000


//middleware
app.use(expres.json())


//routes
app.use('/api/v1', blog)


//database
connectDb()

//server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})