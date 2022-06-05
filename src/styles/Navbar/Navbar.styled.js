import styled, { css } from 'styled-components';

// router
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavbarStyled = styled.nav`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: all 0.5s ease-in-out;
  ${(props) => {
    if (props.onPageScroll) {
      return css`
        background-color: hsla(0, 0%, 90%, 1);
      `;
    }
  }}
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1366px;
  padding: 0 2rem;
`;

export const NavLogo = styled(LinkS)`
  cursor: pointer;
  color: var(--platinum);
  text-decoration: none;
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  ${(props) => {
    if (props.onPageScroll) {
      return css`
        color: var(--dark-slate-gray);
      `;
    }
  }}
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
    border-radius: 10px;
    background-color: var(--platinum);

    ${(props) => {
      if (props.onPageScroll) {
        return css`
          background-color: var(--dark-slate-gray);
        `;
      }
    }}
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
  text-transform: capitalize;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: var(--platinum);
  ${(props) => {
    if (props.onPageScroll) {
      return css`
        color: var(--dark-slate-gray);
      `;
    }
  }}

  transition: all .2s ease-in-out;
  &.active {
    border-bottom: 5px solid var(--platinum);

    ${(props) => {
      if (props.onPageScroll) {
        return css`
          border-bottom: 5px solid var(--dark-slate-gray);
        `;
      }
    }}
  }
`;
