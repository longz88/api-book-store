const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const { bookRouter, authorRouter } = require('./src/routes/index');
const port = process.env.PORT || 8888;

// Connect database
mongoose.connect(process.env.MONGODB_URL);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('common'));
app.use(cors());

// Routes
app.use('/v1/author', authorRouter);
app.use('/v1/book', bookRouter);

app.listen(port, () => {
   console.log(`===> Server running on port ${port} ===>`);
});
