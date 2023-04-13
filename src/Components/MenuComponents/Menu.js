import React, { useState, useEffect, useRef } from "react";
import Toppings from "./Toppings";
import Drinks1 from "./Drinks1";
// import "Components/fade-in.css";
// import Modal from "react-modal";
// import FsLightbox from 'fslightbox-react';

const products = {
  drinks1: [
    { description: "Hi" },
    { description: "Bye" },
    { description: "Cool" },
    { description: "Andrew" },
    { description: "is" },
    { description: "cool" },
  ],
  drinks2: [{}, {}],
  drinks3: [{}, {}],
  drinks4: [{}, {}],
  toppings: [
    { description: "Hi" },
    { description: "Bye" },
    { description: "Cool" },
    { description: "Andrew" },
    { description: "is" },
    { description: "cool" },
  ],
};

function Menu(props) {
  //   const [toggler, setToggler] = useState(false);
  // const [products, setProducts] = useState([])
  const [page, setPage] = useState(1);

  return (
    // <div className="menu-container fade-in">
    //   <div class="flex justify-center mb-4">
    //     <img
    //       class="w-screen h-full sm:w-full sm:h-full md:w-10/12 md:h-10/12 lg:w-8/12 lg:h-8/12 mt-9"
    //       src={"https://i.imgur.com/oolIQW4.png"}
    //       alt="Menu"
    //     />
    //   </div>
    // </div>
    <>
      <ul class="flex justify-evenly">
        <li>
          <button onClick={() => setPage(1)}>Drinks</button>
        </li>
        <li>
          <button onClick={() => setPage(2)}>Toppings</button>
        </li>
      </ul>
      <div>
        {page === 1 && <Drinks1 drinks={products.drinks1} />}
        {page === 2 && <Toppings toppings={products.toppings} />}
      </div>
    </>
  );
}

export default Menu;
