import React from 'react'
import Heroslider from '../components/heroslider.js';
import './Home.css';

const Home = () => {
    return (
        <>
            <div>
                <Heroslider />
            </div>
            <section className='about-us'>
                <h1>Welcome to ...</h1>
                <h3>Your one stop shop to accessorize your office space! Make your space more bright and fun with our
                    selections of supplies and decor.</h3>
            </section>
        </>
    )
}

export default Home