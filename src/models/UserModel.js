const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
     username: {
          type: String,
          required: [true, 'El nombre es necesario']
     },
     pw: {
          type: String,
          required: [true, 'La contraseña es obligatoria']
     },
     avatar: {
          type: String,
          required: false
     },
     online: {
          type: Boolean,
          default: true
     }
});


userSchema.methods.toJSON = function () {

     let user = this;
     let userObject = user.toObject();
     delete userObject.pw;

     return userObject;
};

module.exports = mongoose.model('User', userSchema);