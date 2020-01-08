const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config();

const items = require('./routes/api/items')

const app = express();

// BodyParser middleware

app.use(bodyParser.json())

// DB Config
const db = process.env.MONGO_URI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB has connected.'))
    .catch((err) => console.log(err));

// Use Routes
app.use('/api/items', items)

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