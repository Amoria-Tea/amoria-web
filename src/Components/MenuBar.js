import React from 'react';
import { Link } from "react-router-dom";

function MenuBar(props) {
    return (
<div className="MenuBar">
    <div class="flex justify-start gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
    <div className='neutral-block'>
    <div class="flex space-x-8">
        <Link to="/">
        <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs opacity-80 hover:opacity-100">
        Signature
        </h2>
        </Link>
        <Link to="./Categories/Brewed">
        <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs opacity-80 hover:opacity-100">
        Brewed
      </h2>
       </Link>
       <Link to="./Categories/Milk">
        <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs opacity-80 hover:opacity-100">
        Milk 
      </h2>
      </Link>
      <Link to="./Categories/Others">
        <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs ">
        Others
      </h2>
      </Link>
    </div>
    </div>
    </div>  
        </div>
    );
}

export default MenuBar;