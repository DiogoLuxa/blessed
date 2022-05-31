import React from 'react';

// styles
import {
  SobreStyled,
  SobreFirstColumn,
  SobreSecondColumn,
} from '../../styles/Sobre/Sobre.styled';

// assets/images
import modelos1 from './../../assets/images/modelos-1.png';

const Sobre = () => {
  return (
    <SobreStyled id="sobre">
      <SobreFirstColumn>
        <h1>Sobre a Blessed</h1>
        <p>
          A Blessed Eventos é uma agência especializada em eventos corporativos.
          Com experiência de 15 anos através de sua gestora{' '}
          <span>Andréia Scherner</span>, trabalhamos com excelência, trazendo
          resultados concretos para nossos clientes e contribuindo para o
          sucesso total do evento realizado.
        </p>
      </SobreFirstColumn>
      <SobreSecondColumn>
        <img src={modelos1} alt="" />
      </SobreSecondColumn>
    </SobreStyled>
  );
};

export default Sobre;
