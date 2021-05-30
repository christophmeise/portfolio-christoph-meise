/* eslint-disable prefer-spread */
import React, { PureComponent } from 'react';
import { Reveal, Tween } from 'react-gsap';
import styled from 'styled-components';
import { device } from '../theme/theme';

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
export const HoverContainerLink = styled.a<SelectedWorksGridItemProps>`
  border-radius: ${(props) => props.theme.borderRadiusBig};
  grid-column: span 1;
  min-height: ${(props) => (props.large ? '420px' : '523px')};

  @media ${device.tablet} {
    grid-column: ${(props) => (props.large ? 'span 2' : 'span 1')};
  }

  &#wewater-container {
    background: linear-gradient(114.44deg, #624AF2 0%, #50DDC3 100%);
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
  }
  &#innerlight-container {
    background: linear-gradient(to right, #fdc830, #f37335);
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
  }
  &#scm-container {
    background: ${(props) => props.theme.colors.success};
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
  }
  &#origin-container {
    background: linear-gradient(114.44deg, #EB0055 0%, #FFFA80 100%);
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
  }
  svg, img, div {
    pointer-events: none;
  }
`;

interface HoverContainerProps {
  containerId: string;
  children: any;
  large: boolean;
  href: string;
}
export default class HoverContainer extends PureComponent<HoverContainerProps> {
  componentDidMount() {
    if (typeof window !== 'undefined' && window.innerWidth > 767) {
      const { containerId } = this.props;
      const ex1Layer: any = document.getElementById(containerId);

      ex1Layer.onmouseover = () => {
        ex1Layer.style.transition = 'all 0.05s linear 0s';
      };

      ex1Layer.onmousemove = (e: any) => {
        const rect = e.target.getBoundingClientRect();
        const xVal = e.clientX - rect.left; // x position within the element.
        const yVal = e.clientY - rect.top; // y position within the element.

        const yRotation = (xVal - 600) / 220;
        const xRotation = (yVal - 210) / -200;

        ex1Layer.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.05)`;
      };
      ex1Layer.onmouseout = () => {
        ex1Layer.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        ex1Layer.style.transition = 'all 0.2s linear 0s';
      };
    }
  }


  render() {
    const {
      children, containerId, large, href
    } = this.props;
    return (
      <Reveal threshold={0.3}>
        <Tween
          from={{ y: 50, opacity: 0 }}
          to={{ y: 0, opacity: 1 }}
          duration={0.3}
        >
          <HoverContainerLink id={containerId} large={large} href={href} target="_blank" rel="noopener">
            {children}
          </HoverContainerLink>
        </Tween>
      </Reveal>
    );
  }
}
