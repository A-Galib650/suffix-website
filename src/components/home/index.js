import React, { useContext } from 'react';

import Particle from '../particle/Particle';
import Navbar from '../header/Navbar';
import Hero from './Hero';
import ScrollDown from './ScrollDown';

import WhoWeAre from './WhoWeAre';
import Footer from '../Footer/Footer';

import OurCompany from './OurCompany';
import OurService from './OurService';

import Testimonial from './Testimonial';

import Gallery from './Gallery';
import Navigations from '../header/Navigations';
import Nav from '../../Shared/Nav';
import AboutContent from '../About/AboutContent';
import ClientBrand from './ClientBrand/ClientBrand';
import OurProducts from './OurProducts/OurProducts';
import SuffixGallery from './SuffixGallery';
import { GetPathContext } from '../../GetPathContext/GetPathContext';
import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Banner from '../ReuseableComponent/Banner';
import HomeHeader from './HomeHeader';
import HeroSection from './HeroSection';
import FieldForceManagement from './FieldForceManagement';
import CallCenter from './CallCenter';
import WhyChooseUs from './WhyChooseUs';

const HomeComponents = () => {

  return (
    <>
      <div className="homepage overflow-hidden">
        {/* <Particle /> */}
        {/* <Header /> */}
        {/* <Banner /> */}
        {/* <Navbar /> */}

        {/* <HomeHeader /> */}
        <HeroSection />
        <WhyChooseUs />
        <OurCompany />
        <FieldForceManagement />
        <CallCenter/>
        <OurService />
        <OurProducts />
        <Testimonial />
        <ClientBrand />
        {/* <Gallery /> */}
        {/* <SuffixGallery /> */}
        <Footer />

      </div>



    </>
  )
}

export default HomeComponents;
