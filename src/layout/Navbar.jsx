import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { PiPeaceFill } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current path
  const currentPath = location.pathname;

  return (
    
    <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b bg-white-95'>
      <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-2">
            <PiPeaceFill size={60} className="text-[#2C3E50]" />
            <div className="text-3xl text-[#2C3E50] font-bold">PeaceHub</div>
          </div>

          {/* Desktop Nav */}
          <div className="space-x-6 text-xl hidden md:flex items-center text-gray-600">
            {["home", "services", "about", "contact"].map((page) => (
              <Link
                key={page}
                to={`/${page}`}
                className={`capitalize hover:text-[#2C3E50] ${
                  currentPath === `/${page}`
                    ? "text-[#2C3E50] underline underline-offset-4 decoration-2"
                    : "text-gray-600"
                }`}
              >
                {page}
              </Link>
            ))}
            <button className="p-2 bg-[#eb6607] rounded-xl text-white hover:bg-[#0b1906]">
              Book Now 
              
            </button>
          </div>

          {/* Hamburger Icon */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <MdClose size={25} className="text-[#2C3E50]" />
            ) : (
              <GiHamburgerMenu size={25} className="text-[#2C3E50]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col items-start px-8 pb-4 space-y-4 text-xl text-gray-600 md:hidden">
            {["home", "services", "about", "contact"].map((page) => (
              <Link
                key={page}
                to={`/${page}`}
                onClick={() => setIsOpen(false)}
                className={`capitalize hover:text-[#2C3E50] ${
                  currentPath === `/${page}`
                    ? "text-[#2C3E50] underline underline-offset-4 decoration-2"
                    : "text-gray-600"
                }`}
              >
                {page}
              </Link>
            ))}
            <button className="p-2 bg-text-[#2C3E50] rounded-xl text-white w-full">
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>

    
  );
};

export default Navbar;
