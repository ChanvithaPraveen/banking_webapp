const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// MongoDB connection setup
const url = 'mongodb://mybankuser:password123@localhost:27017/mybank';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
  } else {
    console.log('Connected to MongoDB');
    const db = client.db('mybank');

    // Set up routes for authentication, as previously described
    const authRoutes = require('./routes/auth')(db);
    app.use('/auth', authRoutes);

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});
