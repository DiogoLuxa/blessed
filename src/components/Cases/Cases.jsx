import React from 'react';

// styles
import {
  CasesStyled,
  CasesGridContainer,
  CasesGridBox,
  CasesGridImg,
  CasesGridOverlay,
} from '../../styles/Cases/Cases.styled';

import fotosCases from '../../assets/images/fotosCases';

const Cases = () => {
  return (
    <CasesStyled id="cases">
      <h1>Cases</h1>
      <CasesGridContainer>
        {fotosCases.map((item) => {
          return (
            <CasesGridBox key={item.id}>
              <CasesGridImg src={item.url}>
                <CasesGridOverlay />
              </CasesGridImg>
            </CasesGridBox>
          );
        })}
      </CasesGridContainer>
    </CasesStyled>
  );
};

export default Cases;
