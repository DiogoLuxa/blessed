import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// context
import StateProvider from './context/StateProvider';

// components
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);
