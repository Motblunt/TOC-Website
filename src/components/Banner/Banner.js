import React from 'react';
import '../Banner/Banner.css'
import LogoT from '../Banner/Logo_TC-removebg-preview.png'


const Banner = () => {
    return (
        <div>  
          <section className='bg-image'>
            <div className='main-content'>
                  <div className='bg-style'>
        <div className='demo-content'>
          <img src={LogoT} alt="Logo société TOC" />
          <h1 className='name'>Théo Cottin</h1>
          <h2 className='work'>Développeur Full-Stack Freelance</h2>
        </div>
      </div> 
            </div>
          </section>
                 
        </div>

    );
};

export default Banner;