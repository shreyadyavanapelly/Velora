import React from 'react';
function Hero() {
    return ( 
        <div className="container text-center mt-5 p-3">
            <h2 className="mt-4">We pioneered the discount broking model in India.</h2>
            <h2>Now,we are breaking ground with our technology.</h2>
            <div className="row mt-5 text-muted fs-6">
                 <hr className="m-0"/>
                <div className="col text-start mt-4">
                    <p>Investing should be simple, affordable, and accessible to everyone. Our platform is inspired by the idea of making financial markets easy to understand and use. We strive to deliver a seamless experience for both beginners and experienced investors.</p>
                    <p>Our mission is to empower individuals by providing intuitive tools for investing and trading. We believe that technology can simplify complex financial decisions. Every feature is designed with transparency and ease of use in mind.</p>
                    <p>We are committed to providing the best possible service to our customers and continuously improving our platform to meet their evolving needs.</p>
                    <p>Modern technology is at the heart of our platform. By building fast, responsive, and reliable applications, we aim to deliver a smooth user experience across devices. Innovation drives every improvement we make.</p>
                </div>
                <div className="col-1"></div>
                <div className="col text-start mt-4 mb-5">
                    <p>We are dedicated to educating our users about investing and trading. Our platform offers resources, tutorials, and insights to help individuals make informed financial decisions. We believe that knowledge is key to successful investing.</p>
                    <p>Successful investing begins with continuous learning. We encourage users to improve their financial knowledge through educational resources, practical insights, and informed decision-making. Growth comes with understanding.</p>
                    <p>Every product is designed with the user in mind. From intuitive navigation to responsive design, we prioritize creating a platform that is simple, efficient, and enjoyable to use. Customer satisfaction is our greatest motivation.</p>    
                </div>
            </div>
        </div>
     );
}

export default Hero;