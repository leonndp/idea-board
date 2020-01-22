const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

// Import Routes
const ideas = require('./routes/api/ideas')
const auth = require('./routes/api/auth')

// Setup environment vairables
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

// DB Config
const db = process.env.MONGO_URI;

const app = express();

// Middleware

app.use(express.json())

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB has connected.'))
    .catch((err) => console.log(err));

// Use Routes
app.use('/api/ideas', ideas)
app.use('/api/users', auth)

// Serve static assets
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/dist'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))