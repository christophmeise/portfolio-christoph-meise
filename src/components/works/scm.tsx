import { StaticImage } from 'gatsby-plugin-image';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { device } from '../../theme/theme';
import { LogoSCM } from '../clientLogos';
import HoverContainer from '../selectedWorkItem';

export const SCMCardContainer = styled.div`
  bottom:0;
  display: flex;
  flex-direction: column;
  height:auto;
  justify-content: space-between;
  left:0;
  overflow: hidden;
  position:absolute;
  right:0;
  top:0;

  h4{
    color: ${(props) => props.theme.colors.fontBlack};
    font-size: 28px;
    font-weight: 800;
    line-height: 40px;
    margin: 0;
    text-align: center;
    z-index: 100;
    padding: 0px 10px;
  }

  .scm-logo {
    height: 35px;
    width: 55px;
    margin-left: 30px;
    margin-top:30px;
  }
  .scm-img {
    bottom: 0;
    left: 50%;
    max-width: 100%;
    position: absolute;
    transform: translateX(-50%);
    width: 100%;

    @media ${device.tablet} {
      width: 85%;
    }
  }

`;
interface StripesProps {
  left: string;
  right: string;
  top: string;
}

export const SCMTextContainer = styled.div`
  position: relative;
  z-index: 100;
`;

export const Stripes = styled.div<StripesProps>`
  left: ${(props) => props.left};
  overflow: hidden;
  position: absolute;
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  transform: skewY(-15deg) translateY(0);
  transform-origin: 100% 0;
`;

interface StripeProps {
  stripeColor: string;
  translateX: number;
}

export const Stripe = styled.div<StripeProps>`
  background: ${(props) => props.stripeColor};
  height: 40px;
  transform: translateX(${(props) => props.translateX}px);
  width: 350px;
`;
export default class SCMCard extends PureComponent {
  render() {
    let stripesLeft = '-37px';
    let stripedTop1 = '100px';
    let stripedTop2 = '260px';
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      stripesLeft = '-24px';
      stripedTop1 = '160px';
      stripedTop2 = '320px';
    }
    return (
      <HoverContainer
        large={false}
        containerId="scm-container"
        href="https://www.scmonline.de/"
        backgroundColor="#FFFFFF"
        radialStartColor="#FCFCFC"
        radialEndColor="#FEFEFE"
      >
        <SCMCardContainer>
          <SCMTextContainer>
            <LogoSCM />
            <h4>School for Communication and Management</h4>
          </SCMTextContainer>
          <Stripes left="unset" right="0" top={stripedTop1}>
            <Stripe stripeColor="#14E8AF" translateX={150} />
            <Stripe stripeColor="#B1FFDA" translateX={0} />
            <Stripe stripeColor="#75EA96" translateX={250} />
          </Stripes>
          <Stripes left={stripesLeft} right="unset" top={stripedTop2}>
            <Stripe stripeColor="#14E8AF" translateX={0} />
            <Stripe stripeColor="#75EA96" translateX={-275} />
          </Stripes>
          <StaticImage
            src="../../../static/images/works/scm.png"
            alt="School for Communication and Management Device Example"
            height={374}
            width={511}
            quality={100}
            className="scm-img"
            loading="eager"
            objectPosition="center"
            placeholder="none"
          />
        </SCMCardContainer>
      </HoverContainer>
    );
  }
}
