import { StaticImage } from 'gatsby-plugin-image';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { device } from '../../theme/theme';
import { LogoStellMichEin } from '../clientLogos';
import HoverContainer from '../selectedWorkItem';

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.fontBlack};
  border-radius: 40px;
  box-shadow: 0 0 1px 0px ${(props) => props.theme.colors.fontBlack} inset, 0 0 1px 0px ${(props) => props.theme.colors.fontBlack};
  display: flex;
  justify-content: center;
  margin-bottom: 6px;
  margin-right: 6px;

  span {
    color: ${(props) => props.theme.colors.fontBlack};
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    padding: 3px 14px;
  }
`;
export const TextContainer = styled.div`
  max-width: 500px;
  position: relative;
  z-index: 100;
`;
export const StellmicheinContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 48px 24px;

  @media ${device.tablet} {
    padding: 48px 48px;
  }
  #logo-sme {
    height: 55px;
    width: 55px;
  }
  .talentpool-img {
    display: none;
    visibility: hidden;
  }

  @media ${device.tablet} {
    .talentpool-img {
      display: block;
      visibility: visible;
      width: 550px;
      min-width: 550px;
    }
  }

  h3 {
    color: ${(props) => props.theme.colors.fontBlack};
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.03em;
    margin-bottom: 16px;
    margin-top: 0;
    span {
      color: #FDC228;
    }
  }
  p {
    color: ${(props) => props.theme.colors.fontBlack};
    font-size: 17px;
    font-weight: normal;
    line-height: 32px;
  }
`;
interface StripesProps {
  left: string;
  right: string;
  top: string;
}
interface StripeProps {
  stripeColor: string;
  translateX: number;
}
const Stripes = styled.div<StripesProps>`
  left: ${(props) => props.left};
  position: absolute;
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  transform: skewY(-15deg) translateY(0);
  transform-origin: 100% 0;
  .small-stripe {
    width: 400px;
    @media ${device.tablet} {
      width: 800px;
    }
  }
  .very-small-stripe {
    width: 300px;
    @media ${device.tablet} {
        width: 600px;
    }
  }
`;
const Stripe = styled.div<StripeProps>`
  background: ${(props) => props.stripeColor};
  height: 40px;
  transform: translateX(${(props) => props.translateX}px);
  width: 500px;
  @media ${device.tablet} {
    height: 95px;
    width: 1000px;
  }
`;

export default class StellmicheinCard extends PureComponent {
  render() {
    let stripesLeft = '-37px';
    let stripedTop1 = '20px';
    let stripedTop2 = '260px';
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      stripesLeft = '-24px';
      stripedTop1 = '50px';
      stripedTop2 = '320px';
    }
    return (
      <HoverContainer large containerId="stellmichein-container" href="https://stellmichein.de/">
        <StellmicheinContainer>
          <Stripes left="unset" right="50px" top={stripedTop1}>
            <Stripe className="very-small-stripe" stripeColor="#FDC228" translateX={400} />
            <Stripe stripeColor="#FFEAB4" translateX={100} />
            <Stripe className="small-stripe" stripeColor="#E5C570" translateX={650} />
          </Stripes>
          <TextContainer>
            <LogoStellMichEin />
            <h3>
              STELL-MICH-EIN
              <br />
              <span>Talentpool</span>
            </h3>
            <p>
              The talents network for young professionals and
              companies in the communications industry.
            </p>

            <TagContainer>
              <Tag>
                <span>Next.js</span>
              </Tag>
              <Tag>
                <span>Opensearch</span>
              </Tag>
              <Tag>
                <span>AWS</span>
              </Tag>
              <Tag>
                <span>Headless CMS</span>
              </Tag>
              <Tag>
                <span>Redux.js</span>
              </Tag>
              <Tag>
                <span>Sentry</span>
              </Tag>
              <Tag>
                <span>React</span>
              </Tag>
              <Tag>
                <span>Styled Components</span>
              </Tag>
              <Tag>
                <span>GSAP</span>
              </Tag>
              <Tag>
                <span>Vercel</span>
              </Tag>
            </TagContainer>
          </TextContainer>
          {
            typeof window !== 'undefined' && window.innerWidth > 768
            && (
              <StaticImage
                src="../../../static/images/works/mac.png"
                alt="Talentpool Iamge"
                height={1395}
                width={2400}
                quality={100}
                className="talentpool-img"
                loading="eager"
                objectPosition="right"
                objectFit="contain"
                placeholder="none"
              />
            )
          }
        </StellmicheinContainer>
      </HoverContainer>
    );
  }
}
