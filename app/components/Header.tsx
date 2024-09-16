'use client';
import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
type HeaderProps = {
  type?: string;
};

const Header = ({type}: HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node)
    ) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div
        className={` bg-transparent z-40 fixed top-0 left-0 w-full transition-all duration-300 ${isScrolled ? ' bg-white bg-opacity-100 shadow-md   ' : 'bg-opacity-100'}`}
      >
        <div
          className={` py-2 flex justify-between items-center xl:max-w-[1350px]  mx-auto  2xl:max-w-[1440px] px-4 lg:px-10 `}
        >
          <div className="flex items-center bg-white px-2  rounded-sm justify-center md:py-[1px]">
            <a href="/">
              <img
                src="https://drive.google.com/file/d/1TBRq7DN1B_j73rYX7ep-sBD8bV827Ig7/view?usp=sharing"
                alt="Logo"
                className="h-8 rounded-full "
              />
            </a>
          </div>

          <nav className="hidden md:flex space-x-8 text-base lg:text-xl gap-2">
            <Link
              href="/"
              className={`relative text-${isScrolled ? 'black' : type} font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-${isScrolled ? 'black' : type} after:transition-all after:duration-300 hover:after:w-full`}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className={`relative text-${isScrolled ? 'black' : type} font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-${isScrolled ? 'black' : type} after:transition-all after:duration-300 hover:after:w-full`}
            >
              Sermons
            </Link>
            <Link
              href="/pricing"
              className={`relative text-${isScrolled ? 'black' : type} font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-${isScrolled ? 'black' : type} after:transition-all after:duration-300 hover:after:w-full`}
            >
                Offering
            </Link>
            <Link
              href="/#faq"
              className={`relative text-${isScrolled ? 'black' : type} font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-${isScrolled ? 'black' : type} after:transition-all after:duration-300 hover:after:w-full`}
            >
              Contact
            </Link>
          </nav>

          {/* <div className="group hidden md:block">
            <Link
              href="https://play.google.com/store/apps/details?id=solutions.digitalumbrella.ooulet&hl=en_US"
              className={`relative inline-block px-5 lg:px-9 py-2 lg:py-[10px] rounded-full transition-all duration-500 ease-in-out ${isScrolled ? 'bg-[#EC0B43] text-black' : 'bg-black'}`}
            >
              <span className={`relative z-10 text-lg text-white `}>
                Download App
              </span>
            </Link>
          </div> */}


          <button
            className={`md:hidden text-black focus:outline-none`}
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/*  Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed  inset-0 z-40 flex">
          <div className="w-1/2 bg-black opacity-30"></div>
          <div
            ref={mobileMenuRef}
            className="w-1/2 h-full bg-white z-50 transition-transform transform translate-x-0 md:hidden flex flex-col justify-between "
          >
            <div>
              <div className="container mx-auto px-4 py-2">
                <button
                  className="text-black focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className="px-4 py-2 space-y-2">
                <Link
                  href="/"
                  className="block text-black font-medium brandtexthover"
                >
                  Home
                </Link>
                <Link
                  href="/pricing"
                  className="block text-black font-medium brandtexthover"
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="block text-black font-medium brandtexthover"
                >
                  Contact Us
                </Link>
                <Link
                  href="/#faq"
                  className="block text-black font-medium brandtexthover"
                >
                  FAQs
                </Link>
              </nav>
            </div>
            <div className="px-4 py-2 flex justify-center flex-col items-center gap-3">
              <div className="flex items-center">
                <img
                  src="/image/logo.webp"
                  alt="Logo"
                  className="h-7"
                />
              </div>
              <div className="w-full">
                <Link
                  href="https://play.google.com/store/apps/details?id=solutions.digitalumbrella.ooulet&hl=en_US"
                  className="text-sm flex justify-center items-center bg-[#EC0B43] text-white px-3 py-2 rounded-full hover:bg-blue-700"
                >
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
