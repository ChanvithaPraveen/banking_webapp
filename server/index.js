const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mybank');

app.post('//registration', (req, res) => {

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
