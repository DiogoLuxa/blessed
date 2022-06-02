import styled from 'styled-components';

export const AtuacaoStyled = styled.section`
  background-color: var(--dark-slate-gray);
`;

export const AtuacaoContainer = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 11rem 2rem;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const AtuacaoFirstColumn = styled.div`
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 540px) {
    grid-column-start: 1;
  }
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
    color: var(--platinum);

    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
  }
  p {
    font-size: 2rem;
    font-weight: 200;
    color: var(--platinum);
  }
`;

export const AtuacaoSecondColumn = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;

  display: grid;
  grid-template-columns: repeat(3, min-content);
  justify-content: flex-start;
  align-content: center;
  gap: 3rem;

  @media screen and (max-width: 540px) {
    gap: 1rem;
    justify-content: flex-start;
  }

  img {
    width: 12rem;
    border: 7px solid white;
    border-radius: 5px;
    padding: 1rem;

    @media screen and (max-width: 768px) {
      width: 7.5rem;
    }
  }
`;
