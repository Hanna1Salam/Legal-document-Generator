import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GeneratePage from './pages/GeneratePage'; // Update import
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generate" element={<GeneratePage />} /> {/* Update route */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
