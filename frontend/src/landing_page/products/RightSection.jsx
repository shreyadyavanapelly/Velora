import React from 'react';
function RightSection({imageurl,heading,text,link}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col mt-5 pt-5">
                    <h1 className="mb-5">{heading}</h1>
                    <p>{text}</p>
                    <a href={link}className="primary text-decoration-none">Learn More <i class="fa-solid fa-arrow-right my-4"></i></a>
                </div>
                <div className="col-1"></div>
                <div className="col">
                    <img src={imageurl}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;