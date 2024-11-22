import React from 'react';
import backgroundImage from '../../images/LP_BgImg.jpg';
import SearchBar from '../../components/SearchBar/SearchBar';
import JobCategoryButtons from '../../components/JobCategoryButton/JobCategoryButton';
import './LandingPage.css';
import FeaturedJobs from '../../components/FeaturedJobs/FeaturedJobs';

function LandingPage() {
    return (
        <div
            className="landing-page"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            <h1>
                Pursue Work that <br />Fits Your <span className="highlight">Talents.</span>
            </h1>
            <p>Search Thousands of Jobs in Top Industries.</p>
            <SearchBar />
            <JobCategoryButtons />
        </div>
    );
}

export default LandingPage;
