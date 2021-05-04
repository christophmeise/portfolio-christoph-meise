import { StaticImage } from 'gatsby-plugin-image';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { device } from '../../theme/theme';
import HoverContainer from '../selectedWorkItem';
import Background from './background';

export const OriginIsSoundContainer = styled.div`
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

  h4{
    color: #ffffff;
    font-size: 19px;
    font-weight: 800;
    line-height: 40px;
    margin: 0;
  }
  h5{
    color: #ffffff;
    font-size: 28px;
    font-weight: 800;
    line-height: 40px;
    margin: 0;
    text-align: center;
  }

  .origin-img {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 310px;
  }

`;

export const BackgroundGradient = styled.div`
height: 380px;
left: 71.5px;
position: absolute;

top: 111px;
width: 380px;
`;

export default class OriginIsSoundCard extends PureComponent {
  render() {
    return (
      <HoverContainer large={false} containerId="origin-container">
        <OriginIsSoundContainer>
          <div>
            <h4>ORIGIN IS SOUND</h4>
            <h5>Artist Portfolio</h5>
          </div>
          <BackgroundGradient>
            <Background />
          </BackgroundGradient>
          <StaticImage
            src="../../../static/images/works/originissound.png"
            alt="Origin is Sound Iphone"
            height={740}
            width={681}
            quality={100}
            className="origin-img"
            loading="eager"
            objectPosition="center"
            placeholder="none"
          />
        </OriginIsSoundContainer>
      </HoverContainer>
    );
  }
}
