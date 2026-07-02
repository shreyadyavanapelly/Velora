import React from 'react';
import icon from '../assets/logo.svg';
function Footer() {
    return ( 
        <footer style={{ backgroundColor: "#f8f9fa",padding: "40px 0 0 0" }}>
       <div className="container">
        <div className="row">
            <div className="col">
                <img src={icon} style={{ width: '50%' }} alt="icon" />
                <p> &#xA9; 2010-2026, Not Zerodha Broking Ltd.<br></br>
                All rights reserved.</p><br></br>
                <a href="#" style={{ textDecoration: 'none',color:'inherit' }}><i class="fa-brands fa-twitter mr-2"></i></a>
                <a href="#" style={{ textDecoration: 'none',color:'inherit' }}><i class="fa-brands fa-facebook m-2"></i></a>
                <a href="#" style={{ textDecoration: 'none',color:'inherit' }}><i class="fa-brands fa-instagram mx-2"></i></a>
                <a href="#" style={{ textDecoration: 'none',color:'inherit' }}><i class="fa-brands fa-linkedin mx-2"></i></a>
                <a href="#" style={{ textDecoration: 'none',color:'inherit' }}><i class="fa-brands fa-youtube mx-2"></i></a>
            </div>
            <div className="col">
                <ul style={{ listStyleType: 'none'}}>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Company</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>About</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Products</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Pricing</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Careers</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Zerodha.tech</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Press & media</a></li>
                </ul>
            </div>
            <div className="col">
                <ul style={{ listStyleType: 'none'}}>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Support</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Contact</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Support portal</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Z-Connect blog</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>List of charges</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Downloads & resources</a></li>
                </ul>
            </div>
            <div className="col">
                <ul style={{ listStyleType: 'none'}}>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Account</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Open an account</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>Fund transfer</a></li>
                    <li className="mb-3"><a href="#" style={{ textDecoration: 'none',color:'inherit' }}>60 day challenge</a></li>
                </ul>
            </div>
        </div>
        <p className="text-muted mt-4">Zerodha is India's leading discount brokerage platform, offering seamless investing and trading experiences through innovative technology. With a focus on transparency, low-cost pricing, and user-friendly platforms, Zerodha has transformed the way millions of people participate in the financial markets.</p>
        <p className="text-muted">Built with a customer-first approach, Zerodha provides advanced trading tools, insightful analytics, and educational resources to help investors make informed financial decisions. Its modern platforms are designed to deliver speed, reliability, and simplicity for traders and long-term investors alike.</p>
       </div>
       </footer>
     );
}

export default Footer;