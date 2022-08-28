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
        </div>
    );
}

export default Menu; 
