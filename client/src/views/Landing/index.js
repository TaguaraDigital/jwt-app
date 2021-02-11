import React from 'react';

import Header from "../../components/layout/Header";
import HeroSection from '../../components/layout/HeroSection'
import AboutSection from '../../components/layout/AboutSection'
import ServicesSection from '../../components/layout/ServicesSection'
import Footer from '../../components/layout/Footer';

const Home = () => {
    return (
        <div>
            <Header page="landing" />
            <HeroSection />
            <AboutSection  id="about" title="Somos una empresa seria" bgClr={'var(--greenClr)'} />
            <ServicesSection  id="service" title="Te apoyamos con los siguientes Servicios" bgClr={'var(--lightBlueClr)'}/>
            <Footer />
        </div>
    )
}

export default Home
