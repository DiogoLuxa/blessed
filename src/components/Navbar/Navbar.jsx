import React, { useContext } from 'react';

// context
import { StateContext } from '../../context/StateProvider';

// styled
import {
  NavbarStyled,
  NavContainer,
  NavLogo,
  NavLogoImg,
  Burger,
  Line,
  NavMenu,
  NavItem,
  NavLink,
} from '../../styles/Navbar/Navbar.styled';

// assets/images
// import logo from './../../assets/images/logo.png';

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(StateContext);

  return (
    <NavbarStyled>
      <NavContainer>
        <NavLogo to="/">
          Blessed
          {/* <NavLogoImg img={logo}></NavLogoImg> */}
        </NavLogo>
        <Burger onClick={() => setIsOpen((prev) => !prev)}>
          <Line isOpen={isOpen} position={'primeira'} />
          <Line isOpen={isOpen} position={'segunda'} />
          <Line isOpen={isOpen} position={'terceira'} />
        </Burger>
        <NavMenu>
          <NavItem>
            <NavLink to="sobre" className="active">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="sobre">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="atuacao">Atuação</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="cases">Cases</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contato">Contato</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </NavbarStyled>
  );
};

export default Navbar;
