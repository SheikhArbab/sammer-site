
 
import { Button } from "@/components/ui/button"
import { Logo, MobileMenu, DropDown } from "@/components/index"
import { navLinks } from '@/constants/index'
import { useEffect, useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";



const Header = () => {
 


  const {pathname} = useLocation()  

  console.log(pathname);
  
  

  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && 'glass py-2'} fixed inset-x-0 z-50 duration-300 transition-all`}>


      <nav className="py-2.5 ">
        <div className="flex flex-wrap justify-between items-center container mx-auto px-4 ">
          <Logo color={true} />
          <div className="flex items-center lg:order-2">

            <Link to={'/contact-us'} className="hidden lg:flex">
              <Button className="bg-Tblue hover:bg-TDarkBlue hidden sm:block">Contact Us</Button>
            </Link> 
            <HiOutlineMenuAlt3 color='white' className='font-bold text-4xl cursor-pointer lg:hidden' onClick={() => { setIsOpen(!isOpen) }} />
               

            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
 
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {
                navLinks.length > 0 && navLinks.map((v, i) => (
                  <li key={i}  className={`${v.link == pathname ? 'text-Tblue' : 'nav text-white'}  cursor-pointer capitalize duration-300 transition-all relative before:h-1 before:bg-Tblue before:absolute before:-bottom-1 before:duration-300 before:w-0 before:transition-all before:left-0 before:rounded-full hover:before:w-full hover:text-TLightBlue group`}>
                   <Link to={v.link} className='w-full h-full'> {v.title}</Link>
                    {v.menu && <DropDown />}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header


