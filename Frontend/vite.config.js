import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // Your backend server's URL
        changeOrigin: true,             // Adjusts the origin header to match the target URL
        secure: false,                  // For self-signed certificates, if applicable
      },
    },
  },
});
