import React from 'react';
function Pricing() {
    return ( 
        <div className="container m-5">
            <div className="row">
                <div className="col-5">
                    <h2 className="mb-5">Unbeatable pricing</h2>
                    <p>We believe in providing the best value to our customers. That's why we offer competitive pricing without compromising on quality.</p>
                    <a href="#" style={{ textDecoration: 'none' }}>See pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                    <div className="row text-center">
                        <div className="col border p-3">
                            <h1>&#x20B9;0</h1>
                            <p className="mt-3">Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col border p-3">
                            <h1>&#x20B9;20</h1>
                            <p className="mt-3">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;