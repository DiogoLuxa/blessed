import styled from 'styled-components';

export const SobreStyled = styled.section`
  padding: 11rem 0;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 7rem 0;
    grid-template-columns: 1fr;
  }
`;

export const SobreFirstColumn = styled.div`
  span {
    font-style: italic;
    color: #ffb24d;
  }
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
    color: var(--dark-slate-gray);

    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
  }
  p {
    font-size: 2rem;
    font-weight: 200;
  }
`;

export const SobreSecondColumn = styled.div`
  img {
    width: 100%;
    position: relative;
  }
`;
