import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '../styles/button';
import { Container } from '../styles/container';
import { Logo } from '../styles/logo';
import { device } from '../theme/theme';

interface NavbarContainerProps {
  readonly inverted?: boolean;
}

interface BurgerMenuProps {
  readonly sidebarOpened?: boolean;
}

const Header = styled.header`
    max-width: 100vw;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
`;
const NavbarContainer = styled.div<NavbarContainerProps>`
    align-items: center;
    color: ${(props) => (props.inverted ? '#FFFFFF' : '#000000')};
    display: flex;
    flex-direction: row;
    font-size: 22px;
    font-weight: 800;
    grid-column: full;
    height: 40px;
    letter-spacing: -0.03em;
    line-height: 17px;
    margin-bottom: 0;
    margin-top: 0;
    padding: .5em 1em;
    text-align: left;

    @media ${device.tablet} {
        grid-column: standard;
    }
`;

const MenuItem = styled.div<NavbarContainerProps>`
    color: ${(props) => (props.inverted ? props.theme.colors.fontWhite : props.theme.colors.fontBlack)};
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: -0.03em;
    line-height: 20px;
    margin-bottom: 0;
    margin-right: 32px;
    margin-top: 0;
    text-align: left;

    @media(max-width: 768px) {
      visibility: hidden;
      display: none;
    }
`;
const NavbarButton = styled.div`
    margin-left: auto;

    @media(max-width: 768px) {
      visibility: hidden;
      display: none;
    }
`;
const BurgerMenu = styled.div<BurgerMenuProps>`
    background-color: transparent;
    border          : none;
    cursor          : pointer;
    display:  none;
    height          : 34px;
    margin-left: auto;
    outline         : none;
    padding         : 0;
    visibility: hidden;
    width           : 34px;

    svg {
      height: 100%;
      width : 100%;
    }

  .line {
    fill        : none;
    stroke      : ${(props) => props.theme.colors.fontWhite};
    stroke-width: 6;
    transition  : stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line1 {
    stroke-dasharray: 60 207;
    stroke-width    : 6;
  }

  .line2 {
    stroke-dasharray: 60 60;
    stroke-width    : 6;
  }

  .line3 {
    stroke-dasharray: 60 207;
    stroke-width    : 6;
  }

  ${({ sidebarOpened }) => sidebarOpened && `
    .line1 {
    stroke-dasharray : 90 207;
    stroke-dashoffset: -134;
    stroke-width     : 6;
  }

  .line2 {
    stroke-dasharray : 1 60;
    stroke-dashoffset: -30;
    stroke-width     : 6;
  }

   .line3 {
    stroke-dasharray : 90 207;
    stroke-dashoffset: -134;
    stroke-width     : 6;
  }
  `}

    @media(max-width: 768px) {
      visibility: visible;
      display: flex;
    }
`;

interface NavbarState {
  sidebarOpened: boolean;
}
export default class Navbar extends Component<any, NavbarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sidebarOpened: false
    };
  }

  handleToggle = () => this.setState((prevState) => ({ sidebarOpened: !prevState }));

  render() {
    const { sidebarOpened } = this.state;

    return (
      <Header id="header">
        <Container>
          <NavbarContainer>
            <Logo primary>Christoph Meise</Logo>
            <MenuItem>About</MenuItem>
            <MenuItem>Clients</MenuItem>
            <MenuItem>Works</MenuItem>
            <MenuItem>Technologies</MenuItem>
            <MenuItem>Contact</MenuItem>
            <NavbarButton>
              <Button inverted>Let's talk</Button>
            </NavbarButton>
            <BurgerMenu sidebarOpened={sidebarOpened} aria-label="Main Menu" onClick={() => this.handleToggle()}>
              <svg fillOpacity="1" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 100 100">
                <path className="line line1" d="M 20,29.000046 H 80.00031 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className="line line2" d="M 20,50 H 80" />
                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </BurgerMenu>
          </NavbarContainer>
        </Container>
      </Header>
    );
  }
}
