import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  const { title, icon } = props;
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fab fa-github-square'></i> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
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
