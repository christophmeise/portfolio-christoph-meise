import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Container, ContainerContentStandard } from '../styles/container';
import { device } from '../theme/theme';
import { HeadlineDark } from './globalStyle';
import InnerlightCard from './works/innerlight';
import WeWaterCard from './works/wewater';

export const SelectedWorksGrid = styled.div`
  column-gap: 0px;
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 80px;
  margin-top: 48px;
  row-gap: 48px;
  width: 100%;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    column-gap: 64px;
  }
`;

export default class SelectedWorks extends PureComponent {
  render() {
    return (
      <Container>
        <ContainerContentStandard>
          <HeadlineDark>Selected works</HeadlineDark>
          <SelectedWorksGrid>
            <WeWaterCard />
            <InnerlightCard />
          </SelectedWorksGrid>
        </ContainerContentStandard>
      </Container>
    );
  }
}
