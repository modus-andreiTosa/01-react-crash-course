import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      fix: true,
      cache: false,
      include: ['src/**/*.{ts,tsx}'],
    }),
  ],
  mode: 'development',
  define: {
    'process.env': {
      TREFLE_TOKEN: JSON.stringify(process.env.TREFLE_TOKEN),
    },
  },
});
