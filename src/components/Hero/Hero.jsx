import React from 'react';

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
  return (
    <HeroStyled id="home">
      <HeroVideoContainer>
        <HeroVideo
          autoPlay
          playsInline
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
