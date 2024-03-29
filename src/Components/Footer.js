import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './SiteImg/Amoria-Tea-Cup-Logos-Vertical.svg';

function Footer(props) {
  const date = new Date();
  const year = date.getFullYear();
    return (
      <footer class="footerbgc">
  <div
    class="relative max-w-screen px-4 py-2 mx-auto sm:px-6 lg:px-8 lg:pt-8"
  >
    <nav class="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
        <h2 class="sr-only" id="footer-navigation">Footer navigation</h2>

        <ul
          class="flex flex-wrap justify-center gap-4 lg:justify-center md:gap-8 lg:gap-12"
        >
          <li>
            <Link to="/" class="text-gray-700 transition hover:text-gray-700/75">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" class="text-gray-700 transition hover:text-gray-700/75">
              About
            </Link>
          </li>
          <li>
            <Link to="/Menu" class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Menu
            </Link>
          </li>
           <li>
            <Link to="/contact" class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Contact
            </Link>
          </li>

        </ul>
      </nav>
  
      <div class="flex sm:flex-row flex-col items-center justify-between mt-8">
      <div class="flex text-xs sm:text-sm  items-center text-center text-gray-400 lg:text-left">
      <img class="h-12 mb-4 mr-2" src={Logo} alt="Logo"/> 
      See you soon!
      </div>
      <p class="text-xs sm:text-sm  text-center text-gray-400 lg:text-center">
       Copyright &copy; {year}
      </p>
      <a href="mailto: mike@amoriatea.com" class="text-xs sm:text-sm text-center text-gray-400 sm:text-right"> mike@amoriatea.com
      </a>
    </div>
    </div>
</footer>

    );
}

export default Footer;