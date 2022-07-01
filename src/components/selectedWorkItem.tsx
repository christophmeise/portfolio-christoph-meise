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
  overflow: hidden;

  @media ${device.tablet} {
    grid-column: ${(props) => (props.large ? 'span 2' : 'span 1')};
  }

 @media ${device.tablet} {
    &#mercedes-container {
      background-image: url("/images/works/amg1.jpg");
    }
   }
  &#mercedes-container {
    background: black;
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-position-x: 50%;
    background-position-y: bottom;
    background-size: 120%;
  }
  &#mercedes-container:hover {
    background-size: 130%;
  }
  &#mercedes-container:before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #0000002f, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }
  &#mercedes-container:hover:before {
    --size: 1200px;
  }
  &#db-container {
    background: black;
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
    background-image: url("/images/works/db.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
    &#db-container:before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, rgba(255,255,255,0.25), transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }
  &#db-container:hover:before {
    --size: 900px;
  }
  &#wewater-container {
    background: linear-gradient(114.44deg, #624AF2 0%, #50DDC3 100%);
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
  }
    &#wewater-container:before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #624AF235, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }
  &#wewater-container:hover:before {
    --size: 900px;
  }
  &#stellmichein-container {
    background: #FFFFFF;
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
    overflow: hidden;
  }
  &#stellmichein-container:before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, rgba(0,0,0,0.15), transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }
  &#stellmichein-container:hover:before {
    --size: 900px;
  }
  &#innerlight-container {
    background: linear-gradient(to right, #fdc830, #f37335);
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
  }
    &#innerlight-container:before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #fdc83050, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }
  &#innerlight-container:hover:before {
    --size: 900px;
  }
  &#scm-container {
    background: ${(props) => props.theme.colors.success};
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
  }
  &#celina-container {
    background: linear-gradient(114.44deg, #C1C0BF 0%, #F7F7F7 100%);
    transform-style: preserve-3d;
    transition: all 0.2s linear 0s;
  }
    &#celina-container:before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, rgba(0,0,0,0.15), transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }
  &#celina-container:hover:before {
    --size: 900px;
  }
  svg, img, div {
    pointer-events: none;
  }
`;

interface HoverContainerProps {
  containerId: string;
  imageId?: string;
  backgroundColor: string;
  radialStartColor: string;
  radialEndColor: string;
  children: any;
  large: boolean;
  href: string;
  onClick?: any;
}
export default class HoverContainer extends PureComponent<HoverContainerProps> {
  componentDidMount() {
    if (typeof window !== 'undefined' && window.innerWidth > 767) {
      const {
        containerId, imageId, backgroundColor, radialStartColor, radialEndColor
      } = this.props;
      const ex1Layer: any = document.getElementById(containerId);
      let hoverImage: any;
      if (imageId) {
        hoverImage = document.getElementById(imageId);
      }

      ex1Layer.onmouseover = () => {
        if (imageId && !hoverImage) {
          hoverImage = document.getElementById(imageId);
        }
        ex1Layer.style.transition = 'all 0.05s linear 0s, background 0.35s';
        if (hoverImage) {
          hoverImage.style.transition = 'all 0.15s linear 0s';
        }
      };

      ex1Layer.onmousemove = (e: any) => {
        const rect = e.target.getBoundingClientRect();
        const xVal = e.clientX - rect.left; // x position within the element.
        const yVal = e.clientY - rect.top; // y position within the element.

        const xPercent = 100 * (xVal / rect.width);
        const yPercent = 100 * (yVal / rect.height);
        const yRotation = (xVal - 600) / 220;
        const xRotation = (yVal - 210) / -200;

        ex1Layer.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        ex1Layer.style.setProperty('--x', `${xVal}px`);
        ex1Layer.style.setProperty('--y', `${yVal}px`);
        // ex1Layer.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, ${radialStartColor}, ${radialEndColor})`;
        if (hoverImage) {
          hoverImage.style.transform = 'scale(1.05)';
        }
      };
      ex1Layer.onmouseout = () => {
        ex1Layer.style.transform = 'rotateX(0deg) rotateY(0deg)';
        ex1Layer.style.transition = 'all 0.2s linear 0s, background 0.35s';
        // ex1Layer.style.background = backgroundColor;
        if (hoverImage) {
          hoverImage.style.transform = 'scale(1)';
        }
      };
    }
  }


  render() {
    const {
      children, containerId, large, href, onClick
    } = this.props;
    return (
      <Reveal threshold={0.3}>
        <Tween
          from={{ y: 50, opacity: 0 }}
          to={{ y: 0, opacity: 1 }}
          duration={1}
        >
          <HoverContainerLink id={containerId} large={large} href={href} target="_blank" rel="noopener" onClick={onClick}>
            {children}
          </HoverContainerLink>
        </Tween>
      </Reveal>
    );
  }
}
