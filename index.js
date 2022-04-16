require('./src/config')
const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

require('./src/routes/routes');

mongoose.connect(process.env.DB, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
}, (err, res) => {
    if (err) throw err;
    console.log(`Connected to database`);
});

app.listen(process.env.PORT, () => console.log(`Listening port ${process.env.PORT}`));