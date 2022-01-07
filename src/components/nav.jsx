import React from 'react';

import logo from '../images/HermitPlusLogo.png';
import facebook from '../images/facebook-f-brands.svg';
import twitter from '../images/twitter-brands.svg';

import styled from 'styled-components';
import { device } from '../responsive';

const LandingNav = () => {
  console.log(
    'Thank you for your support! If you found this and want to help, please reach out. If you are looking for a designer / developer who knows how to make this kind of project, I would love to help you!'
  );
  console.log(
    'This site is built in ReactJs and hosted in an AWS S3 bucket, served with AWS Cloudfront. Original design in Figma. Current project uses Slack and ClickUp to keep organized. Code is found on Github. Created by Mason Roberts, Developer3027'
  );
  return (
    <Header>
      <Wrap>
        <LogoBox>
          <Logo src={logo} alt='hermit craft' />
        </LogoBox>
        <SocialDiv>
          <a
            href='https://www.facebook.com/hermitsplus'
            target='_blank'
            rel='noreferrer'>
            <SocialBox>
              <img src={facebook} alt='Facebook' />
            </SocialBox>
          </a>
          <a
            href='https://twitter.com/hermit_plus'
            target='_blank'
            rel='noreferrer'>
            <SocialBox>
              <img src={twitter} alt='Twitter' />
            </SocialBox>
          </a>
        </SocialDiv>
      </Wrap>
    </Header>
  );
};

export default LandingNav;

const Header = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-dark-color);
  padding: 0 1em;
  width: 100%;
  height: 70px;

  @media ${device.mobileL} {
    justify-content: center;
    height: 50px;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 25%);

  @media ${device.tablet} {
    width: 100%;
    justify-content: center;
  }
`;

const LogoBox = styled.div`
  display: block;
`;

const Logo = styled.img`
  height: 38px;
  margin-left: 1em;

  @media ${device.tablet} {
    display: none;
    opacity: 0;
    width: 0;
  }

  @media ${device.mobileL} {
    display: none;
    opacity: 0;
    width: 0;
  }
`;

const SocialDiv = styled.div`
  display: flex;
`;

const SocialBox = styled.div`
  background-color: var(--light-green);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  width: 25px;
  height: 40px;
  margin-left: 1em;

  img {
    width: 15px;
  }
`;
