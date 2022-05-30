import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// context
import StateProvider from './context/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);
