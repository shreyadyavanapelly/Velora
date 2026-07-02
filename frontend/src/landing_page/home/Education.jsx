import React from 'react';
import education from '../../assets/education.svg';
function Education() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={education} alt="Varsity" />
                </div>
                <div className="col">
                    <h2 className="mb-3 fs-4">Free and open market education</h2>
                    <p>Varsity,the largest online stock market education book in the world covering everything from basics to advanced trading</p>
                    <a href='#' style={{ textDecoration: 'none',marginBottom:"1rem" }}>Varsity<i class="fa-solid fa-arrow-right"></i></a>
                    <p className="mt-5">Trading Q&A, the most active trading and investment community in India for all your market related queries</p>
                    <a href='#' style={{ textDecoration: 'none',marginBottom:"1rem" }}>Trading Q&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;