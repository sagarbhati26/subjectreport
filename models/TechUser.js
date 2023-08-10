const mongoose = require('mongoose');

const techUserSchema = new mongoose.Schema({
  email: String,
  Rank: Number,
  Tech: Number,
  TECHMax: Number,
  TECHcorrect: Number,
  TECHincorrect: Number,
  TECHSkipped: Number,
  TECHTotalTimeTaken: String,
  TECHTimeDuration: Number,
  TotalTECHquestion: Number,
  TECHTotalclasses: Number,
  TECHTotalAttented: Number,
  Testshared: Number,
  Testattempted: Number,
  TECH_Prec: Number,
});

module.exports = mongoose.model('TechUser', techUserSchema);
