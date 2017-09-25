import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'black',
  }
}

const NavBar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
  </nav>
)

export default NavBar;
