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
  const {
    isOpen,
    setIsOpen,
    onPageScroll,
    setOnPageScroll,
    navItems,
    setNavItems,
  } = useContext(StateContext);

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      return setOnPageScroll(true);
    } else {
      return setOnPageScroll(false);
    }
  });

  const onLinkClick = (e) => {
    const dataId = parseInt(e.target.getAttribute('data-id'));
    if (dataId >= 0) {
      setNavItems((prev) => {
        const newState = prev.map((item) => {
          if (item.id === dataId) {
            return { ...item, active: true };
          } else {
            return { ...item, active: false };
          }
        });
        return newState;
      });
    } else {
      setNavItems((prev) => {
        const newState = prev.map((item) => {
          if (item.title === 'home') {
            return { ...item, active: true };
          } else {
            return { ...item, active: false };
          }
        });
        return newState;
      });
    }
  };

  return (
    <NavbarStyled onPageScroll={onPageScroll}>
      <NavContainer>
        <NavLogo
          data-id="-1"
          to="home"
          smooth={true}
          onPageScroll={onPageScroll}
          onClick={onLinkClick}
        >
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
          {navItems.map((item) => {
            return (
              <NavItem key={item.id}>
                <NavLink
                  data-id={item.id}
                  onClick={onLinkClick}
                  to={item.title}
                  smooth={true}
                  className={item.active ? 'active' : null}
                  onPageScroll={onPageScroll}
                >
                  {item.title}
                </NavLink>
              </NavItem>
            );
          })}
        </NavMenu>
      </NavContainer>
    </NavbarStyled>
  );
};

export default Navbar;
