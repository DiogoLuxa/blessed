import styled from 'styled-components';

import { Link as LinkS } from 'react-scroll';

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: var(--dark-slate-gray);
  color: #fff;
`;

export const FooterContainer = styled.div`
  /* border: 1px solid red; */
  max-width: 1366px;
  margin: 0 auto;
  padding: 7rem 2rem 7rem 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  row-gap: 5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBrand = styled.div`
  /* background-color: salmon; */
`;

export const FooterNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const FooterLink = styled(LinkS)`
  cursor: pointer;
`;

export const FooterSocials = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;
