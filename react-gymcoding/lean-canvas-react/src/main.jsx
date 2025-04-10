import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import App from './App.jsx'
import AppStyled from './AppStyled';
import AppTailwindCSS from './AppTailwindCSS';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTailwindCSS />
  </StrictMode>,
);
