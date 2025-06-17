import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      'jsmediatags': path.resolve(__dirname, 'node_modules/jsmediatags/dist/jsmediatags.min.js')
    }
  },
  optimizeDeps: {
    include: ['jsmediatags']
  }

});