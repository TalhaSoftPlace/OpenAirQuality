import axios from 'axios';

const config = {
    baseURL: process.env.REACT_APP_API_SERVICE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
}

const service = axios.create(config);
export { service };