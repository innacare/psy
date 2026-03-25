/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {exportType: 'default', ref: true, svgo: false, titleProp: true},
      include: '**/*.svg',
    }),
    viteTsconfigPaths(),
    react(),
    babel({
      babelConfig: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
    checker({typescript: true}),
  ],
  esbuild: {sourcemap: true},
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react')) return 'react';
          if (id.includes('axios')) return 'query';
          if (id.includes('@mui')) return 'mui';
          if (id.includes('styled-components')) return 'styled';
        },
      },
    },
  },
});
