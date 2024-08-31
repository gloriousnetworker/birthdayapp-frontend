// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountdownPage from './pages/CountdownPage';
import WishFormPage from './pages/WishFormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountdownPage />} />
        <Route path="/add-wish" element={<WishFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
