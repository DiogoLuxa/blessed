import React, { useRef, useEffect } from 'react';

// styles
import {
  HeroStyled,
  HeroVideoContainer,
  HeroVideo,
  HeroVideoOverlay,
  HeroVideoText,
} from '../../styles/Hero/Hero.styled';

// assets/videos
import video from '../../assets/videos/hero.mp4';

const Hero = () => {
  const videoElement = useRef();

  // useEffect(() => {
  //   videoElement.current.play();
  // }, []);
  return (
    <HeroStyled id="home">
      <HeroVideoContainer>
        <HeroVideo
          ref={videoElement}
          autoPlay
          loop
          muted
          src={video}
          type="video/mp4"
          preload="metadata"
        />
        <HeroVideoOverlay />
        <HeroVideoText>
          <p>Blessed Eventos</p>
          <h1>
            Transformando <span>experiências</span> em memórias{' '}
            <span>inesquecíveis.</span>
          </h1>
        </HeroVideoText>
      </HeroVideoContainer>
    </HeroStyled>
  );
};

export default Hero;
