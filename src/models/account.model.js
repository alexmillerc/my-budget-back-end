const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const account = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true },
);

account.pre('save', async function(next){
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});



module.exports = mongoose.model('accounts', account);