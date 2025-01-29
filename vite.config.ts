import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  publicDir: 'public', // Указывает Vite, где искать статические файлы
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
