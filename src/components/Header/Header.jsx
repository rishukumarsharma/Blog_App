 
import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  
  const handleMouseEnter = () => {
    setMenuOpen(true);
  };
  
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  }


  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header style={{ backgroundColor: '#008DDA' }} className="py-3 shadoww-full flex justify-between items-center px-2 border border-black drop-shadow-solid">
      <Container>
        <nav className="flex align-items-center justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="hidden ml-auto md:flex gap-4 lg:gap-6 justify-around items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button

                    onClick={() => navigate(item.slug)}
                    //className={`p-4 ${item.active ? 'text-white' : 'text-black'}`}
                    //className="text-white active:text-black"
                    //className={`p-4 ${{isActive} ? 'text-black' : 'text-white'}`}
                    className={`inline-block font-semibold rounded-full transition-all text-xs px-5 py-2 border uppercase hover:no-underline hover:bg-white hover:text-black ${
                      item.active && item.slug === "/"
                        ? " drop-shadow-solid border border-white hover:drop-shadow-solid-extend "
                        : "text-white border-purple hover:border-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          <button
            onMouseEnter={handleMouseEnter}
            
             onClick={toggleMenu}
            className="md:hidden px-2 py-1 text-white"
          >
        
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
          <div
          style={{ backgroundColor: 'rgb(117 98 171/var(--tw-bg-opacity))' }}
            className={`absolute top-16 left-0 flex flex-col justify-items-center w-full rounded-xl px-6 py-5 border gap-1 transform opacity-100 scale-100 ${
              isMenuOpen ? "flex" : "hidden"
            } flex-col lg:hidden lg:mt-0`}
          >
            <Link
              to="/"
              onClick={toggleMenu}
              className="font-semibold rounded-full transition-all text-xs px-5 py-2 uppercase drop-shadow-solid border text-white hover:border-white hover:text-white text-white hover:no-underline hover:bg-pink-400 hover:drop-shadow-solid-extend"
            >
              Home
            </Link>
            <Link
              to="/all-posts"
              onClick={toggleMenu}
              className="font-semibold rounded-full transition-all text-xs px-5 py-2 uppercase drop-shadow-solid border text-white hover:border-white hover:text-black hover:no-underline hover:bg-pink-400 hover:drop-shadow-solid-extend"
            >
              All Posts
            </Link>
            <Link
              to="/add-post"
              onClick={toggleMenu}
              className="font-semibold rounded-full transition-all text-xs px-5 py-2 uppercase drop-shadow-solid border text-white hover:border-white hover:text-black hover:no-underline hover:bg-pink-400 hover:drop-shadow-solid-extend"
            >
              Add Post
            </Link>
            <Link
            onMouseOut={handleMouseLeave} 
              onClick={toggleMenu}
              className="w-full"
            >
              <LogoutBtn />
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
