import React from 'react';

import bg from '../images/minecraft_full_bg.jpg';
import bendLogo from '../images/HermitPlusBend.png';

import styled from 'styled-components';
import { device } from '../responsive';

const Hero = () => {
  return (
    <>
      <HeroSection className='mobile-hero desktop-hero'>
        <HeroOverlay></HeroOverlay>
        <LogoWrapper>
          <HeroLogo src={bendLogo} alt='Hermit Craft' />
        </LogoWrapper>
      </HeroSection>
    </>
  );
};

export default Hero;

const HeroSection = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  height: 720px;

  @media ${device.desktop} {
    height: 115vh;
  }
`;

const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  background: linear-gradient(
    15deg,
    var(--light-blue) 10%,
    rgba(255, 255, 255, 0)
  );

  @media ${device.desktop} {
    background: linear-gradient(
      15deg,
      var(--light-blue) 30%,
      rgba(255, 255, 255, 0)
    );
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 80px;
`;

const HeroLogo = styled.img`
  margin-top: -110vh;
  max-width: 702px;

  @media ${device.desktop} {
    width: 100%;
  }

  @media ${device.laptopL} {
  }

  @media ${device.laptop} {
    width: 502px;
  }

  @media ${device.tablet} {
    width: 465px;
  }

  @media ${device.mobileL} {
    width: 318px;
  }
`;
