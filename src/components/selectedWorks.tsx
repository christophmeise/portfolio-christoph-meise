import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Container, ContainerContentStandard } from '../styles/container';
import { device } from '../theme/theme';
import { HeadlineDark } from './globalStyle';
import CelinaCard from './works/celina';
import DBCard from './works/db';
import InnerlightCard from './works/innerlight';
import MercedesCard from './works/mercedes';
import StellmicheinCard from './works/stellmichein';
import WeWaterCard from './works/wewater';

export const SelectedWorksGrid = styled.div`
  column-gap: 0px;
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 80px;
  margin-top: 48px;
  perspective: 1201px;
  row-gap: 24px;
  width: 100%;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;

  }
`;

export default class SelectedWorks extends PureComponent {
  render() {
    return (
      <Container className="content-section works-trigger">
        <ContainerContentStandard>
          <HeadlineDark>Selected works</HeadlineDark>
          <SelectedWorksGrid>
            <MercedesCard />
            <StellmicheinCard />
            {/*  <SCMCard /> */}
            <DBCard />
            <CelinaCard />
            <WeWaterCard />
            <InnerlightCard />
          </SelectedWorksGrid>
        </ContainerContentStandard>
      </Container>
    );
  }
}
