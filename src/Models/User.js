<<<<<<< Updated upstream
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true
  },
  
  Email: {
    type: String,
    required: true
  },
 
  DateOfBirth: {
    type: date,
    required: true
  },



}, { timestamps: true });
mongoose.models = {}
const User = mongoose.model('User', adminSchema);
module.exports = User;
>>>>>>> Stashed changes
