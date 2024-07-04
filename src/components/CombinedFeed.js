// src/components/CombinedFeed.js
import React, { useEffect, useState } from 'react';

const CombinedFeed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const incidentsResponse = await fetch('/api/incidents');
      const newsResponse = await fetch('/api/news');
      const incidents = await incidentsResponse.json();
      const news = await newsResponse.json();

      // Combine incidents and news
      const combinedItems = [
        ...incidents.map(incident => ({ ...incident, type: 'incident' })),
        ...news.map(article => ({ ...article, type: 'news' }))
      ];

      // Sort by date (assuming both incidents and news have a `date` or `publishedAt` field)
      combinedItems.sort((a, b) => new Date(b.date || b.publishedAt) - new Date(a.date || a.publishedAt));

      setItems(combinedItems);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Combined Feed</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.type === 'incident' ? (
              <div>
                <strong>Incident:</strong> {item.description} <br />
                <em>Date:</em> {new Date(item.date).toLocaleString()}
              </div>
            ) : (
              <div>
                <strong>News:</strong> <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a> <br />
                <em>Published At:</em> {new Date(item.publishedAt).toLocaleString()}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CombinedFeed;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IncidentMap from './components/IncidentMap';
import CombinedFeed from './components/CombinedFeed';
import Statistics from './components/Statistics';
import IncidentForm from './components/IncidentForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/report">Report Incident</a></li>
            <li><a href="/feed">Combined Feed</a></li>
            <li><a href="/statistics">Statistics</a></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={IncidentMap} />
          <Route path="/report" component={IncidentForm} />
          <Route path="/feed" component={CombinedFeed} />
          <Route path="/statistics" component={Statistics} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;