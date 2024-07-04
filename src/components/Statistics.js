// src/components/Statistics.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const Statistics = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch('/api/incidents/stats')
      .then(response => response.json())
      .then(data => {
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: 'Number of Incidents',
              data: data.values,
              backgroundColor: 'rgba(75,192,192,0.6)',
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <h1>Statistics</h1>
      <Bar data={chartData} />
    </div>
  );
};

export default Statistics;