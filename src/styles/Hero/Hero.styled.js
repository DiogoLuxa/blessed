import styled from 'styled-components';

export const HeroStyled = styled.section`
  width: 100%;
`;

export const HeroVideoContainer = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  overflow: hidden;
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: red;
`;

export const HeroVideoOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: hsla(0, 0%, 0%, 0.5);
`;

export const HeroVideoText = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(50%);
  text-align: center;

  span {
    font-weight: 400;
    color: hsla(49, 82%, 89%, 1);
  }

  h1 {
    color: var(--platinum);
    font-size: 5rem;
    /* text-transform: capitalize; */
    font-weight: bold;
    background: linear-gradient(
      90deg,
      rgba(46, 71, 86, 0.9) 0%,
      rgba(46, 71, 86, 0.3) 100%
    );
    /* box-shadow: -20px 15px 1px 1px hsla(36, 100%, 90%, 0.5); */
    box-shadow: -20px 15px 1px 1px hsla(49, 82%, 89%, 0.5);
    padding: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 3.5rem;
      text-align: left;
    }
  }
`;
