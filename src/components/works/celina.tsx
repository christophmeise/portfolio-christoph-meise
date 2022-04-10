import { StaticImage } from 'gatsby-plugin-image';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { device } from '../../theme/theme';
import HoverContainer from '../selectedWorkItem';
import Background from './background';

export const CelinaContainer = styled.div`
  bottom:0;
  display: flex;
  flex-direction: column;
  height:auto;
  justify-content: space-between;
  left:0;
  margin-bottom:0;
  margin-left:24px;
  margin-right:0;
  margin-top:24px;
  position:absolute;
  right:0;
  top:0;

  .coming-soon-container {
    display: flex;
    justify-content: space-between;
  }

  h4{
    color: ${(props) => props.theme.colors.fontBlack};
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -0.03em;
    margin: 0;
    text-align: center;
  }

  .celina-img {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 290px;
    max-width: 100%;
  }

  svg {
    max-width: 100%;
  }

  @media ${device.tablet} {
    margin-bottom:0;
    margin-left:37px;
    margin-right:37px;
    margin-top:30px;
  }

`;

export const BackgroundGradient = styled.div`
  height: 400px;
  left: 50%;
  max-width: 100%;
  position: absolute;
  top: 100px;
  transform: translateX(-50%);
  width: 400px;
`;
export const ComingSoon = styled.p`
    border: 2px solid #EB0055;
    border-radius: 100px;
    color: #EB0055;
    font-size: 16px;
    font-weight: 800;
    line-height: 35px;
    margin: 0;
    margin-left: 0.5rem;
    padding: 0 0.75rem;
    transform: rotate(15deg);
`;

export default class CelinaCard extends PureComponent {
  render() {
    return (
      <HoverContainer large={false} containerId="celina-container" href="/" onClick={(ev: any) => ev.preventDefault()}>
        <CelinaContainer>
          <div>
            <div className="coming-soon-container">
              <div />
              <ComingSoon>Coming soon</ComingSoon>
            </div>
            <h4>Actress Portfolio</h4>
          </div>
          <BackgroundGradient>
            <Background />
          </BackgroundGradient>
          <StaticImage
            src="../../../static/images/works/celina.png"
            alt="Celina Schneider Iphone"
            height={1065}
            width={841}
            quality={100}
            className="celina-img"
            loading="eager"
            objectPosition="center"
            placeholder="none"
          />
        </CelinaContainer>
      </HoverContainer>
    );
  }
}
