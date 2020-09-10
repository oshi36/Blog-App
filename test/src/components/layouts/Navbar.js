import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from'../../logo.jpg';

function Navbar() {
    return (
    <NavbarContainer>     
    <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
  <Link className="navbar-brand" to="#">
      <img style={{width:"50px"}} src={logo} alt="logo" />
  </Link>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-article">Add Article</Link>
      </li>
    </ul>
  </div>
</nav>
</NavbarContainer>
);
};

export default Navbar;

const NavbarContainer = styled.div`
background : var(--light-green);
.nav-link{
    color : #fff !important;
    &:hover{
        background: var(--light-green);
    }
}

`;