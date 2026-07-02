import React from 'react';
import homeHero from '../../assets/homeHero.png';
function Hero() {
    return ( 
       <div className="container p-5 ">
        <div className="row text-center">
            <img src={homeHero} alt="Home Hero" className="mb-5" />
            <h1 className="mt-3">Invest in everything</h1>
            <p className="mb-5">Online platform for investing in stocks, bonds, and more.</p>
            <button className="btn btn-primary" style={{width:"20%",margin:"0 auto"}}>Signup now</button>
        </div>
       </div>
     );
}

export default Hero;