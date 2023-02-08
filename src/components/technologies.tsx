/* eslint-disable @typescript-eslint/no-unused-vars */
import loadable from "@loadable/component";
import { Link } from "gatsby";
import React, { PureComponent } from "react";
import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";
import { Button, ButtonSizes } from "../styles/button";
import { Container, ContainerContentStandard } from "../styles/container";
import { device } from "../theme/theme";

const GlobeSection = styled.div`
  overflow: hidden;
  position: relative;
`;
const GlobeWrapper = styled.div`
  background: ${(props) => props.theme.colors.primaryBg};
  height: 100vh;
  left: 0;
  overflow: hidden;
  position: relative;
  top: 0;
  width: 100%;

  canvas {
    cursor: grab;
    position: relative;
  }
`;
const GlobeContainer = styled.div`
  height: 100vh;
  overflow: visible;
  position: absolute;
  width: 100%;
`;
const TechnologyHeadline = styled.h2`
  color: ${(props) => props.theme.colors.fontWhite};
  font-size: 30px;

  @media ${device.tablet} {
    font-size: 40px;
  }
`;
const GlobeTextContainer = styled.div`
  pointer-events: none;
  position: relative;
  h3,
  h4,
  p {
    color: ${(props) => props.theme.colors.fontWhite};
  }

  .cv-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;
    margin-left: 16px;
    margin-top: 32px;
    pointer-events: auto;
    user-select: none;
    width: fit-content;

    div {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 0.5rem;
    }
    h4 {
      color: #bca4ff;
      font-size: 18px;
      font-weight: 800;
      margin: 0;
      margin-bottom: 0.5rem;
      margin-right: 1rem;
    }

    @media ${device.tablet} {
      div {
        display: inline-flex;
        align-items: center;
        flex-direction: row;
      }
      h4 {
        margin-bottom: 0;
      }
    }
    p {
      font-size: 16px;
      font-weight: 600;
      margin: 0;
    }
    button {
      margin-top: 1rem;
      width: fit-content;
    }
    .cv-c2a {
      display: flex;
      flex-direction: column;

      button:first-child {
        margin-right: 0.5rem;
      }

      @media ${device.tablet} {
        flex-direction: row;
      }
    }

    @media ${device.tablet} {
      margin-left: 30px;
      h3 {
        margin-bottom: 0.5rem;
      }
      h4 {
        font-size: 20px;
        font-weight: 800;
        margin: 0;
        margin-right: 1rem;
      }
      p {
        font-size: 18px;
        font-weight: 600;
        margin: 0;
      }
    }
  }
  /*
    @media ${device.laptop} {
      padding: 300px 0;
    } */
`;

const TimelineContainer = styled.div`
  background: ${(props) => props.theme.colors.primary}
    linear-gradient(
      180deg,
      ${(props) => props.theme.colors.primary} 1rem,
      ${(props) => props.theme.colors.primaryBg} 100vh
    );
  content: "";
  height: 100%;
  left: 0;
  opacity: 0.3;
  position: absolute;
  width: 3px;
`;
const TopOverlayContainer = styled.div`
  background: rgba(20, 20, 43, 0)
    linear-gradient(180deg, rgba(20, 20, 43, 1) 0, rgba(20, 20, 43, 0) 50px);
  height: 50px;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 1;
  @media ${device.laptop} {
    background: rgba(20, 20, 43, 0)
      linear-gradient(180deg, rgba(20, 20, 43, 1) 0, rgba(20, 20, 43, 0) 75px);
    height: 75px;
  }
`;

