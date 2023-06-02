import React from 'react';
import 'Components/fade-in.css';
import sellingBoba from '../SiteImg/festivalPicture.jpg';
import mikeSellingBoba from '../SiteImg/sellingTea.jpg';
import groupphoto1 from '../SiteImg/IMG_3890.jpg';
import jakephoto from '../SiteImg/photoJake.jpg';

function Statement(props) {
// ToDo
// For this component make it responsive: Use below link for reference 
//https://redstrawteabar.com/story 

    return (
        <>
        <div className="about-container fade-in">
            <div class='grid grid-cols-1 :grid-cols-2 lg:flex-row sm:justify-center sm:items-center'>
                <div class="ml-1 text-sm sm:text-xl md:text-2xl md:ml-5 md:mt-5 md:mr-5 lg:text-4xl">
                    <br/>
                        <strong className='poppins-bolded-responsive'> <h2 className='poppins-bolded-responsive font-bold'>We are Amoria Tea!</h2> </strong> 
                    <br/>
                        <p class="mb-12 text-center sm:text-center font-light">
                        an up and coming environmentally conscious and experience <br/> oriented bubble tea shop here in NJ. 
                        </p>
                </div>
                <div class="flex justify-center h-full gap-12 sm:p-4  mb-12">
                    <img className='tea-making-man2 rounded-full' id="manSellingTea" src={mikeSellingBoba} alt="man selling tea" />
                    <img className='tea-making-man4 rounded-full' id="manSellingTea" src={groupphoto1} alt="man selling tea" />
                    <img className='tea-making-man rounded-full' id="manSellingTea" src={sellingBoba} alt="man finishing tea"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Statement;