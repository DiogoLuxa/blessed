import styled, { css } from 'styled-components';

// router
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavbarStyled = styled.nav`
  background-color: var(--platinum);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1366px;
  padding: 0 2rem;
`;

export const NavLogo = styled(LinkR)`
  color: var(--dark-slate-gray);
  text-decoration: none;
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
`;

export const NavLogoImg = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Burger = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Line = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    height: 5px;
    background-color: var(--dark-slate-gray);
    border-radius: 10px;
    ${(props) => {
      if (props.isOpen && props.position === 'primeira') {
        return css`
          transform: rotate(-45deg) translate(-9px, 5px);
        `;
      }
      if (props.isOpen && props.position === 'segunda') {
        return css`
          width: 0;
          opacity: 0;
        `;
      }
      if (props.isOpen && props.position === 'terceira') {
        return css`
          transform: rotate(45deg) translate(-9px, -5px);
        `;
      }
    }}
    transition: all .5s ease-in-out;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 3rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled(LinkS)`
  cursor: pointer;
  height: 80px;
  display: flex;
  align-items: center;
  font-weight: 500;

  &.active {
    border-bottom: 5px solid var(--dark-slate-gray);
  }
`;
