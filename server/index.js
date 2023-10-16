const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./models/Users');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mybank');

app.get('/users', (req, res) => {
    UsersModel.find({})
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log("email", email);
    console.log("password", password);
    UsersModel.findOne({ email: email})
        .then(user => {
            console.log("user", user);
            if (user) {
                console.log("user", user);
                // Compare the provided password with the stored hashed password
                console.log("user.password", user.password);
                console.log("password", password);
                const passwordMatch = bcrypt.compareSync(password, user.password);
                if (passwordMatch) {
                    res.json({ status: 'ok', name: user.name });
                    console.log("success");
                } else {
                    res.json({ status: 'error', error: 'Invalid password' });
                }
            } else {
                res.json({ status: 'error', error: 'Invalid email/password' });
            }
        })
        .catch(err => {
            res.json({ status: 'error', err: 'No User Exists' });
        });
});

app.post('/registration', (req, res) => {
    UsersModel.create(req.body)
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
