import { StaticImage } from 'gatsby-plugin-image';
import React, { Component } from 'react';
import styled from 'styled-components';

const GridTwoCol = styled.div`
    display: grid;
    height: 900px;
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
    grid-template-rows: 900px;
`;
const HeroImageWrapper = styled.div`
    background-color: #000000;
    display: flex;
    align-items: flex-end;
    position: relative;

    .hero-img {
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
`;
const HeroText = styled.p`
    color: ${props => props.theme.colors.fontBlack};
    line-height: 32px;
    margin-bottom: 16px;
    margin-top: 16px;
    margin-right: 42px;
    text-align: right;
    max-width: 500px;
`;
const ImageInlineShadow = styled.div`
    position: absolute;
    box-shadow: inset -15px 15px 20px 10px #000000;
    top: 0;
    bottom: 0;
    left: 0;
    width: 272px;
`;

interface HeroIntroProps {
  sources: any;
}

export default class HeroIntro extends Component<HeroIntroProps> {

  constructor(props: HeroIntroProps) {
    super(props);
  }

  render() {
    const { sources } = this.props;

    return (
      <GridTwoCol>
        <HeroTextWrapper>
          <Headline primary>Software Engineer</Headline>
          <Headline>Christoph Meise</Headline>
          <HeroText> <strong>Full-Stack Web Developer & UX Designer</strong> in Berlin.
          I specialize in building high-end websites that are blazing-fast, engage customers and are used worldwide.
          </HeroText>
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
            objectPosition="bottom"
            placeholder="none"
          />
          <ImageInlineShadow />
          {/*  <GatsbyImage
            objectFit="contain"
            objectPosition="left"
            image={sources}
            style={{ height: '100%' }}
            alt="Header Intro Image Christoph Meise"
            loading="eager"
          >
          </GatsbyImage> */}
        </HeroImageWrapper>
      </GridTwoCol>

    )
  }
}
