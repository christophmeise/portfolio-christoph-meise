/* eslint-disable */
import loadable from '@loadable/component';
import { useSpring } from '@react-spring/core';
import { a as web } from '@react-spring/web';
import React, { useState } from 'react';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';
import { Container, ContainerContentStandard } from '../styles/container';
import { device } from '../theme/theme';

export const MacHeadline = styled.span`
  text-align: center;

  h2 {
    color: ${(props) => props.theme.colors.fontWhite};
    margin: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    font-size: 48px;
    width: 100%;
  }

  h3 {
    color: ${(props) => props.theme.colors.fontWhite};
    margin-bottom: 150px;
    font-size: 26px;
  }

      @media ${device.laptop} {
      h2 {
        top: 50%;
        font-size: 60px;
      }
      h3 {
            margin-bottom: 200px;
            font-size: 36px;
      }
    }
`;

const MacCanvas: any = loadable(() => import(/* webpackPrefetch: true */ './mac-canvas'));

export default function Mac() {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });
  return (
    <>
      <Controller>
        <Scene duration={300} pin triggerHook={0.1}>
          {(progress: any) => {
            setOpen(progress > 0);
            return (
              <web.main style={{ height: '60vh', position: 'relative' }}>
                <Container style={{ position: 'unset' }}>
                  <ContainerContentStandard>
                    <MacHeadline>
                      <web.h2 style={{ opacity: props.open.to([0, 1], [1, 0]), transform: props.open.to((o) => `translate3d(-50%,${o * 50 - 50}px,0)`) }}>
                        Are you ready to start?
                       </web.h2>
                    </MacHeadline>
                  </ContainerContentStandard>
                </Container>
                <MacCanvas open={props.open} isOpened={progress}></MacCanvas>
              </web.main>
            )
          }}
        </Scene>
        <Scene duration={500} triggerHook={1}>
          <Tween
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            <Container>
              <ContainerContentStandard>
                <MacHeadline>
                  <web.h3>
                    Life is too short to compromise. My purpose is to built the most stunning and immersive experiences to people around the world. To deliver complexity with ease. To start where others stop.
                  </web.h3>
                </MacHeadline>
              </ContainerContentStandard>
            </Container>
          </Tween>
        </Scene>
      </Controller>
    </>
  );
}
