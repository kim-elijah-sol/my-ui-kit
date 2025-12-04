import { css, Global } from '@emotion/react';
import { GlobalStyle } from '@ui-kit/ui';
import { StrictMode }  from 'react';
import { createRoot }  from 'react-dom/client';
import App             from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global
      styles={css`
        * {
          font-family: 'Fira Code', monospace;
          font-optical-sizing: auto;
          font-style: normal;
        }
      `}
    />
    <GlobalStyle />
    <App />
  </StrictMode>,
);
