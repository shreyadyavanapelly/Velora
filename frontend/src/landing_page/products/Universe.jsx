import React from 'react';
import smallcase from '../../assets/smallcaseLogo.png'
import streak from '../../assets/streakLogo.png'
import sensibull from '../../assets/sensibullLogo.svg'
import fundhousezerodha from '../../assets/zerodhaFundhouse.png'
import goldenpi from '../../assets/goldenpiLogo.png'
import dittologo from '../../assets/dittoLogo.png' 
function Universe() {
    return ( 
        <div className="container text-center">
        <p className='mb-5'>Want to know more about ou technology stack?Check out the Zerodha tech blog</p>
        <h1 className='mb-3'>The Zerodha Universe</h1>
        <p className='mb-5'>Extend your trading and ivestment experience even further with our partner platforms</p>
        <div className="row mt-5 pt-5">
            <div className="col">
                <img src={smallcase} style={{width:"85%",height:"auto",marginBottom:"25px"}}/>
                <p className='small text-muted' style={{marginBottom:"100px"}}>Thematic investment platform</p><br></br>
                <img src={fundhousezerodha}style={{width:"85%",height:"auto",marginBottom:"25px"}}/>
                <p className='small text-muted' style={{marginBottom:"100px"}}>Asset management</p>
            </div>
            <div className="col-2"></div>
            <div className="col">
                <img src={streak}style={{width:"85%",height:"auto",marginBottom:"15px"}}/>
                <p className='small text-muted' style={{marginBottom:"100px"}}>Algo & strategy platform</p><br></br>
                <img src={goldenpi}style={{width:"85%",height:"auto",marginBottom:"15px"}}/>
                <p className='small text-muted' style={{marginBottom:"100px"}}>Bonds trading platform</p>
            </div>
            <div className="col-2"></div>
            <div className="col">
                <img src={sensibull}style={{width:"85%",height:"auto",marginBottom:"25px"}}/>
                <p className='small text-muted' style={{marginBottom:"100px"}}>Options trading platform</p><br></br>
                <img src={dittologo}style={{width:"85%",height:"auto",marginBottom:"25px"}}/>
                <p className='small text-muted' style={{marginBottom:"100px"}}>Insurance</p>
            </div>
        </div>
        <button className="btn btn-primary mb-5" style={{width:"20%",margin:"0 auto"}}>Sign Up Now</button>
        </div>
     );
}
export default Universe;