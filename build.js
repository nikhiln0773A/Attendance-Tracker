// Simple esbuild-based production build: bundles src/main.jsx into
// dist/bundle.js and copies the HTML shell alongside it.
const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const outdir = path.join(__dirname, 'dist');
fs.mkdirSync(outdir, { recursive: true });

esbuild.buildSync({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  minify: true,
  format: 'iife',
  jsx: 'automatic',
  loader: { '.js': 'jsx' },
  outfile: path.join(outdir, 'bundle.js'),
  logLevel: 'info',
});

fs.copyFileSync(
  path.join(__dirname, 'index.html'),
  path.join(outdir, 'index.html')
);

console.log('Build complete → dist/');
