/* eslint-disable prefer-spread */
import React, { PureComponent } from 'react';
import styled from 'styled-components';

interface SelectedWorksGridItemProps {
  large?: boolean
}

export const SelectedWorksGridItem = styled.div`
  &#wewater-container {
    background: linear-gradient(114.44deg, #624AF2 0%, #50DDC3 100%);
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
  }
`;
export const HoverContainerDiv = styled.div<SelectedWorksGridItemProps>`
  border-radius: ${(props) => props.theme.borderRadiusBig};
  grid-column: ${(props) => (props.large ? 'span 2' : 'span 1')};
  height: ${(props) => (props.large ? '420px' : '523px')};

  &#wewater-container {
    background: linear-gradient(114.44deg, #624AF2 0%, #50DDC3 100%);
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
  }
  &#innerlight-container {
    background: #F48C14;
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
  }
`;

interface HoverContainerProps {
  containerId: string;
  children: any;
  large: boolean;
}
export default class HoverContainer extends PureComponent<HoverContainerProps> {
  componentDidMount() {
    if (typeof window !== 'undefined' && window.innerWidth > 767) {
      const { containerId } = this.props;
      const ex1Layer: any = document.getElementById(containerId);

      ex1Layer.onmousemove = (e: any) => {
        const xVal = e.clientX - e.currentTarget.offsetLeft;
        const yVal = e.clientY - e.currentTarget.offsetTop;

        const yRotation = 10 * ((xVal - 1200 / 2) / 1200);

        const xRotation = ((yVal - 420 / 2) / 100);

        const string = `perspective(800px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.1)`;

        ex1Layer.style.transform = string;
        ex1Layer.style.transition = 'all 0.05s linear 0s';
      };
      ex1Layer.onmouseout = () => {
        ex1Layer.style.transform = `${'perspective(800px) '
          + '   rotateX('}0deg) `
          + '   rotateY(0deg) scale(1)';
        ex1Layer.style.transition = 'all 0.2s linear 0s';
      };
    }
  }


  render() {
    const { children, containerId, large } = this.props;
    return (
      <HoverContainerDiv id={containerId} large={large}>
        { children}
      </HoverContainerDiv>
    );
  }
}
