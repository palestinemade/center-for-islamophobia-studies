// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
const incidentsRoute = require('./routes/incidents');
const newsRoute = require('./routes/news');

app.use('/api/incidents', incidentsRoute);
app.use('/api/news', newsRoute);

// Simple route to verify server is running
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Connect to MongoDB with options to remove deprecated warnings
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/islamophobiaStudies';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
