import styled from 'styled-components';

export const CasesStyled = styled.section`
  padding: 11rem 0;
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
    color: var(--dark-slate-gray);

    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
  }
`;

export const CasesGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media screen and (min-width: 375px) and (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CasesGridBox = styled.div`
  width: 100%;
  height: 400px;
  @media screen and (min-width: 375px) and (max-width: 540px) {
    height: 200px;
  }
`;

export const CasesGridImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CasesGridOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 10%, 0.15);
`;
