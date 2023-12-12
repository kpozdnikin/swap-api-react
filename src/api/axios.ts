import axios from 'axios';

export const api = axios.create({
    baseURL: '',
    timeout: 12000,
    headers: {
        accept: 'application/json',
    },
});
