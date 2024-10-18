const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logoUrl: { type: String },  // Firebase logo URL
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }]
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
