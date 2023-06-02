import React from 'react';
import Comic from 'Components/AboutComponents/Comic';
  
function ProductInfo(props) {
    return (
         <div class='flex'>
        <div className="about-container-comic fade-in">
        <div class='flex flex-col sm:flex-row-reverse sm:justify-center sm:items-center'>
        <div class="-mt-2 ml-1 text-sm sm:mb-24 sm:text-xl md:mb-30 md:text-2xl lg:text-4xl lg:mb-40">
        <br/>
        <strong className='poppins-bolded-responsive'> <span className="poppins-bolded-responsive"> No. Powders. Ever</span> </strong> 
        <br/>
        <p class="text-sm sm:text-xl md:text-2xl lg:text-4xl sm:-mt-4 mb-2">
        We worked hard to create premium tea blends that pair perfectly with freshly made fruit purees and quality milks.
        </p>
        </div>
        <div className="comic-container">
        <Comic></Comic>
        </div>
        </div>
        </div>
        </div>
    );
}

export default ProductInfo;

// export default ProductInfo;Header text : No. Powders. Ever
// We worked hard to create premium tea blends that pair perfectly with freshly made fruit purees and quality milks.