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
  margin-bottom:0;
  margin-left:37px;
  margin-right:0;
  margin-top:30px;
  position:absolute;
  right:0;
  top:0;

  @media ${device.tablet} {
  margin-bottom:0;
  margin-left:37px;
  margin-right:0;
  margin-top:30px;
  }
  .scm-logo {
    height: 55px;
    width: 55px;
  }
  #wewater-illustration {
    display: none;
    visibility: hidden;
  }

  @media ${device.tablet} {
    #wewater-illustration {
      display: block;
      visibility: visible;
    }
  }

`;
interface StripesProps {
  left: string;
  right: string;
  top: string;
}

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
    return (
      <HoverContainer large={false} containerId="scm-container">
        <SCMCardContainer>
          <LogoSCM />
          <Stripes left="unset" right="0" top="0">
            <Stripe stripeColor="#14E8AF" translateX={150} />
            <Stripe stripeColor="#B1FFDA" translateX={0} />
            <Stripe stripeColor="#75EA96" translateX={250} />
          </Stripes>
          <Stripes left="-37px" right="unset" top="200px">
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
