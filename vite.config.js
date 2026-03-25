import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-fluid-animation': path.resolve('./node_modules/react-fluid-animation/dist/index.js'),
    },
  },
});
