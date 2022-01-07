import React from 'react';

import styled from 'styled-components';
import { device } from '../responsive';

const InfoTwo = () => {
  return (
    <>
      <InfoTwoSection>
        <InfoTitle>
          Think <span>Netflix</span> for Hermits
        </InfoTitle>
        <InfoText>Enjoy the hermits like you never have before!</InfoText>
      </InfoTwoSection>
    </>
  );
};

export default InfoTwo;

const InfoTwoSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1000px;

  @media ${device.mobileL} {
    margin-top: 550px;
  }

  @media ${device.laptop} {
    margin-top: 525px;
  }
`;

const InfoTitle = styled.h1`
  font-size: 68px;
  text-align: center;
  margin-top: 1em;

  span {
    color: var(--red);
  }

  @media ${device.mobileL} {
    font-size: 60px;
    line-height: 60px;
    text-align: center;
    padding: 10px;
    margin: 0.5em 0;
  }
`;

const InfoText = styled.p`
  font-family: 'Teko', sans-serif;
  font-size: 48px;
  text-align: center;
  padding: 0.8rem;
  margin-bottom: 2em;

  @media ${device.mobileL} {
    font-size: 44px;
    line-height: 44px;
    margin-bottom: 0.5em;
  }
`;
