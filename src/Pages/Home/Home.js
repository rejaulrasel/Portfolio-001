import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from './Banner/Banner';
import HomeProjects from './HomeProjects.js/HomeProjects';

const Home = () => {
    return (
        <div>
          
            <Header></Header>
            <Banner></Banner>
            <HomeProjects></HomeProjects>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;