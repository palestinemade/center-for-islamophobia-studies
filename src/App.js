import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IncidentMap from './components/IncidentMap';
import NewsFeed from './components/NewsFeed';
import Statistics from './components/Statistics';
import IncidentForm from './components/IncidentForm';
import Register from './components/Register';
import Login from './components/Login';
import './firebase';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/report">Report Incident</a></li>
            <li><a href="/news">News Feed</a></li>
            <li><a href="/statistics">Statistics</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<IncidentMap />} />
          <Route path="/report" element={<IncidentForm />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;