const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  description: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  date: { type: Date, default: Date.now }
});

IncidentSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Incident', IncidentSchema);