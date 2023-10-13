// routes/auth.js
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Query MongoDB to check the user's credentials
    db.collection('users').findOne({ username, password }, (err, user) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      } else if (user) {
        req.session.user = username;
        res.redirect('/account-balances');
      } else {
        res.redirect('/auth/login');
      }
    });
  });

  return router;
};
