import React, { useState }  from 'react';
import 'Components/fade-in.css';
import MenuModal from './MenuModal';
import Modal from 'react-modal'
import FsLightbox from 'fslightbox-react';

function Menu(props) {
 const [toggler, setToggler] = useState(false);

    return (
        <div className="menu-container fade-in">
        <div class="flex justify-center">
        <img class="w-screen h-full sm:w-full sm:h-full md:w-10/12 md:h-10/12 lg:w-8/12 lg:h-8/12 mt-9" src={"https://i.imgur.com/oolIQW4.png"} alt="Menu"/>
        </div>
        <div class="flex justify-center item-center h-20">
        </div>
            <div class="flex justify-center item-center">
            </div>
        <div class="flex justify-center items-center mb-8">
        <button onClick={() => setToggler(!toggler)}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-check" width="64" height="64" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="10" cy="10" r="7"></circle>
        <path d="M21 21l-6 -6"></path>
        <path d="M7 10l2 2l4 -4"></path>
        </svg>
            </button>
            <FsLightbox
            toggler={toggler}
            sources={[
            'https://i.imgur.com/oolIQW4.png'
            ]}
            />
            </div>
        </div>
    );
}

export default Menu; 