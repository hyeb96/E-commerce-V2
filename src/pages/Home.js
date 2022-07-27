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
                <section className='inner'>
                    <h1>Welcome to <br /> <img id='logo2' src='images/logo2.png' alt='logo'></img> </h1>
                    <h3>Your one stop shop to accessorize your office space! Make your space more bright and fun with our
                        selections of supplies and decor. Working from home is more common now than it has ever been. With that in mind, it’s time we focus our attention on ways in which we can make this more pleasant and ways in which we can successfully bring together our home and work environments. That's why we make it made it our goal to bring you the most trendy items to make your work a space a little more colorful. </h3>
                </section>
            </section>
        </>
    )
}

export default Home