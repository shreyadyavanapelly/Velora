import React from 'react';
import pricing0 from '../../assets/pricing0.svg'
import intradaytrades from '../../assets/intradayTrades.svg'
function Hero() {
    return ( 
       <div className="container text-center m-5">
        <h1>Pricing</h1>
        <p className='mb-5 pt-2'>Free equity investments and flat &#x20B9;20 traday and F&O trades.</p>
        <hr/>
        <div className="row pt-5">
          <div className="col-1"></div>
          <div className="col">
            <img src={pricing0} />
            <h3>Free equity delivery</h3>
            <p>All equity delivery investments (NSE,BSE),<br></br> are absolutely free--&#x20B9;0 brokerage.</p>
          </div>
          <div className="col">
            <img src={intradaytrades}/>
            <h3>Intraday and F&O trades</h3>
            <p>Flast Rs.20 or 0.03%(whichever is lower) per excecuted order on intraday trades across equity,currency,and commodity trades.</p>
          </div>
          <div className="col">
             <img src={pricing0} />
            <h3>Free direct MF</h3>
            <p>All direct mutual funds,<br></br> are absolutely free--&#x20B9;0 brokerage.</p>
          </div>
          <div className="col-1">
          </div>
        </div>
       </div>
     );
}

export default Hero;