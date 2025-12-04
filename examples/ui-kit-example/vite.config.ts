import { defineConfig } from 'vite';
import react            from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  server: {
    host: true,
    allowedHosts: [
      'my-ui-kit-exmaple.ap-northeast-2.arkain.site',
      'my-ui-kit-example.run.goorm.io',
    ],
  },
});
