const express = require("express");
const cors = require('cors');
const app = express();

app.get('/', cors(), (req, res) => {
     res.render('index.html')
});

// app.get('/login', cors(), (req, res) => {
//      console.log('working login')
//      res.render('login.html');
//  })

app.post('/register', cors(), (req, res) => {
    console.log('New signup request, creating user..........');
    let body = req.body;
     console.log(body)
    // password between 7 to 16 characters which contain only characters, numeric digits, 
    // underscore and first character must be a letter
    const check = /^[A-Za-z]\w{6,24}$/;
    if (body.pw !== '' || body.pw.match(check)) {
         let newUser = new User({
              username: body.username-inp-reg,
              password: bcrypt.hashSync(body.pw, 10)
         });

         newUser.save((err, userDB) => {

              if (err) {
                   return res.status(400).json({
                        ok: false,
                        err
                   });
              }

              let token = jwt.sign({
                   user: userDB
              }, process.env.SEED, { expiresIn: process.env.TOKEN_EXP });

              res.json({
                   ok: true,
                   usuario: userDB,
                   token: token,
                   redirect: '/play'
              });


         });
    } else {
         res.json({
              ok: false,
              err: 'Wrong password!'
         });
    }
});

module.exports = app;