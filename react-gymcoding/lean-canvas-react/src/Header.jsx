import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { useState } from 'react';
function Header() {
  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    { id: 'about', label: 'About', icon: <FaInfoCircle />, to: '/about' },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, to: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 bg-gray-800 text-white px-4">
      <div className="container mx-auto flex justify-between items-center h-14">
        <div>
          <Link to="/" className="text-xl font-bold">
            Lean Canvas
          </Link>
        </div>
        <nav className="hidden sm:flex space-x-4">
          {navItems.map(item => (
            <NavLink key={item.id} to={item.to} className="hover:text-gray-300">
              {item.label}
            </NavLink>
          ))}
        </nav>
        {/* <nav className="space-x-4">
          <a href="#" className="hover:text-gray-300">
            home
          </a>
          <a href="#" className="hover:text-gray-300">
            about
          </a>
          <a href="#" className="hover:text-gray-300">
            contact
          </a>
        </nav> */}
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars />
        </button>
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-4">
          짐코딩 강의
        </button>
      </div>
      {/*Mobile Menu*/}
      <aside
        className={`md:hidden fixed top-0 left-0 w-64 h-ful bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          {navItems.map(item => (
            <NavLink key={item.id} to={item.to} className="hover:text-gray-300">
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      {/* <ul>
        {/* <li onClick={() => navigate('/')}>HOME</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contact')}>Contact</li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
    </header>
  );
}

export default Header;
