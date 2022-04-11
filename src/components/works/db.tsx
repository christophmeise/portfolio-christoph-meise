import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { device } from '../../theme/theme';
import { LogoDBCard } from '../clientLogos';
import HoverContainer from '../selectedWorkItem';

export const DBCardShadow = styled.div`
  background: linear-gradient(180deg, transparent 60%, #000000 100%);
  border-radius: 32px;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top:0;
  z-index: 10;
`;
export const DBCardContainer = styled.div`
  bottom: 0;
  bottom:0;
  display: flex;
  flex-direction: column;
  height:auto;
  justify-content: space-between;
  left:0;
  overflow: hidden;
  padding: 30px;
  position:absolute;
  right:0;
  top:0;

  h4{
    color: ${(props) => props.theme.colors.fontWhite};
    font-size: 38px;
    font-weight: 800;
    line-height: 46px;
    margin: 0;
    margin-top: auto;
    padding: 0px 10px;
    text-align: center;
    z-index: 100;
  }

  .scm-logo {
    height: 35px;
    margin-left: 30px;
    margin-top:30px;
    width: 55px;
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

export const DBTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 100;
`;

export default class DBCard extends PureComponent {
  render() {
    return (
      <HoverContainer
        large={false}
        containerId="db-container"
        href="https://inside.bahn.de/fahrgastrechte-online/"
        backgroundColor="#000000"
        radialStartColor="#010101"
        radialEndColor="#121212"
      >
        <DBCardShadow>
          <DBCardContainer>
            <DBTextContainer>
              <LogoDBCard />
              <h4>
                DB Navigator
                Fahrgastrechte Online
              </h4>
            </DBTextContainer>
          </DBCardContainer>
        </DBCardShadow>
      </HoverContainer>
    );
  }
}
