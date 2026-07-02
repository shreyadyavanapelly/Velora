import React from 'react';
import ecosystem from '../../assets/ecosystem.png';
function Stats() {
    return ( 
        <div className="container ">
            <div className="row" >
                <div className="col-7">
                    <h2 className="mb-5">Trust with confidence</h2>
                    <h4 className="mb-3">Customer-first always</h4>
                    <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with &#x20B9;3.5+ lakh crores worth of equity investments</p>
                    <h4 className="mb-3">No spam or gimmicks</h4>
                    <p className="text-muted">No gimmicks,spam,"gamification",or annoying push notifications.High quality apps that you use at your pace,the way you like</p>
                    <h4 className="mb-3">The Zerodha universe</h4>
                    <p className="text-muted">Not just an app,but a whole ecosystem.Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4 className="mb-3">Do better with money</h4>
                    <p className="text-muted">Maximize your wealth with our expert financial advice and tools designed to help you make informed investment decisions.</p>
                </div>
                <div className="col-5 m-top-5">
                    <img src={ecosystem} style={{ width: '85%' }} alt="Ecosystem" />
                </div>
            </div>
        </div>
     );
}

export default Stats;