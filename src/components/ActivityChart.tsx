// src/components/ActivityChart.tsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import activityData from '../data/db.json'; // Importing the JSON data

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ActivityData {
  date: string;
  commits: number;
  pullRequests: number;
  merges: number;
  meetings: number;
  documentation: number;
}

const ActivityChart: React.FC = () => {
  const [data, setData] = useState<ActivityData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating fetching data from a JSON file
    setData(activityData.activities);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data.length) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: 'Commits',
        data: data.map((item) => item.commits),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Pull Requests',
        data: data.map((item) => item.pullRequests),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
      {
        label: 'Merges',
        data: data.map((item) => item.merges),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        fill: false,
      },
      {
        label: 'Meetings',
        data: data.map((item) => item.meetings),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Documentation',
        data: data.map((item) => item.documentation),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        align: 'center' as const,
        labels: {
          color: 'black',
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Developer Activities Over a Week',
        align: 'center' as const,
        color: 'black',
        font: {
          size: 16,
        },
        padding: {
          top: 10,
          bottom: 10,
        },
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        type: 'category' as const,
        title: {
          display: true,
          text: 'Date',
          color: 'black',
          font: {
            size: 14,
          },
          padding: {
            top: 10,
            bottom: 10,
          },
        },
      },
      y: {
        type: 'linear' as const,
        title: {
          display: true,
          text: 'Count',
          color: 'black',
          font: {
            size: 14,
          },
          padding: {
            top: 10,
            bottom: 10,
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default ActivityChart;
