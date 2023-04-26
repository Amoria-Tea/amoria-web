import React from 'react';
import 'Components/fade-in.css';
import sellingBoba from '../SiteImg/festivalPicture.jpg'
import mikeSellingBoba from '../SiteImg/sellingTea.jpg'
function Statement(props) {
// ToDo
// For this component make it responsive: Use below link for reference 
//https://redstrawteabar.com/story 

    return (
        <>
        <div className="about-container fade-in">
            <div class='flex flex-col sm:flex-row sm:justify-center sm:items-center'>
                <div class="ml-1 text-sm sm:text-xl md:text-2xl md:ml-5 md:mt-5 md:mr-5 lg:text-4xl">
                    <br/>
                        <strong className='poppins-bolded-responsive'> <span className='poppins-bolded-responsive'>We are Amoria Tea..</span> </strong> 
                    <br/>
                        <p class="mb-2 sm:-mt-4">
                        an up and coming environmentally conscious and experience oriented bubble tea shop here in NJ. 
                        </p>
                </div>
                <div class="sm:flex w-full" id="tea-making-man">
                    <img className='tea-making-man' id="manSellingTea" src={sellingBoba} alt="man finishing tea"/>
                    <img className='tea-making-man2' id="manSellingTea" src={mikeSellingBoba} alt="man selling tea" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Statement;