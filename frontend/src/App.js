import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import IntershipLPage from './pages/IntershipLPage/InternshipLPage';
import JobDetailsPage from './pages/JobDetailsPage/JobDetailsPage';

function App() {
  const [isSignUpVisible, setSignUpVisible] = useState(false);

  const handleSignUpClick = () => {
    setSignUpVisible(true);
  };

  const handleCloseSignUp = () => {
    setSignUpVisible(false);
  };

  return (
    <Router>    
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/internship' element={<IntershipLPage />} />
          <Route path='/jobdetails' element={<JobDetailsPage />} />
        </Routes>
    </Router>
  );
}

export default App;

