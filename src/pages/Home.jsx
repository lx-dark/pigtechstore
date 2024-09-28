import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ProductSection from '../components/ProductSection';
import ExclusiveSection from '../components/ExclusiveSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import '../styles/global.css';
import { offers, products } from '../productData';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <ProductSection title="Nossas ofertas!" products={offers} />
            <ProductSection title="Produtos" products={products} />
            <ExclusiveSection />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
