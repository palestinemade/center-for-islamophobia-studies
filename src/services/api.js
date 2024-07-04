// src/services/api.js
export const fetchIncidents = async () => {
    const response = await fetch('/api/incidents');
    const data = await response.json();
    return data;
  };
  
  export const fetchNews = async () => {
    const response = await fetch('/api/news');
    const data = await response.json();
    return data;
  };