// backend/routes/incidents.js
const express = require('express');
const Incident = require('../models/Incident');
const auth = require('../middleware/auth');
const { sendNotification } = require('../services/notifications');
console.log('Notification Service Loaded in incidents.js');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const incident = new Incident({
    user: req.user.userId,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    },
  });
  await incident.save();
  
  // Send notification after saving the incident
  sendNotification({
    notification: {
      title: 'New Incident Reported',
      body: req.body.description,
    },
    topic: 'incidents',
  });
  
  res.json({ message: 'Incident reported successfully' });
});

router.get('/', async (req, res) => {
  const incidents = await Incident.find().populate('user', 'name');
  res.json(incidents);
});

module.exports = router;
