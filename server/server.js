require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const cookieParser = require('cookie-parser');

// express app
const app = express();
const cors = require('cors');



app.options('*', cors({
  origin: 'https://6581aadae11f291b0c35bcdb--heartfelt-fenglisu-8e29a3.netlify.app/',
  credentials: true,
}));


app.use(cors({
  origin: "https://6581aadae11f291b0c35bcdb--heartfelt-fenglisu-8e29a3.netlify.app/",
  credentials: true,
})); 
// ""

// middleware
app.use(express.json());
app.use(cookieParser());

// route
app.use('/', userRoutes);

// Set strictQuery to false
mongoose.set('strictQuery', false);

// connect to db
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    // listen for requests
    const PORT = process.env.PORT || 5000; // Use the provided PORT or default to 5000
    app.listen(PORT, () => {
      console.log(`Connected to db & listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
