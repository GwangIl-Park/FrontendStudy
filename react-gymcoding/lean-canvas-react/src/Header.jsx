import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className='bg-gray-800 text-white px-4'>
      <div className='container mx-auto flex justify-between items-center h-14'>
        <div>Lean Canvas</div>
        <nav className='space-x-4'>
          <a href="#" className='hover:text-gray-300'>home</a>
          <a href="#" className='hover:text-gray-300'>about</a>
          <a href="#" className='hover:text-gray-300'>contact</a>
        </nav>
        <button>짐코딩 강의</button>
      </div>
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
