// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Account from './pages/Account';
import MyRecords from './pages/MyRecords';
import Care from './pages/Care';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/my-records" element={<MyRecords />} />
          <Route path="/care" element={<Care />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
