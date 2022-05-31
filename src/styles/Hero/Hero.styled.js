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
      width: 60px;
      height: 3px;
      background-color: #ffc981;
      position: absolute;
      bottom: -2px;
      left: -10px;
    }
    @media screen and (min-width: 375px) and (max-width: 414px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 500px) and (max-width: 768px) {
      font-size: 3rem;
    }
  }
  h1 {
    font-size: 5rem;
    font-weight: bold;
    padding: 1rem;
    color: var(--platinum);
    background: linear-gradient(
      90deg,
      rgba(46, 71, 86, 0.9) 0%,
      rgba(46, 71, 86, 0) 100%
    );
    box-shadow: -20px 15px 1px 1px hsla(49, 82%, 89%, 0.5);

    @media screen and (min-width: 375px) and (max-width: 414px) {
      font-size: 2.4rem;
    }

    @media screen and (min-width: 500px) and (max-width: 768px) {
      font-size: 4rem;
    }
  }
`;
