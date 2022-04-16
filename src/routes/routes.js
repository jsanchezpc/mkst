const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.render('index.html')
});

app.post('/register', (req, res) => {
    console.log('New user registered.')
    let body = req.body;
    console.log(body);
});

module.exports = app;