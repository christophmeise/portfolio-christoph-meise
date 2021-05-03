/* eslint-disable prefer-spread */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { device } from '../theme/theme';
import { LogoWeWaterWhite } from './clientLogos';
import WeWaterIllustration from './wewaterIllustration';

interface SelectedWorksGridItemProps {
  large?: boolean
}

export const SelectedWorksGridItem = styled.div<SelectedWorksGridItemProps>`
  border-radius: ${(props) => props.theme.borderRadiusBig};
  grid-column: ${(props) => (props.large ? 'span 2' : 'span 1')};
  height: ${(props) => (props.large ? '420px' : '523px')};

  &#wewater-container {
    background: linear-gradient(114.44deg, #624AF2 0%, #50DDC3 100%);
    transition: transform 0.1s;
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
  }
`;

export default class SelectedWorkItemWeWater extends PureComponent {
  componentDidMount() {
    if (typeof window !== 'undefined' && window.innerWidth > 767) {
      const ex1Layer: any = document.getElementById('wewater-container');

      ex1Layer.onmousemove = (e: any) => {
        const dim = e.target.getBoundingClientRect();
        const xVal = e.clientX - dim.left;
        const yVal = e.clientY - dim.top;

        const yRotation = 20 * ((xVal - 1200 / 2) / 1200);

        const xRotation = -20 * ((yVal - 406 / 2) / 406);

        const string = `perspective(1200px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

        ex1Layer.style.transform = string;
      };
      ex1Layer.onmouseout = () => {
        ex1Layer.style.transform = `${'perspective(1200px) '
          + '   rotateX('}0deg) `
          + '   rotateY(0deg) ';
      };
    }
  }


  render() {
    return (
      <SelectedWorksGridItem large className="wewater" id="wewater-container">
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
      </SelectedWorksGridItem>
    );
  }
}
