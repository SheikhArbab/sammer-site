import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center py-4' >
      <div className="bg-white rounded-lg shadow m-4 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0 ml-3">
            <li>
              
              <a
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });

                  setScroll(0);
                }
                }
                href="#home" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
          </ul>
        </div>

      </div>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Follow us on{" "}
        <a 
        target='_blank'
        href="https://www.linkedin.com/in/samar-abbas/" className="hover:underline">
          Linkedin
        </a> 
      </span>
    </footer >


  )
}

export default Footer
