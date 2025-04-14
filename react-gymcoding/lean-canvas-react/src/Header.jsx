import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <ul>
        {/* <li onClick={() => navigate('/')}>HOME</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contact')}>Contact</li> */}
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
      </ul>
    </header>
  );
}

export default Header;
