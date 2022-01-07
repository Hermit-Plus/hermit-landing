import React from 'react';

import mumboCard from '../images/mumboCard.png';
import gemCard from '../images/GeminiTayCard.png';
import pearlCard from '../images/pearlCard.png';
import bdubsCard from '../images/bdubsCard.png';

import { device } from '../responsive';
import styled from 'styled-components';

const LandingInfo = () => {
  return (
    <>
      <InfoSection>
        <Wrap>
          <div>
            <InfoTitle>Hermitcraft fans Rejoice!</InfoTitle>
            <InfoSubTitle>
              All the hermits gathered in one place! Enjoy the hermits like
              never before. Like Netflix, but with the hermits! Watch every
              episode, every hermit. Follow them easily from the video
              information, create your own collection of favorites, select from
              characters or seasons!
            </InfoSubTitle>
            <InfoSubTitle>
              This web app takes after Disney Plus but features only the
              hermits. It uses the same YouTube url that you use to normally
              watch them. The graphics, design, and general feel is custom
              created with an eye for the hermits we love. Join me in this
              celebration of them.
            </InfoSubTitle>
          </div>
          <InfoCards>
            <MobileCards>
              <InfoCardImg src={mumboCard} alt='mumbo jumbo information' />
              <InfoCardImg src={gemCard} alt='Gemini Tay information' />
            </MobileCards>

            <InfoCardImg src={pearlCard} alt='Gemini Tay information' />
            <InfoCardImg src={bdubsCard} alt='Gemini Tay information' />
          </InfoCards>
          <div>
            <InfoSubTitle>
              I love the hermits and this project will have a lot to offer. I
              believe this is a great concept and hope you do as well. It has
              great potential and offers so much for everyone! If you love the
              hermits, follow the project on Facebook and twitter. Thank you for
              your support.
            </InfoSubTitle>
          </div>
        </Wrap>
      </InfoSection>
    </>
  );
};

export default LandingInfo;

const InfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  padding-top: 2em;
  background: var(--light-blue);
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 900px;
`;

const InfoTitle = styled.h1`
  font-size: 64px;
  line-height: 64px;
  text-align: center;
  margin: 1em 0;
  color: var(--light-yellow);
  text-shadow: 2px 2px 2px #000;

  @media ${device.mobileL} {
    font-size: 46px;
    line-height: 46px;
  }
`;

const InfoSubTitle = styled.p`
  font-size: 28px;
  line-height: 30px;
  text-align: center;
  padding: 0 0.5em;
  margin-bottom: 1.5em;
  color: var(--burnt);
  /* text-shadow: 2px 2px 2px #000; */

  @media ${device.mobileL} {
    font-size: 28px;
    line-height: 28px;
  }
`;

const MobileCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    display: none;
  }
`;

const InfoCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;

  @media ${device.laptopL} {
    flex-wrap: wrap;
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const InfoCardImg = styled.img`
  max-width: 300px;

  &:nth-of-type(even) {
    margin-top: 5rem;
  }

  @media ${device.mobileL} {
    width: 275px;

    &:nth-of-type(even) {
      margin-top: 0;
    }
  }
`;
