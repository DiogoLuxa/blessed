import styled from 'styled-components';

export const HeroStyled = styled.section``;

export const HeroVideoContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const HeroVideoOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: azure;
  background-color: hsla(0, 0%, 0%, 0.6);
  z-index: 5;
`;

export const HeroVideoText = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateX(50%);
  text-align: left;
  z-index: 6;

  @media screen and (max-width: 1024px) {
    width: 80%;
    left: 11%;
    right: 9%;
    transform: translateX(0%);
  }

  span {
    font-weight: 400;
    color: #ffdeb3;
  }

  p {
    align-self: flex-start;
    position: relative;
    font-size: 3.5rem;
    font-weight: 100;
    font-style: italic;
    border-bottom-width: 2px;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    color: var(--platinum);

    &::after {
      content: '';
      width: 45px;
      height: 3px;
      background-color: #ffd166;
      border-radius: 10px;
      position: absolute;
      top: 5px;
      left: 50px;
    }
    @media screen and (min-width: 375px) and (max-width: 414px) {
      font-size: 2rem;

      &::after {
        content: '';
        width: 25px;
        top: 0px;
        left: 30px;
      }
    }

    @media screen and (min-width: 500px) and (max-width: 768px) {
      font-size: 3rem;

      &::after {
        content: '';
        width: 40px;
        top: 0px;
        left: 45px;
      }
    }
  }
  h1 {
    font-size: 5.5rem;
    font-weight: bold;
    padding-left: 1.5rem;
    color: var(--platinum);
    /* box-shadow: -15px 0px 0px 0px hsla(49, 82%, 89%, 0.5); */
    border-left: 15px solid hsla(34, 100%, 85%, 0.5);

    @media screen and (min-width: 375px) and (max-width: 414px) {
      font-size: 3rem;
    }

    @media screen and (min-width: 500px) and (max-width: 768px) {
      font-size: 4rem;
    }
  }
`;
