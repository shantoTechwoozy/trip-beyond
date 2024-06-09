import axios from 'axios';

const API_KEY = 'YOUR_RAPIDAPI_KEY';

const axiosInstance = axios.create({
  baseURL: 'https://travel-advisor.p.rapidapi.com/airports/search',
  headers: {
    'x-rapidapi-key': 'c410cc867emsh5ccfbd8b0367a4dp11188cjsn61502af609c3',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
}
});

export const getAirports = async (query: string) => {
  try {
    const response = await axiosInstance.get('', {
      params: {
        query,
        locale: 'en_US'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching airports:', error);
    throw error;
  }
};
