
const express = require('express'); 
const app = express(); 
const blog = require('./routes/blog');
const connectDb = require('./config/database');

require('dotenv').config();
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(express.json()); 

// Routes
app.use('/api/v1', blog);

// Database
connectDb();

// Server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
