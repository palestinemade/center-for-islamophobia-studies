// backend/routes/news.js
const express = require('express');
const axios = require('axios');
const NewsArticle = require('../models/NewsArticle');

const router = express.Router();

const NEWS_API_KEY = '85063bb88d2a47f99bed9128c34afee6'; // Replace with your actual NewsAPI key

// Endpoint to fetch and store news articles from the News API
router.get('/fetch', async (req, res) => {
  try {
    console.log('Fetching news articles');
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'Islamophobia OR Islamophobic OR Muslim hate crime',
        language: 'en',
        sortBy: 'relevancy',
        pageSize: 100,
        apiKey: NEWS_API_KEY,
      },
    });

    const articles = response.data.articles;
    const newsArticles = articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt,
    }));

    await NewsArticle.insertMany(newsArticles);
    console.log('News articles fetched and stored successfully');
    res.setHeader('Content-Type', 'application/json');
    res.json({ message: 'News articles fetched and stored successfully' });
  } catch (error) {
    console.error('Error fetching news articles:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ message: 'Error fetching news articles' });
  }
});

// Endpoint to retrieve stored news articles
router.get('/', async (req, res) => {
  console.log('Retrieving news articles');
  try {
    const articles = await NewsArticle.find();
    console.log('Articles:', articles);
    res.setHeader('Content-Type', 'application/json');
    res.json(articles);
  } catch (error) {
    console.error('Error retrieving news articles:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ message: 'Error retrieving news articles' });
  }
});

module.exports = router;
