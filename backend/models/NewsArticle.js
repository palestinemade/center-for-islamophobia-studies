// backend/models/NewsArticle.js
const mongoose = require('mongoose');

const NewsArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    required: true,
  },
});

const NewsArticle = mongoose.model('NewsArticle', NewsArticleSchema);

module.exports = NewsArticle;