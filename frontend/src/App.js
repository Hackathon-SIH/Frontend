import './App.css';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import Footer from './components/footer/footer';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Navbar from './components/Navbar/Navbar';
import PopularCategory from './components/PopularCategory/PopularCategory';
import TopCompanies from './components/TopCompanies/TopCompanies';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <FeaturedJobs />
      <HowItWorks />
      <PopularCategory />
      <TopCompanies />
      <Footer />
    </div>
  );
}

export default App;

