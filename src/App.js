// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountdownPage from './pages/CountdownPage';
import WishFormPage from './pages/WishFormPage';
import AlbumPage from './pages/AlbumPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountdownPage />} />
        <Route path="/add-wish" element={<WishFormPage />} />
        <Route path="/album" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
