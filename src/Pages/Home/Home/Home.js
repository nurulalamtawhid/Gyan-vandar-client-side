import React from 'react';
import Usetitle from '../../../Hook/Usetittle';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    Usetitle('Gyan-vandar');
    return (
        <div className='mx-6'>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            
        </div>
    );
};

export default Home;