// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'fs';
import path from 'path';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [{
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/archive') && !req.url.includes('.')) {
            const indexPath = path.resolve('public/archive/index.html');
            if (fs.existsSync(indexPath)) {
              res.setHeader('Content-Type', 'text/html');
              res.end(fs.readFileSync(indexPath));
              return;
            }
          }
          next();
        });
      },
    }, tailwindcss()],
  },

  integrations: [react()],
});