import React, { useContext } from 'react';

// context
import { StateContext } from '../../context/StateProvider';

// icons
import { IconContext } from 'react-icons';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

// styles
import {
  FooterStyled,
  FooterContainer,
  FooterBrand,
  FooterNav,
  FooterLink,
  FooterSocials,
  FooterCopyright,
} from '../../styles/Footer/Footer.styled';

const Footer = () => {
  const { navItems, setNavItems } = useContext(StateContext);

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
    <FooterStyled>
      <FooterContainer>
        <FooterBrand to="home" smooth={true} onClick={onLinkClick}>
          Blessed
        </FooterBrand>
        <FooterNav>
          {navItems.map((item) => {
            return (
              <FooterLink
                key={item.id}
                data-id={item.id}
                onClick={onLinkClick}
                to={item.title}
                smooth={true}
              >
                {item.title}
              </FooterLink>
            );
          })}
        </FooterNav>
        <FooterSocials>
          <IconContext.Provider value={{ color: '#fff', size: '3rem' }}>
            <a
              href="https://www.instagram.com/agenciablessed/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/AGENCIABLESSED/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </IconContext.Provider>
        </FooterSocials>
      </FooterContainer>
      <FooterCopyright>
        <p>
          Copyright © 2022{' '}
          <a href="https://www.linkedin.com/in/diogo-tadeu/" target="_blank">
            Diogo Luxa
          </a>
          . Todos os direitos reservados.
        </p>
      </FooterCopyright>
    </FooterStyled>
  );
};

export default Footer;
