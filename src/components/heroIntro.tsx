import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import React, { PureComponent } from 'react';
import { Tween } from 'react-gsap';
import styled from 'styled-components';
import { Container, ContainerContentStandard } from '../styles/container';
import { device } from '../theme/theme';

const GridTwoCol = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
    grid-template-rows: 900px;
    height: 900px;
    max-height: 100vh;
`;
const HeroImageWrapper = styled.div`
    align-items: flex-end;
    background-color: #000000;
    display: flex;
    max-height: 100vh;
    position: relative;

    .hero-img {
      height: 750px;
      max-height: 95vh;
    }

`;
const HeroTextWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 42px;
    max-height: 100vh;

    @media(max-width: 768px) {
      margin-right: 10px;
    }
`;

interface HeadlineProps {
  readonly primary?: boolean;
}

const Headline = styled.h1<HeadlineProps>`
    color: ${(props) => (props.primary ? props.theme.colors.primary : props.theme.colors.fontBlack)};
    line-height: 98px;
    margin-bottom: 0;
    margin-top: 0;
    text-align: right;

    @media(max-width: 768px) {
      font-size: 36px;
      line-height: 60px;
    }
`;
const HeroText = styled.p`
    color: ${(props) => props.theme.colors.fontBlack};
    line-height: 32px;
    margin-bottom: 16px;
    margin-top: 16px;
    max-width: 500px;
    text-align: right;

     @media(max-width: 768px) {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
`;
const HeroTextCallToAction = styled.p`
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.25px;
    line-height: 28px;
    margin-top: 32px;

    text-align: right;
    text-transform: uppercase;

    @keyframes float {
	0% {
    opacity: 0;
		transform: translatey(-50px);
	}
	50% {
    opacity: 1;
		transform: translatey(100px);
	}
	100% {
    opacity: 0;
		transform: translatey(250px);
	}
}

    svg {
      height: 27px;
      margin-left: 0.5rem;
      width: 27px;
    }

    #svg-mousewheel {
      animation: float 1.6s ease infinite;
      transform: translatey(0px);
    }

    @media ${device.tablet} {
      margin-top: 1rem;
    }
`;
const HeroTextDesktop = styled.div`
    display: block;
    visibility: visible;

    @media(max-width: 768px) {
      visibility: hidden;
      display: none;
    }
`;
const HeroTextMobile = styled.div`
    display: none;
    visibility: hidden;

    @media(max-width: 768px) {
      div {
        text-align: center;
      }
      visibility: visible;
      display: flex;
      width: 100%;
      margin: 32px 0;
    }
`;
const ImageInlineShadow = styled.div`
    bottom: 0;
    box-shadow: inset -15px 15px 20px 10px #000000;
    left: 0;
    max-width: 100%;
    position: absolute;
    top: 0;
    width: 272px;
`;
export default class HeroIntro extends PureComponent {
  render() {
    return (
      <>
        <GridTwoCol>
          <Tween
            from={{ x: -50, autoAlpha: 0 }}
            to={{ x: 0, autoAlpha: 1 }}
            duration={1}
            stagger={{ amount: 1 }}
            wrapper={<HeroTextWrapper />}
          >
            <Headline primary>Software Engineer</Headline>
            <Headline>Christoph Meise</Headline>
            <HeroTextDesktop>
              <HeroText>
                <strong>
                  Full-Stack Web Developer & UX Designer
{' '}
                </strong>
                in Berlin.
                I specialize in building high-end websites that are blazing-fast, engage customers and are used worldwide.
              </HeroText>
            </HeroTextDesktop>
            <HeroTextCallToAction onClick={() => scrollTo('#full-stack')}>
              Start Exploring
              {' '}
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 654 1045">
                <path fill="#5E3AEE" d="M309 .7C225.4 6.4 152.8 39 95.5 96.5 49.3 142.7 18.1 201.7 6 265.5.3 295.7.7 281.3.2 511-.1 730.7 0 741 4 767.3c6.4 41.9 21 82.8 42.3 118.2 31.1 51.9 74.6 93 128.7 121.8 56.8 30.2 126.2 43 190.3 35.1 74.7-9.1 140.7-41.2 193.2-93.9 46.2-46.2 77.4-105.2 89.5-169 5.7-30.2 5.3-15.8 5.8-245.5.3-219.7.2-230-3.8-256.3-6.4-41.9-21-82.8-42.3-118.2-31.1-51.9-74.6-93-128.7-121.8-50.2-26.6-115.1-40.8-170-37zm55.8 67.2C412.2 75 455.3 94 493 124.3c12.1 9.8 31.8 30.3 41.5 43.2 29.5 39.1 46.3 80.2 52.7 129 1.9 14.6 1.9 436 0 451.5-11.2 89.4-63.8 164.3-143.4 204.2-84.8 42.4-186.1 35.6-264.3-18-15.9-10.8-24.4-17.9-38.5-32.1-40.8-41-66.3-93.8-74.2-153.6-1.9-14.6-1.9-436 0-451.5C78 207.6 130.6 132.7 210.2 92.8c28.8-14.4 61.3-23.7 93.3-26.7 14.9-1.4 45.7-.5 61.3 1.8z" />
                <path id="svg-mousewheel" fill="#5E3AEE" d="M317.3 197.8c-10.1 3.4-18.2 11.3-21.5 21.2-1.6 4.8-2.4 134.4-.8 144.3 1.3 8.3 3.8 13.5 9.1 18.8 12.8 12.8 33.6 12.5 46.3-.6 2.6-2.6 5.5-7 6.8-10.3l2.3-5.7.3-66.9c.3-72 0-77.5-4.5-85.9-7.1-12.9-24.1-19.6-38-14.9z" />
              </svg>
            </HeroTextCallToAction>
          </Tween>
          <HeroImageWrapper>
            <StaticImage
              src="../../static/images/hero.jpg"
              alt="Header Intro Image Christoph Meise"
              height={750}
              width={272}
              quality={100}
              className="hero-img"
              loading="eager"
              objectPosition="left"
              placeholder="none"
            />
            <ImageInlineShadow />
          </HeroImageWrapper>
        </GridTwoCol>

        <HeroTextMobile>
          <Container>
            <ContainerContentStandard>
              <p>
                <strong>Full-Stack Web Developer & UX Designer </strong>
            in Berlin.
            I specialize in building high-end websites that are blazing-fast, engage customers and are used worldwide.
              </p>
            </ContainerContentStandard>
          </Container>
          <HeroText />
        </HeroTextMobile>
      </>
    );
  }
}
