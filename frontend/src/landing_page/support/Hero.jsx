import React from 'react';
function Hero() {
    return ( 
        <div className="container-fluid mb-5" style={{width:"100%",backgroundColor:"rgb(44, 75, 229)",color:"white",padding:"0 150px 0 150px"}}>
            <div className="row p-5 w-full">
                <div className="col text-start">
                    <h4 className='fs-5'>Support Portal</h4>
                </div>
                <div className="col text-end">
                    <a href="#" style={{color:"white"}}>Track Tickets</a>
                </div>
                </div>
                <div className="row p-5 text-start">
                    <div className="col">
                        <h4 className='fs-4'>Search for an answer or browse help topics to create a ticket</h4>
                        <input placeholder='Eg: how do i activate F&O,why is my order getting rejected.'style={{width:"500px"}} className='p-3 my-3'/><br></br>
                        <a href="" style={{color:"white"}}>Track account opening</a>&nbsp;&nbsp;<a href=""  style={{color:"white"}}>Track segment activation</a>&nbsp;&nbsp; <a href=""style={{color:"white"}}>Intraday margins</a>&nbsp;&nbsp; <a href=""  style={{color:"white"}}>Kite user manual</a>
                    </div>
                    <div className="col-2"></div>
                    <div className="col">
                        <h4 className='fs-4'>Featured</h4>
                        <ol>
                            <li><a href="" style={{color:"white"}}>Current Takeovers and Delisting - January 2024</a></li>
                            <li><a href="" style={{color:"white"}}>Latest Intraday leverages - MIS & CO</a></li>
                        </ol>
                    </div>
                </div>
        </div>
     );
}

export default Hero;