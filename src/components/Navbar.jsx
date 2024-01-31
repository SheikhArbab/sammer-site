import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToggleContext } from '../context/ToggleContext'

const Header = () => {

  const { toggle, setToggle } = useContext(ToggleContext);

  const [scrolling, setScrolling] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can adjust the scrolling behavior if needed
    });

    // Update the scroll state if it's stored in a state variable
    setScroll(0);
  };

  return (
    <header className={`${scrolling ? 'bg-black/75 border border-black ' : 'glass'} text-gray-600 body-font fixed w-full top-0 duration-300 transition-all z-10 ${toggle && 'bottom-0'}`}>
      <div className="container flex flex-wrap p-5 flex-row items-center justify-between  mx-auto">
        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 ">
          <img src="./vite.svg" alt="" />
          <span className="ml-3 text-xl text-white font-semibold ">Ai ChatBot</span>
        </Link>
        <nav className={`hidden flex-col gap-3 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 md:flex-row	md:flex flex-wrap items-center text-base justify-center`}>
          <button
            onClick={handleLinkClick}
            className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">Home</button>
          <a href={'#about'} className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">About</a>
          <a href={`#services`} className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">Services</a>
          <a href={'#blog'} className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">Blog</a>
          <a href={'#testimonials'} className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">Testimonials</a>
          <a href={'#faqs'} className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">FAQs</a>
        </nav>

        {toggle &&
          <nav className={`w-full flex flex-col absolute left-16 top-24 h-full gap-3 font-semibold`}>
            <button
              onClick={handleLinkClick}
              className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">Home</button>
            <a href={'#about'} className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">About</a>
            <a href={`#services`} className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">Services</a>
            <a href={'#blog'} className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">Blog</a>
            <a href={'#testimonials'} className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">Testimonials</a>
            <a href={'#faqs'} className="mr-5 hover:text-gray-300 duration-300 transition-all text-white">FAQs</a>
          </nav>
        }

        <div className='flex gap-1'>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  ">
            Button
          </button>
          <label className="hamburger md:hidden">
            <input
              defaultChecked={toggle}
              onClick={() => setToggle(!toggle)}
              type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>
        </div>

      </div>
    </header>
  )
}

export default Header;
