import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
<header>
  <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="menu">
      <div className="md:block">
        <nav aria-labelledby="header-navigation">
          <h2 className="sr-only" id="header-navigation">Header navigation</h2>
        <div className="nav-ul-container">
          <ul className="flex items-center gap-5 text-2xl">
            <li className="underlined">
              <Link to="/Menu" className="transition hover:text-black/75">
                Menu
              </Link>
            </li>

            <li className="underlined">
              <Link to="/about" className="transition hover:text-black/75">
                About
              </Link>
            </li>
            <li className="underlined">
              <Link to="/contact" className="transition hover:text-black/75">
               Contact 
              </Link>
            </li>
          </ul>
        </div>
        </nav>
      </div>
      
      {/* <div class="flex items-center gap-4">
        <div class="block md:hidden">
          <button
            className="hamburger-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hamburger-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div> */}
    </div>
  </div>
</header>
    );
}

export default Nav;