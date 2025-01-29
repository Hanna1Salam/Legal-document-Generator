import React from 'react';
import '../styles/global.css';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; 
import homeimg from '../assets/image/home-image.png';
import About from "../components/About";
import Working from "../components/Working";
import Features from "../components/Features";
import Developers from "../components/Developers";

const Home = () => {
    return (
        <div className='bg'>
            <div id="Home" className='home'>
                <div className='home-content'>
                    <p className='home-head' >Streamline Your Legal Drafting with AI Precision</p>
                    <p className='home-para'>LegalEase is a cutting-edge platform designed to simplify the process of creating legal documents. Powered by advanced AI models, it allows users to input case details in plain text and generates professionally formatted plaint documents in seconds. Perfect for legal professionals, law students, and individuals seeking efficient document generation without the hassle.</p>
                    <div className='home-bt'>
                        <Link to="About" smooth={true} duration={500} className='home-link' ><span>Read More</span></Link>
                        <RouterLink to="/generate" className='home-link'><span>Try Now</span></RouterLink>
                    </div>
                </div>
                <div className="home-image">
                    <img src={homeimg} alt="Home" />
                </div>
            </div>
            <div id="About"><About /></div>
            <div id="Working"><Working /></div>
            <div id="Features"><Features /></div>
            <div id="Developers"><Developers /></div>
        </div>
    );
};

export default Home;
