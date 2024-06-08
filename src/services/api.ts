import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const fetchActivities = async () => {
  const response = await axios.get(`${API_URL}/activities`);
  return response.data;
};