const CustomGlobe: any = loadable(
  () => import(/* webpackPrefetch: true */ "./customGlobe")
);
export default class Technologies extends PureComponent {
  render() {
    return (
      <div>
        <Controller>
          <div>
            <Container centered>
              <ContainerContentStandard>
                <Scene duration={400} triggerHook={0.9}>
                  <Tween
                    from={{
                      y: 50,
                      x: 0,
                      scale: 2,
                      visibility: "hidden",
                      opacity: 0,
                    }}
                    to={{
                      y: 0,
                      x: 0,
                      scale: 1,
                      visibility: "visible",
                      opacity: 1,
                    }}
                    stagger={{ from: "start", amount: 1 }}
                  >
                    <TechnologyHeadline>
                      Let's build something beautiful together.
                    </TechnologyHeadline>
                  </Tween>
                </Scene>
              </ContainerContentStandard>
            </Container>
            <Scene duration={3000} pin triggerHook={0}>
              {(progress: any) => (
                <GlobeSection className="globe-trigger">
                  <TopOverlayContainer />
                  <Container style={{ height: "100vh" }}>
                    <ContainerContentStandard>
                      <GlobeContainer>
                        <GlobeWrapper>
                          {typeof window !== "undefined" && <CustomGlobe />}
                        </GlobeWrapper>
                      </GlobeContainer>
                      <GlobeTextContainer>
                        <TimelineContainer />
                        <Timeline
                          totalProgress={progress}
                          paused
                          target={
                            <>
                              <div className="cv-item">
                                <h3>Software Developer</h3>
                                <div>
                                  <h4>SAP Walldorf & Palo Alto</h4>
                                  <p>10/2014 - 09/2017</p>
                                </div>
                              </div>
                              <div className="cv-item">
                                <h3>UX/UI Developer @Blockchain</h3>
                                <div>
                                  <h4>SAP Innovation Center</h4>
                                  <p>09/2017 - 04/2019</p>
                                </div>
                              </div>
                              <div className="cv-item">
                                <h3>Lead Full-Stack Developer</h3>
                                <div>
                                  <h4>Dimely (Start-up)</h4>
                                  <p>03/2019 - 07/2019</p>
                                </div>
                              </div>
                              <div className="cv-item">
                                <h3>Full-Stack Software Engineer</h3>
                                <div>
                                  <h4>Opremic Solutions GmbH</h4>
                                  <p>05/2019 – 09/2019</p>
                                </div>
                              </div>
                              <div className="cv-item">
                                <h3>Senior Java Engineer</h3>
                                <div>
                                  <h4>Serrala O2C Solutions GmbH</h4>
                                  <p>07/2019 - 04/2020</p>
                                </div>
                              </div>
                              <div className="cv-item">
                                <h3>Senior Full-Stack Web Developer</h3>
                                <div>
                                  <h4>DB Systel GmbH</h4>
                                  <p>06/2020 - 07/2021</p>
                                </div>
                              </div>
                              <div className="cv-item">
                                <h3>Lead Software Engineer</h3>
                                <div>
                                  <h4>WeWater gUG</h4>
                                  <p>01/2021 - now</p>
                                </div>
                              </div>
                              <div className="cv-item">
                                <h3>Lead Software Engineer</h3>
                                <div>
                                  <h4>STELL-MICH-EIN</h4>
                                  <p>04/2021 - now</p>
                                </div>
                              </div>
                              <div className="cv-item">
                                <h3>Senior Full-Stack Software Engineer</h3>
                                <div>
                                  <h4>Mercedes-Benz Tech Innovation</h4>
                                  <p>07/2021 - 12/2022</p>
                                </div>
                              </div>
                              <div className="cv-item">
                                <h3>Co-Founder & CTO</h3>
                                <div>
                                  <h4>Capmatcher</h4>
                                  <p>10/2022 - now</p>
                                </div>
                              </div>
                              <div className="cv-item">
                                <h3>Your next project?</h3>
                                <div className="cv-c2a">
                                  <Link to="/contact">
                                    <Button inverted size={ButtonSizes.m}>
                                      Let's talk
                                    </Button>
                                  </Link>
                                  <a
                                    href="/cv/CurriculumVitae.pdf"
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <Button inverted size={ButtonSizes.m}>
                                      Download Full CV
                                    </Button>
                                  </a>
                                </div>
                              </div>
                            </>
                          }
                        >
                          {typeof window !== "undefined" &&
                            window.innerWidth > 768 && (
                              <Tween
                                from={{
                                  y: "500px",
                                }}
                                to={{
                                  y: "-1000px",
                                }}
                                /*  stagger={{ from: 'start', amount: 0.25, ease: 'sine.out' }} */
                              />
                            )}
                          {typeof window !== "undefined" &&
                            window.innerWidth <= 768 && (
                              <Tween
                                from={{
                                  y: "500px",
                                }}
                                to={{
                                  y: "-1600px",
                                }}
                                /*  stagger={{ from: 'start', amount: 0.25, ease: 'power1.out' }} */
                              />
                            )}

                          <Tween
                            from={{
                              autoAlpha: "0",
                            }}
                            to={{
                              autoAlpha: "1",
                            }}
                            /*       stagger={{
                                    from: 'start',
                                    amount: 0.3,
                                    ease: 'sine.out'
                                  }} */
                            duration={0.25}
                            position="<"
                          />
                        </Timeline>
                      </GlobeTextContainer>
                    </ContainerContentStandard>
                  </Container>
                </GlobeSection>
              )}
            </Scene>
          </div>
        </Controller>
      </div>
    );
  }
}
