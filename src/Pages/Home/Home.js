import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Services from '../Services/Services';
import Banner from '../Shared/Banner/Banner';
import Articles from '../Articles/Articles';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Articles></Articles>
            <Footer></Footer>
        </div>
    );
};

export default Home;