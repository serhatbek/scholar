import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/scholar/',
  plugins: [react()],
  build: {
    assetsDir: './assets',
  },
  optimizeDeps: {
    exclude: ['@hookform/resolvers'],
  },
});
