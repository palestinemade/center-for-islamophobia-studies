// backend/models/NewsArticle.js
const mongoose = require('mongoose');

const NewsArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  publishedAt: Date,
});

module.exports = mongoose.model('NewsArticle', NewsArticleSchema);
n