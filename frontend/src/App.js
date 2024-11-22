import './App.css';
import React, { useState } from 'react';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import Footer from './components/footer/footer';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Navbar from './components/Navbar/Navbar';
import PopularCategory from './components/PopularCategory/PopularCategory';
import SignUpForm from './components/SignUpForm/SignUpForm';
import TopCompanies from './components/TopCompanies/TopCompanies';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  const [isSignUpVisible, setSignUpVisible] = useState(false);

    const handleSignUpClick = () => {
        setSignUpVisible(true);
    };

    const handleCloseSignUp = () => {
        setSignUpVisible(false);
    };


  return (
    <div className="App">
      <Navbar onSignUpClick={handleSignUpClick} />
      <LandingPage />
      <FeaturedJobs />
      <HowItWorks />
      <PopularCategory />
      <TopCompanies />
      <Footer />
      <SignUpForm isVisible={isSignUpVisible} onClose={handleCloseSignUp} />
    </div>
  );
}

export default App;

