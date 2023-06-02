import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  const [underline, SetUnderLine] = useState(false);

  const onThisNavComponent = () => {
    SetUnderLine(!underline);
    console.log(SetUnderLine(!underline));
  };

  return (
    <header>
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="menu">
          <div className="md:block">
            <nav aria-labelledby="header-navigation">
              <h2 className="sr-only" id="header-navigation">
                Header navigation
              </h2>
              <div className="nav-ul-container">
                <ul className="flex items-center gap-12 text-sm sm:text-2xl">
                  <li className="">
                    <NavLink
                      onClick={onThisNavComponent}
                      to="/Menu"
                      // className=" "
                      className={({ isActive }) =>
                        isActive
                          ? "font-bold"
                          : "transition hover:text-black/75 active:font-extrabold"
                      }
                    >
                      Menu
                    </NavLink>
                  </li>

                  <li className="">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "font-bold"
                          : "transition hover:text-black/75 active:font-extrabold"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to="/visitus"
                      className={({ isActive }) =>
                        isActive
                          ? "font-bold"
                          : "transition hover:text-black/75 active:font-extrabold"
                      }
                    >
                      Visit Us
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? "font-bold"
                          : "transition hover:text-black/75 active:font-extrabold"
                      }
                    >
                      Contact
                    </NavLink>
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
