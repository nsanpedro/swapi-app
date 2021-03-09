import React from 'react';
import { Navbar } from 'react-bootstrap';
import { IMG_URL, NAVBAR_COLOR } from '../../config/config';

const NavbarComponent = () => {
  const navBarBrand = (
    <Navbar.Brand>
      <img
        src={IMG_URL}
        alt={'logo'}
        className='my-1 mx-4'
        style={{ maxWidth: '100px' }}
      />
    </Navbar.Brand>
  );

  const nav = (
    <Navbar style={{ backgroundColor: NAVBAR_COLOR }}>{navBarBrand}</Navbar>
  );

  return nav;
};

export default NavbarComponent;
