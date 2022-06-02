import React, { useContext, useEffect } from 'react';

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
  const { isOpen, setIsOpen, onPageScroll, setOnPageScroll } =
    useContext(StateContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        return setOnPageScroll((prev) => true);
      } else {
        return setOnPageScroll((prev) => false);
      }
    });
  }, []);

  return (
    <NavbarStyled onPageScroll={onPageScroll}>
      <NavContainer>
        <NavLogo to="/" onPageScroll={onPageScroll}>
          Blessed
          {/* <NavLogoImg img={logo}></NavLogoImg> */}
        </NavLogo>
        <Burger onClick={() => setIsOpen((prev) => !prev)}>
          <Line
            isOpen={isOpen}
            position={'primeira'}
            onPageScroll={onPageScroll}
          />
          <Line
            isOpen={isOpen}
            position={'segunda'}
            onPageScroll={onPageScroll}
          />
          <Line
            isOpen={isOpen}
            position={'terceira'}
            onPageScroll={onPageScroll}
          />
        </Burger>
        <NavMenu>
          <NavItem>
            <NavLink to="home" className="active" onPageScroll={onPageScroll}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="sobre" onPageScroll={onPageScroll}>
              Sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="atuacao" onPageScroll={onPageScroll}>
              Atuação
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="cases" onPageScroll={onPageScroll}>
              Cases
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contato" onPageScroll={onPageScroll}>
              Contato
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </NavbarStyled>
  );
};

export default Navbar;
