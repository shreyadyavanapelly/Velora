import React from 'react';
import ceo from '../../assets/nithinKamath.jpg';
function Team() {
    return ( 
        <div className="container mt-5">
            <h2 className="text-center">People</h2>
            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col mt-5 ml-5 text-center">
                    <img src={ceo} alt="CEO" className="img-fluid rounded-circle mb-5 h-75" style={{width:"80%",height:"auto"}}/>
                    <h4>Nithin Kamath
                        <small className="text-muted d-block">Founder and CEO</small>
                    </h4>
                </div>
                <div className="col-1"></div>
                <div className="col mt-3 pt-5 text-muted">
                    <p>Nithin Kamath is the Founder and Chief Executive Officer of Zerodha. He co-founded the company in 2010 with his brother, Nikhil Kamath. Together, they transformed the online brokerage industry in India by introducing a discount broking model.</p>
                    <p>Nithin believes that investing should be accessible, transparent, and affordable for everyone. Under his leadership, Zerodha has focused on customer-first products rather than aggressive marketing. His vision continues to shape the company's long-term growth.</p>
                    <p>He has consistently encouraged the use of technology to simplify investing. Zerodha's modern platforms are designed to be fast, reliable, and easy to use. Innovation remains one of the company's strongest values.</p>
                    <p>Connect on <a href="#">Homepage</a>/<a href="#">TradingQnA</a>/<a href="#">Twitter</a></p>
                </div>
            </div>
            </div>
     );
}

export default Team;