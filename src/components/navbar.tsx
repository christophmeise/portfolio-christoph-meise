import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '../styles/button';
import { Container } from '../styles/container';
import { Logo } from '../styles/logo';

interface NavbarContainerProps {
  readonly inverted?: boolean;
};
interface HeaderProps {
  readonly fixed?: boolean;
};

const Header = styled.header<HeaderProps>`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
`;
const NavbarContainer = styled.div<NavbarContainerProps>`
    color: ${props => props.inverted ? '#FFFFFF' : '#000000'};
    line-height: 17px;
    font-weight: 800;
    font-size: 22px;
    letter-spacing: -0.03em;
    margin-bottom: 0;
    margin-top: 0;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
`;

const MenuItem = styled.div<NavbarContainerProps>`
    color: ${props => props.inverted ? props.theme.colors.fontWhite : props.theme.colors.fontBlack};
    line-height: 20px;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: -0.03em;
    margin-bottom: 0;
    margin-top: 0;
    text-align: left;
    margin-right: 32px;
    cursor: pointer;

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
const BurgerMenu = styled.div`
    margin-left: auto;
    visibility: hidden;
    display: none;

    @media(max-width: 768px) {
      visibility: visible;
      display: block;
    }
`;

export default class Navbar extends Component {
  render() {
    return (
      <Header id="header">
        <Container>
          <section>
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
              <BurgerMenu>_</BurgerMenu>
            </NavbarContainer>
          </section>
        </Container>
      </Header>
    )
  }
}
