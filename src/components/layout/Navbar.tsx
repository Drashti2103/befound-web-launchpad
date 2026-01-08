import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      if (isMenuOpen && nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavClick = (path: string) => {
    if (location.pathname === path && path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" label="Home" onClick={() => handleNavClick('/')} />
            <NavLink to="/about" label="About Us" onClick={() => handleNavClick('/about')} />
            <NavLink to="/services" label="Services" onClick={() => handleNavClick('/services')} />
            <DropdownMenu
              label="Industries"
              items={[
                { to: '/industries/real-estate', label: 'Real Estate' },
                { to: '/industries/dental', label: 'Dental' },
                { to: '/industries/restaurant', label: 'Restaurant' },
              ]}
            />
            <NavLink to="/projects" label="Portfolio" onClick={() => handleNavClick('/projects')} />
            <NavLink to="/blog" label="Blog" onClick={() => handleNavClick('/blog')} />
            <NavLink to="/case-studies" label="Case Studies" onClick={() => handleNavClick('/case-studies')} />
            <NavLink to="/contact" label="Contact" onClick={() => handleNavClick('/contact')} />
          </div>
        </div>
        
        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-2 invisible'
          } mt-4 bg-white py-4 px-4 rounded-lg shadow-lg absolute left-4 right-4`}
        >
          <div className="flex flex-col space-y-4">
            <NavLink to="/" label="Home" onClick={() => handleNavClick('/')} />
            <NavLink to="/about" label="About Us" onClick={() => handleNavClick('/about')} />
            <NavLink to="/services" label="Services" onClick={() => handleNavClick('/services')} />
            <div className="flex flex-col space-y-2 pl-4">
              <p className="text-sm font-semibold text-gray-600">Industries</p>
              <NavLink to="/industries/real-estate" label="Real Estate" onClick={() => handleNavClick('/industries/real-estate')} />
              <NavLink to="/industries/dental" label="Dental" onClick={() => handleNavClick('/industries/dental')} />
              <NavLink to="/industries/restaurant" label="Restaurant" onClick={() => handleNavClick('/industries/restaurant')} />
            </div>
            <NavLink to="/projects" label="Portfolio" onClick={() => handleNavClick('/projects')} />
            <NavLink to="/blog" label="Blog" onClick={() => handleNavClick('/blog')} />
            <NavLink to="/case-studies" label="Case Studies" onClick={() => handleNavClick('/case-studies')} />
            <NavLink to="/contact" label="Contact" onClick={() => handleNavClick('/contact')} />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const NavLink = ({ to, label, onClick }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-gray-800 font-medium hover:text-befoundOrange transition-colors duration-200 ${
        isActive ? 'text-befoundOrange' : ''
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

interface DropdownMenuProps {
  label: string;
  items: { to: string; label: string }[];
}

const DropdownMenu = ({ label, items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = items.some(item => location.pathname.startsWith(item.to));

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1 text-gray-800 font-medium hover:text-befoundOrange transition-colors duration-200 ${
          isActive ? 'text-befoundOrange' : ''
        }`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div
        className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block px-4 py-2 text-gray-800 hover:bg-befoundOrange/10 hover:text-befoundOrange transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
