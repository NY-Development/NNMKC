import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => ({
  plugins: [react(), svgr()],
  server: { port: 3000, open: true },
  build: { sourcemap: mode === 'development' },
}));

