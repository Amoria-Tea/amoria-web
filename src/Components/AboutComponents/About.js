import React from 'react';
import MileStones from './MileStones';
import Statement from './Statement';
import ProductInfo from './ProductInfo'

//scroll into view then fade in 

function About(props) {
    return (
        <div>
            <MileStones></MileStones>
            <Statement></Statement>
            {/* <Reviews></Reviews> */}
            <ProductInfo></ProductInfo>
            {/* <FAQ></FAQ> */}
        </div>
    );
}

export default About;