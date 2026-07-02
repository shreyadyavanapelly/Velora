import React from 'react';
import googleplay from '../../assets/googlePlayBadge.svg'
import appstore from '../../assets/appstoreBadge.svg'
function LeftSection({ imageurl, heading, text, link1, link2, link3, link4 }) {
    return (
        <div className="container m-5 p-5">
            <div className="row">
                <div className="col">
                    <img src={imageurl} />
                </div>
                <div className="col-1"></div>
                <div className="col mt-5 pt-5">
                    <h1>{heading}</h1>
                    <p>{text}</p>
                    <div className="row">
                        <div className="col-3">
                            <a href={link1} className="text-primary text-decoration-none">Try demo <i class="fa-solid fa-arrow-right my-4"></i></a>
                            <br></br>
                            <a href={link3} className="mb-5"><img src={googleplay} /></a>
                        </div>
                        <div className="col-3">
                            <a href={link2} className="text-primary text-decoration-none">Learn More <i class="fa-solid fa-arrow-right my-4"></i></a>
                            <br></br>
                            <a href={link4}><img src={appstore} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;