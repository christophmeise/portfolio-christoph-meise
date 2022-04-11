import { StaticImage } from 'gatsby-plugin-image';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { device } from '../../theme/theme';
import { LogoInnerLightWhite } from '../clientLogos';
import HoverContainer from '../selectedWorkItem';
import { Tag, TagContainer } from './wewater';

export const InnerLightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 48px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 48px;

  @media ${device.tablet} {
    padding-bottom: 62px;
    padding-left: 10px;
    padding-right: 36px;
    padding-top: 62px;

    .innerlight-img {
      flex: 3;
    }
    .innerlight-content {
    flex: 2;
    padding-left: 40px;
    }
  }
  .innerlight-logo {
    fill: #ffffff;
    height: 65px;
    width: 65px;
  }
  .innerlight-img {
    display: none;
    visibility: hidden;
  }

  @media ${device.tablet} {
    .innerlight-img {
      display: block;
      visibility: visible;
    }
  }

  h3 {
    color: ${(props) => props.theme.colors.fontWhite};
    font-size: 28px;
    font-weight: 800;
    line-height: 40px;
    margin: 16px 0;
  }
  p {
    color: ${(props) => props.theme.colors.fontWhite};
    font-size: 17px;
    font-weight: normal;
    line-height: 32px;
  }
`;

export default class InnerlightCard extends PureComponent {
  render() {
    return (
      <HoverContainer large containerId="innerlight-container" href="https://innerlight-hypnotherapy.com/">
        <InnerLightContainer>
          {
            typeof window !== 'undefined' && window.innerWidth > 768
            && (
              <StaticImage
                src="../../../static/images/works/innerlight.png"
                alt="Innerlight devices project image"
                height={336}
                width={683}
                quality={100}
                className="innerlight-img"
                loading="eager"
                objectPosition="left"
                objectFit="contain"
                placeholder="none"
              />
            )
          }

          <div className="innerlight-content">
            <LogoInnerLightWhite />
            <h3>
              Inner Light Hypnotherapy
            </h3>
            <p>
              With Inner Light, people and companies from all over the world can find access to high-class content on the subject of personal development and hypnotherapy. Book online pre-talk and buy therapy directly and securely online.
            </p>
            <TagContainer>
              <Tag>
                <span>GatsbyJS</span>
              </Tag>
              <Tag>
                <span>Forestry</span>
              </Tag>
              <Tag>
                <span>Stripe</span>
              </Tag>
              <Tag>
                <span>React</span>
              </Tag>
              <Tag>
                <span>Netlify</span>
              </Tag>
              <Tag>
                <span>Calendly</span>
              </Tag>
              <Tag>
                <span>Mailerlite</span>
              </Tag>
              <Tag>
                <span>i18n</span>
              </Tag>
              <Tag>
                <span>Figma</span>
              </Tag>
            </TagContainer>
          </div>
        </InnerLightContainer>
      </HoverContainer>
    );
  }
}
