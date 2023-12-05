import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://swapi.dev/api/',
    timeout: 5000,
    headers: {
        accept: 'application/json',
    },
});
