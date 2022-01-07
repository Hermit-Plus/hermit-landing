import React from 'react';
// import { Link } from 'react-router-dom';

import logo from '../images/HermitPlusLogo.png';

import styled from 'styled-components';
import { device } from '../responsive';

const LandingNav = () => {
  return (
    <Header>
      <Wrap>
        <LogoBox>
          <Logo src={logo} alt='hermit craft' />
        </LogoBox>
        {/* <SignLink to='/hermit-plus'>
          <SignInBox>
            <h3>Sign Up</h3>
          </SignInBox>
        </SignLink> */}
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
    margin-left: 0;
  }

  @media ${device.mobileL} {
    margin-left: 0;
  }
`;

// const SignInBox = styled.div`
//   background-color: var(--light-green);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 8px;
//   width: 300px;
//   height: 50px;

//   @media ${device.tablet} {
//     display: none;
//   }

//   @media ${device.mobileL} {
//     display: none;
//     opacity: 0;
//     width: 0;
//   }
// `;

// const SignLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   text-decoration: none;
//   color: var(--text-main);
//   font-size: 22px;
//   margin-right: 3em;

//   @media ${device.tablet} {
//     display: none;
//   }

//   @media ${device.mobileL} {
//     display: none;
//   }
// `;
