import styled from 'styled-components';

export const ContatoStyled = styled.section`
  padding-bottom: 11rem;
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
    color: var(--dark-slate-gray);

    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
  }
`;

export const ContatoGridContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContatoFirstColum = styled.div``;

export const ContatoFormContainer = styled.div`
  form {
    & * {
      width: 100%;
    }
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: center;
    align-items: center;
    input,
    textarea {
      padding: 1rem 1rem;
      border: none;
      border-bottom: 1px solid #b3b3b3;
      background-color: transparent;
    }
    button {
      border: none;
      background-color: var(--dark-slate-gray);
      color: #fff;
      padding: 1rem 0;
      border-radius: 5px;
      font-size: 1.6rem;
      letter-spacing: 2px;
    }
  }
`;

export const ContatoSecondColum = styled.div`
  background-color: hsla(0, 0%, 90%, 0.6);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ContatoTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  a {
    text-decoration: none;
    color: #deb887;
    letter-spacing: 0.7px;
  }
`;
