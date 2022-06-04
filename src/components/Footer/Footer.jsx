import React from 'react';

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
} from '../../styles/Footer/Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterBrand>
          <h1>Blessed</h1>
        </FooterBrand>
        <FooterNav>
          <FooterLink to="home" className="nav-link">
            Home
          </FooterLink>
          <FooterLink to="sobre" className="nav-link">
            Sobre
          </FooterLink>
          <FooterLink to="atuacao" className="nav-link">
            Atuação
          </FooterLink>
          <FooterLink to="cases" className="nav-link">
            Cases
          </FooterLink>
          <FooterLink to="/contato" className="nav-link">
            Contato
          </FooterLink>
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
    </FooterStyled>
  );
};

export default Footer;
