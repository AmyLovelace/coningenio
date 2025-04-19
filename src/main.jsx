
import './index.css'
import App from './App';
import './App.css'
import './assets/styles.scss'
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


