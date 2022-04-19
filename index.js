require('./src/config')
const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(morgan('combined'));

app.use(express.json());
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