import React from 'react';
function Brokerage() {
    return ( 
        <div className="container text-center">
            <hr/>
            <div className="row mt-5">
                <div className="col-7">
                    <h4 className='mb-4' style={{color:"blue"}}>Brokerage Calculator</h4>
                    <ul className='text-start' style={{lineHeight:"40px"}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-5">
                    <h4 className='mb-4' style={{color:"blue"}}>List of charges</h4>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;