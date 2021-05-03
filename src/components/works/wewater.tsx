import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { device } from '../../theme/theme';
import { LogoWeWaterWhite } from '../clientLogos';
import HoverContainer from '../selectedWorkItem';
import WeWaterIllustration from '../wewaterIllustration';

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
  }
`;

export default class WeWaterCard extends PureComponent {
  render() {
    return (
      <HoverContainer large containerId="wewater-container">
        <WeWaterContainer>
          <div>
            <LogoWeWaterWhite />
            <h3>
              WeWater.
          <br />
          Clean water worldwide.
            </h3>
            <p>
              Rebranding and complete relaunch to maximize
              performance and user engagement.
            </p>
          </div>
          <WeWaterIllustration />
        </WeWaterContainer>
      </HoverContainer>
    );
  }
}
