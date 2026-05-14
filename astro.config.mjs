// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'fs';
import path from 'path';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

const BASE = '/project-hi-mom';

const rootRedirect = {
  name: 'root-redirect',
  hooks: {
    'astro:build:done': async () => {
      const html = `<!doctype html>
<meta http-equiv="refresh" content="0;url=${BASE}/">
<meta name="robots" content="noindex">
<link rel="canonical" href="${BASE}/">
<title>Redirecting…</title>
<a href="${BASE}/">Continue to ${BASE}/</a>
`;
      fs.writeFileSync(path.resolve('dist/index.html'), html);
    },
  },
};

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [{
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith(`${BASE}/archive`) && !req.url.includes('.')) {
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
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith(`${BASE}/archive`) && !req.url.includes('.')) {
            const indexPath = path.resolve('dist/project-hi-mom/archive/index.html');
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

  integrations: [react(), mdx(), rootRedirect],
  site: 'https://th4t-gi.github.io',
  base: BASE,
  outDir: './dist/project-hi-mom',
});
