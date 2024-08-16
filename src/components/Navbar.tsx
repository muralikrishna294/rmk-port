import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo>Murali Krishna Rambarki</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/experience">Prof Profile </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
       
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* <NavLink to="/about">About</NavLink> */}
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`;

export default Navbar;
