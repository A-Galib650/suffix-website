import React from 'react';
import { ScrollUp } from '../../../helpers/ScrollUp';
import Footer from '../../Footer/Footer';
import Banner from '../../ReuseableComponent/Banner';
import img from '../../../media/download/eCommerce.jpg';
import WebECommerceCard from './WebECommerceCard';

const WebECommerce = () => {
    ScrollUp();
    return (
        <div className="overflow-hidden">
            <Banner title="Web & E-Commerce" backgroundImg={img} textColor="white" />
            <WebECommerceCard />
            <Footer />
        </div>
    );
};

export default WebECommerce;