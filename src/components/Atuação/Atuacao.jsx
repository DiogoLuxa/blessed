import React from 'react';

//styles
import {
  AtuacaoStyled,
  AtuacaoContainer,
  AtuacaoFirstColumn,
  AtuacaoSecondColumn,
} from '../../styles/Atuacao/Atuacao.styled';

// assets/images
import glass from '../../assets/images/glass.svg';
import work from '../../assets/images/work.svg';
import fashion from '../../assets/images/fashion.svg';
import burger from '../../assets/images/burger.svg';
import ticket from '../../assets/images/ticket.svg';
import games from '../../assets/images/games.svg';

const Atuacao = () => {
  return (
    <AtuacaoStyled id="atuação">
      <AtuacaoContainer>
        <AtuacaoFirstColumn>
          <h1>Áreas de Atuação</h1>
          <p>
            Atuamos em feiras, congressos, blitz, desfiles, showroom, catálogos
            e eventos corporativos em geral. Além de modelos recepcionistas,
            oferecemos serviço completo de buffet, incluindo garçons, copeiras e
            também seguranças.
          </p>
        </AtuacaoFirstColumn>
        <AtuacaoSecondColumn>
          <img src={glass} alt="" />
          <img src={work} alt="" />
          <img src={fashion} alt="" />
          <img src={burger} alt="" />
          <img src={ticket} alt="" />
          <img src={games} alt="" />
        </AtuacaoSecondColumn>
      </AtuacaoContainer>
    </AtuacaoStyled>
  );
};

export default Atuacao;
