import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',
    plugins: [react()],
    server: {
        host: 'localhost',
        port: 5000,
        open: true // opens the browser automatically
    }
})
