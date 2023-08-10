const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const userRoute = require('./route/userRoute');

const dotenv = require('dotenv');
dotenv.config();
require('./models/Connection'); // Make sure to define MongoDB connection

app.use(cors());

const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT,'192.168.1.8', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use('/', userRoute);
