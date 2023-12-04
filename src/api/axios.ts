import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://swapi.dev/api/',
    timeout: 1000,
    headers: {'Content-type': 'application/json'}
});