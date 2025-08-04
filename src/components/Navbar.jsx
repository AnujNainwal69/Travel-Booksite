import { useState } from "react"; // importing useState
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { PiPeaceFill } from "react-icons/pi"; // npm install react-icons --save

const Navbar = () => {
  {
    /* usestate used  when screen is medium then it changes to hamburger through this use state logic */
  }

  const [isOpen, setIsOpen] = useState(false);

  {
    /* usestate for hover and underline under only used section , by default hover underline in home till state is not changed */
  }

  const [activeLink, setActiveLink] = useState("home");

  return (
    <header>
      <nav>
        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-2">
            {/* First icon peacehub */}
            <PiPeaceFill size={60} className="text-emerald-600" />
            <div className="flex items-center text-3xl text-emerald-600 font-bold">
              {" "}
              PeaceHub{" "}
            </div>
          </div>

          <div className="space-x-6 text-xl hidden md:flex items-center text-gray-600">
            <a
              href="#home"
              onClick={() => setActiveLink("home")}
              className={`hover:text-emerald-600 ${
                activeLink === "home"
                  ? "text-emerald-600 underline underline-offset-4 decoration-2"
                  : "text-gray-600"
              }`}
            >
            Home
            </a>
            <a
              href="#services"
              onClick={() => setActiveLink("services")}
              className={`hover:text-emerald-600 ${
                activeLink === "services"
                  ? "text-emerald-600 underline underline-offset-4 decoration-2"
                  : "text-gray-600"
              }`}
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setActiveLink("about")}
              className={`hover:text-emerald-600 ${
                activeLink === "about"
                  ? "text-emerald-600 underline underline-offset-4 decoration-2"
                  : "text-gray-600"
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setActiveLink("contact")}
              className={`hover:text-emerald-600 ${
                activeLink === "contact"
                  ? "text-emerald-600 underline underline-offset-4 decoration-2"
                  : "text-gray-600"
              }`}
            >
              Contact
            </a>
            <button className="p-2 bg-emerald-600 rounded-xl text-white inline-flex items-center justify-center hover:bg-gray-600">
              Book Now
            </button>
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {/* use of ternary operator here to show icons accordingly*/}
            {isOpen ? (
              <MdClose size={25} className="text-gray-600" />
            ) : (
              <GiHamburgerMenu size={25} className="text-emerald-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu (only visible if isOpen is true) */}

        {isOpen && (
          <div className="flex flex-col items-start px-8 pb-4 space-y-4 text-xl text-gray-600 md:hidden">
            <a href="#home" className="hover:text-emerald-600 ">
              Home
            </a>
            <a href="#home" className="hover:text-emerald-600 ">
              Services
            </a>
            <a href="#home" className="hover:text-emerald-600 ">
              About
            </a>
            <a href="#home" className="hover:text-emerald-600 ">
              Contact
            </a>
            <button className="p-2 bg-emerald-600 rounded-xl text-white w-full">
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
    
  );
};

export default Navbar;
