import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { device } from '../../theme/theme';
import { LogoWeWaterWhite } from '../clientLogos';
import HoverContainer from '../selectedWorkItem';
import WeWaterIllustration from '../wewaterIllustration';

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
  align-items: center;
  border: 1px solid #FFFFFF;
  border-radius: 40px;
  box-shadow: 0 0 1px 0px white inset, 0 0 1px 0px white;
  display: flex;
  justify-content: center;
  margin-bottom: 6px;
  margin-right: 6px;

  span {
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    padding: 3px 14px;
  }
`;
export const WeWaterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 48px 24px;

  @media ${device.tablet} {
    padding: 62px 48px;
  }
  .wewater-logo {
    height: 55px;
    width: 55px;
    fill: #ffffff;
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
    max-width: 65%;
  }
`;

export default class WeWaterCard extends PureComponent {
  render() {
    return (
      <HoverContainer large containerId="wewater-container" href="https://wewater.org/">
        <WeWaterContainer>
          <div>
            <LogoWeWaterWhite />
            <h3>
              WeWater.
              Clean water worldwide.
            </h3>
            <p>
              Rebranding and complete relaunch to maximize
              performance and user engagement.
            </p>
            <TagContainer>
              <Tag>
                <span>React</span>
              </Tag>
              <Tag>
                <span>GatsbyJS</span>
              </Tag>
              <Tag>
                <span>GraphQL</span>
              </Tag>
              <Tag>
                <span>Headless CMS</span>
              </Tag>
              <Tag>
                <span>Internationalization</span>
              </Tag>
            </TagContainer>
          </div>
          {
            typeof window !== 'undefined' && window.innerWidth > 768
            && (
              <WeWaterIllustration />
            )
          }
        </WeWaterContainer>
      </HoverContainer>
    );
  }
}
