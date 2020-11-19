const mongoose = require('mongoose');
const { Schema } = mongoose;

const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  name: { type: String  },
  email: { type: String },
  password: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires:{ type: String },
  number: { type: String },
  fecha: { type: String  },
  address: { type: String, },
  localidad: { type: String },
  piso: { type: String},
  date: { type: Date, default: Date.now },
  uid: String,
  gender: String,
    pic: String,
    uid: String,
    token: String,
});


UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
