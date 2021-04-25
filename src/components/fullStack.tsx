import React, { Component } from 'react';
import styled from 'styled-components';

const FullStackContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryBg};
  width: 100%;
  padding: 64px 165px;
  border-radius: 100px 0px 0px 0px;
`;

const Headline = styled.h2`
  color: ${props => props.theme.colors.fontWhite};
`;

export default class FullStack extends Component {
  render() {
    return (
      <FullStackContainer>
        <Headline>
          Full-Stack by all means.
        </Headline>
      </FullStackContainer>
    )
  }
}
