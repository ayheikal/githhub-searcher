import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  const { title, icon } = props;
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link className='btn btn-link' to='/'>
            home
          </Link>
        </li>
        <li>
          <Link className='btn btn-link' to='/about'>
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'github finder',
  icon: 'fab fa-githbu',
};

export default Navbar;
