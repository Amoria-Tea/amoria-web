import React from 'react';

function Statement(props) {
// ToDo
// For this component make it responsive: Use below link for reference 
//https://redstrawteabar.com/story 

    return (
        <>
        <div className="about-container">
        <div class='flex flex-col sm:flex-row '>
        <div class="ml-1 text-sm sm:text-xl md:text-2xl lg:text-4xl">
        <br/>
        <strong className='poppins-bolded-responsive'> <span className='poppins-bolded-responsive'>We are Amoria Tea..</span> </strong> 
        <br/>
        <p class="mb-2 sm:-mt-4">
        an up and coming environmentally conscious and consumer health conscious bubble tea shop based in NJ. 
        </p>
        </div>
        <div className="man-making-tea-container">
        <img className='tea-making-man' src={"https://i.imgur.com/p8d4neA.jpeg"} alt="man making tea"/>
        </div>
        </div>
        </div>
        </>
    );
}

export default Statement;