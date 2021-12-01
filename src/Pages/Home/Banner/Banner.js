import React, { useEffect } from 'react';
import './Banner.css'
import img from '../../../images/693-removebg-preview.png'
import Type from '../Type';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    useEffect( () => {
        Aos.init( { duration : 1800 })
    }, [])
    return (
            <section className='container'>
        <div className="row g-0 text-light ">
            <div  data-aos='fade-right' className=" col-md-7 col-12 ">
                <div className='p-5 mt-5 w-75'>
                    <p>Hello, I'm</p>
                    <h1 className='fw-bold mb-0'>REJAUL HASAN</h1>
                    <br />
                    <h3 className='text-primary'>
                    <Type></Type>
                    </h3>
                    <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.
                    </p>
                    <Link to='/about'>
                    <button className='btn-danger py-2 px-3 rounded-3 me-4 mb-md-0 mb-3'>About me</button>
                     </Link>
                    <button style={{'backgroundColor' : '#0a192f', 'color' : 'white', 'border': '1px solid green'}}  className='btn-regular py-2 px-3'><a href="https://www.linkedin.com/in/rejaul-hasan-rasel-296a0717b/" target='blank' className='text-light text-decoration-none'>Hire Me</a></button>
                </div>
            </div>
            <div  data-aos='fade-left' className="col-md-5 col-12 ">
        <img src={img} className='img-fluid' alt="" />
            </div>

        </div>
        </section>
    );
};

export default Banner;