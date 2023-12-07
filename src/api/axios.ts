import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://swapi.dev/api/',
    timeout: 12000,
    headers: {
        accept: 'application/json',
    },
});
