import React from 'react';
import largestBroker from '../../assets/largestBroker.svg';
import pressLogos from '../../assets/pressLogos.png';
function Awards() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 mb-5">
                    <img className="m-5" src={largestBroker} alt="largest broker"/>
                </div>
                <div className="col-6 mt-5">
                    <h2>Largest stock broker in India</h2>
                    <p className="mb-4">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                   <div className="row">
                    <div className="col-6">
                        <ul>
                            <li className="mb-2">Futures and Options</li>
                            <li className="mb-2">Commodity derivatives</li>
                            <li className="mb-2">Currency derivatives</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li className="mb-2">Stocks & IPOs</li>
                            <li className="mb-2">Direct mutual funds</li>
                            <li className="mb-2">Bonds and debentures</li>
                        </ul>
                    </div>
                   </div>
                   <img className="mt-5" src={pressLogos} alt="Press Logos" />
                </div>
            </div>
        </div>
     );
}

export default Awards;