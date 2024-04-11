import ReactDOM from 'react-dom/client';
import App from './App';
import {  HelmetProvider } from 'react-helmet-async';
import { LayoutProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <LayoutProvider>
    <App />
    </LayoutProvider>
  </HelmetProvider>
);

