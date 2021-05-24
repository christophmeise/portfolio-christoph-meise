import { Link } from 'gatsby';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Button, ButtonSizes } from '../styles/button';
import { Container, ContainerContentStandard } from '../styles/container';
import { Logo } from '../styles/logo';
import { device } from '../theme/theme';

const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 0px ${(props) => props.theme.borderRadiusSectionMobile} 0px 0px;
  width: 100%;

  @media ${device.tablet} {
    border-radius: 0px ${(props) => props.theme.borderRadiusSection} 0px 0px;
  }
`;

const FooterCallToAction = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 40px;
    padding-top: 40px;

    h2 {
        color: ${(props) => props.theme.colors.fontWhite};
        font-size: 40px;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    @media ${device.tablet} {
        padding-bottom: 80px;
        padding-top: 80px;
        h2 {
            margin-bottom: 20px;
            margin-top: 20px;
            font-size: 48px;
        }
    }
`;
const FooterContentContainer = styled.div`
    background-color: ${(props) => props.theme.colors.primaryBg};
    border-radius: 0px ${(props) => props.theme.borderRadiusSectionMobile} 0px 0px;
    margin-right: 40px;

    h3, p, a, span {
        color: ${(props) => props.theme.colors.fontWhite};
    }

    @media ${device.tablet} {
        margin-right: 80px;
    }
`;
const FooterContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 40px 0px;
    row-gap: 30px;

    h3 {
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        margin-bottom: 24px;
        margin-top: 0;
    }
    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 30px;
        padding: 80px 0px;
    }
`;
const FooterBottomBar = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 12px 0px;

    p {
        margin: 0;
    }

    span {
        margin: 0 0.5rem;
    }

    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr;
        padding: 24px 0px;
    }
`;
const FooterBottomBarLinks = styled.div`
    text-align: left;

    @media ${device.tablet} {
        text-align: right;
    }
`;

export default class footer extends PureComponent {
    render() {
        return (
            <FooterContainer>
                <Container>
                    <ContainerContentStandard>
                        <FooterCallToAction>
                            <h2>Interested in Collaboration?</h2>
                            <Button inverted size={ButtonSizes.l}>Let's talk</Button>
                        </FooterCallToAction>
                    </ContainerContentStandard>
                </Container>
                <FooterContentContainer>
                    <Container>
                        <ContainerContentStandard>
                            <FooterContent>
                                <div>
                                    <Link to="/">
                                        <Logo>Christoph Meise</Logo>
                                    </Link>
                                    <p>
                                        Full-Stack Web Engineer
                                        Let’s do a virtual coffee break and talk about your project and how I can help you to bring it to the next level.
                                    </p>
                                </div>
                                <div>
                                    <h3>Quick Links</h3>
                                    <p>
                                        Portfolio
                                    </p>
                                    <p>
                                        About
                                    </p>
                                    <p>
                                        Careers
                                    </p>
                                </div>
                                <div>
                                    <h3>Reach me</h3>
                                    <p>
                                        projects@explorechristoph.com
                                    </p>
                                    <p>
                                        +49 1522 4054008
                                    </p>
                                    <p>
                                        Germany, 12163 Berlin, Ahornstraße 26
                                    </p>
                                </div>
                            </FooterContent>
                            <FooterBottomBar>
                                <p>© 2021 Christoph Meise. All rights reserved</p>
                                <FooterBottomBarLinks>
                                    <Link to="/imprint">Imprint</Link>
                                    <span>|</span>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                    <span>|</span>
                                    <Link to="/sitemap">Sitemap</Link>
                                    <span>|</span>
                                    <Link to="/disclaimer">Disclaimer</Link>
                                </FooterBottomBarLinks>
                            </FooterBottomBar>
                        </ContainerContentStandard>
                    </Container>
                </FooterContentContainer>
            </FooterContainer>
        );
    }
}
