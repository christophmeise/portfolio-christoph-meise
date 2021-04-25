import { StaticImage } from 'gatsby-plugin-image';
import React, { Component } from 'react';
import styled from 'styled-components';

const GridTwoCol = styled.div`
    display: grid;
    max-height: 100vh;
    height: 900px;
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
    grid-template-rows: 900px;
`;
const HeroImageWrapper = styled.div`
    background-color: #000000;
    display: flex;
    align-items: flex-end;
    position: relative;
    max-height: 100vh;

    .hero-img {
      max-height: 100vh;
      height: 750px;
    }

`;
const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;

interface HeadlineProps {
  readonly primary?: boolean;
};

const Headline = styled.h1<HeadlineProps>`
    color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.fontBlack};
    line-height: 98px;
    margin-bottom: 0;
    margin-top: 0;
    text-align: right;
    margin-right: 42px;

    @media(max-width: 768px) {
      font-size: 36px;
      line-height: 60px;
      margin-right: 10px;
    }
`;
const HeroText = styled.p`
    color: ${props => props.theme.colors.fontBlack};
    line-height: 32px;
    margin-bottom: 16px;
    margin-top: 16px;
    margin-right: 42px;
    text-align: right;
    max-width: 500px;

     @media(max-width: 768px) {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
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
      visibility: visible;
      display: flex;
      width: 100%;
    }
`;
const ImageInlineShadow = styled.div`
    position: absolute;
    box-shadow: inset -15px 15px 20px 10px #000000;
    top: 0;
    bottom: 0;
    left: 0;
    width: 272px;
    max-width: 100%;
`;
export default class HeroIntro extends Component {
  render() {
    return (
      <>
        <GridTwoCol>
          <HeroTextWrapper>
            <Headline primary>Software Engineer</Headline>
            <Headline>Christoph Meise</Headline>
            <HeroTextDesktop>
              <HeroText> <strong>Full-Stack Web Developer & UX Designer</strong> in Berlin.
          I specialize in building high-end websites that are blazing-fast, engage customers and are used worldwide.
          </HeroText>
            </HeroTextDesktop>
          </HeroTextWrapper>
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
          <HeroText> <strong>Full-Stack Web Developer & UX Designer</strong> in Berlin.
          I specialize in building high-end websites that are blazing-fast, engage customers and are used worldwide.
          </HeroText>
        </HeroTextMobile>
      </>
    )
  }
}
