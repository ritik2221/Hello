const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI || 'mongodb://localhost:27017/ecommerce';
mongoose.connect(uri);
const connection = mongoose.connection;
connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
