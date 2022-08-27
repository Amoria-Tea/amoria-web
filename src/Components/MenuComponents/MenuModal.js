import React, { useState } from 'react';
import Modal from 'react-modal';
import Menu from './Menu';

function MenuModal(props) {    
 const [modalIsOpen, setIsOpen] = React.useState(false);

 function closeModal() {
    setIsOpen(false);
  }

    return (
        <div class="min-w-full">
            <div class="flex justify-center item-center">
            <button onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel mb-4" width="48" height="48" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="8" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="8" y2="12"></line>
            <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
            </button>
            </div>
            <img className="modal-menu" src={"https://i.imgur.com/J3bG81h.png"}/>
            <div class="flex justify-center item-center">
            <button onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel mt-4" width="48" height="48" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="8" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="8" y2="12"></line>
            <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
            </button>
            </div>
        </div>
    );
}

export default MenuModal;