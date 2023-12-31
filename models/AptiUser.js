const mongoose = require('mongoose');

const aptiUserSchema = new mongoose.Schema({
  email: String,
  Rank: Number,
  Apti: Number,
  AptiMax: Number,
  Apticorrect: Number,
  Aptiincorrect: Number,
  AptiSkipped: Number,
  AptiTimeTaken: String,
  Totalaptiquestions: Number,
  Totalapticlasses: Number,
  Totalaptiattented: Number,
  totaltestshared: Number,
  totaltestattempted: Number,
  Apti_Prec: Number,
  AptiTimeDuration: String,
});

module.exports = mongoose.model('AptiUser', aptiUserSchema);
