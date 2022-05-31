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
  color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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

  span {
    font-weight: 400;
    color: hsla(49, 82%, 89%, 1);
  }

  p {
    font-size: 3.5rem;
    font-weight: 100;
    border-bottom: 2px solid #ffc5a7;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    align-self: flex-start;
    color: #ffc5a7;
    margin-bottom: 1.5rem;
    font-style: italic;

    @media screen and (min-width: 375px) and (max-width: 414px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 500px) and (max-width: 768px) {
      font-size: 3rem;
    }
  }
  h1 {
    color: var(--platinum);
    font-size: 5rem;
    font-weight: bold;
    background: linear-gradient(
      90deg,
      rgba(46, 71, 86, 0.9) 0%,
      rgba(46, 71, 86, 0) 100%
    );
    box-shadow: -20px 15px 1px 1px hsla(49, 82%, 89%, 0.5);
    padding: 1rem;

    @media screen and (min-width: 375px) and (max-width: 414px) {
      font-size: 2.7rem;
      /* text-align: left; */
    }

    @media screen and (min-width: 500px) and (max-width: 768px) {
      font-size: 4rem;
      /* text-align: left; */
    }
  }
`;
