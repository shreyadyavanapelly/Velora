import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import kite from "../../assets/kite.png"
import coin from "../../assets/coin.png"
import varsity from "../../assets/varsity.png"
import console from "../../assets/console.png"
import kiteconnect from "../../assets/kiteconnect.png"
function ProductsPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection imageurl={kite} heading="Kite" text="Our trading platform is designed to provide a fast, reliable, and intuitive experience for investors. With real-time market data and advanced charting tools, users can trade confidently from any device." link1="" link2="" link3="" link4=""/>
        <RightSection imageurl={console} heading="Console" text="Access useful market insights, educational resources, and financial updates to make informed investment decisions. Learning and investing go hand in hand for long-term success." link=""/>
        <LeftSection imageurl={coin} heading="Coin" text="Invest in a wide range of stocks listed on major Indian exchanges. The platform offers a simple interface that helps users buy, sell, and monitor their investments with ease." link1="" link2="" link3="" link4=""/>
        <RightSection imageurl={kiteconnect} heading="Kite Connect API" text="We believe that investing should be simple, transparent, and accessible to everyone. Our platform focuses on creating a seamless user experience while eliminating unnecessary complexity in financial services." link=""/>
        <LeftSection imageurl={varsity} heading="Varsity Mobile" text="Diversify your portfolio by investing in Exchange Traded Funds (ETFs) and bonds. These investment options help reduce risk while providing opportunities for steady and balanced returns." link1="" link2="" link3="" link4=""/>
        <Universe/>
        </>
    );
}
export default ProductsPage;
