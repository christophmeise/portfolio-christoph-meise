import { Link } from 'gatsby';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, ContainerContentStandard } from '../styles/container';
import { HeadlineDark } from './globalStyle';

const Subtitle = styled.h3`
  color: ${props => props.theme.colors.fontWhite};
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 600;
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${props => props.theme.colors.fontWhite};
  margin-top: 0;
  margin-bottom: 24px;
`;
const CallToActionLink = styled.div`

  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.colors.primaryDarkmode};
    margin-right: 0.5rem;
  }
`;

const FullStackGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;

  @media(max-width: 768px) {
      grid-template-columns: 1fr;
      row-gap: 60px;
  }
`;
const FullStackGridItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;
const FullStackIcon = styled.div`
  margin-bottom: 24px;

  svg {
    overflow: visible;
  }

  @-webkit-keyframes rotation {
    0%, 40%   {-webkit-transform: rotate(0deg);}
    60%, 100% {-webkit-transform: rotate(180deg);}
  }
  @keyframes rotation {
      0%, 40% { transform: rotate(0deg); }
      60%, 100% { transform: rotate(180deg); }
  }

  #gears{
    transform-box: fill-box;
    transform-origin: center;
    animation: rotation 4s infinite ease;
  }

  @-webkit-keyframes ruler {
      0%, 44%  { -webkit-transform: translate3d(0, 0px, 0) rotate(0deg); }
      44%, 56% { -webkit-transform: translate3d(0, 7px, 0) rotate(90deg); }
      56%, 100% { -webkit-transform: translate3d(0, 0px, 0) rotate(0deg); }
  }
  @keyframes ruler {
      0%, 44% { transform: translate3d(0, 0px, 0) rotate(0deg); }
      44%, 56% { transform: translate3d(0, 7px, 0) rotate(90deg); }
      56%, 100% { transform: translate3d(0, 0px, 0) rotate(0deg); }
  }

  #rulersvg{
    transform-box: fill-box;
    transform-origin: center;
    animation: ruler 10s infinite ease;
    animation-delay: 4s;
  }

  @-webkit-keyframes boxmove {
      0%, 40%  { -webkit-transform: translate3d(0, 0px, 0); opacity: 1; }
      40%, 60% { -webkit-transform: translate3d(20px, 10px, 0px); opacity: 0; }
      60%, 100% { -webkit-transform: translate3d(0, 0px, 0); opacity: 1; }
  }
  @keyframes boxmove {
      0%, 40% { transform: translate3d(0, 0px, 0); opacity: 1; }
      40%, 60% { transform: translate3d(20px, 10px, 0px); opacity: 0; }
      60%, 100% { transform: translate3d(0, 0px, 0); opacity: 1; }
  }

  #box1{
    transform-box: fill-box;
    transform-origin: center;
    animation: boxmove 6s infinite ease;
    animation-delay: 8s;
  }
  #box2{
    transform-box: fill-box;
    transform-origin: center;
    animation: boxmove 12s infinite ease;
    animation-delay: 8s;
  }
`;



export default class FullStack extends Component {
  render() {
    return (
      <Container id="full-stack">
        <ContainerContentStandard>
          <HeadlineDark>
            Full-Stack by all means.
          </HeadlineDark>
          <FullStackGrid>
            <FullStackGridItem>
              <FullStackIcon>
                <WebDevelopmentIcon />
              </FullStackIcon>
              <Subtitle>Web Development</Subtitle>
              <Text>From static server-side rendered to dynamic single page applications. From standalone website to corporate application.</Text>
              <CallToActionLink>
                <Link to="/">
                  <span>Know more</span>
                  <ArrowIcon />
                </Link>
              </CallToActionLink>
            </FullStackGridItem>
            <FullStackGridItem>
              <FullStackIcon>
                <UXDesignIcon />
              </FullStackIcon>
              <Subtitle>UX Design</Subtitle>
              <Text>Styles come and go. Good design is a language, not a style. For me, UX is part of the process, not an afterthought.</Text>
              <CallToActionLink>
                <Link to="/">
                  <span>Know more</span>
                  <ArrowIcon />
                </Link>
              </CallToActionLink>
            </FullStackGridItem>
            <FullStackGridItem>
              <FullStackIcon>
                <BackendIcon />
              </FullStackIcon>
              <Subtitle>Backend Integrations</Subtitle>
              <Text>System architecture and backend engineering. Machine Learning, Blockchain and Microservices are not buzzwords for me, but successful projects.</Text>
              <CallToActionLink>
                <Link to="/">
                  <span>Know more</span>
                  <ArrowIcon />
                </Link>
              </CallToActionLink>
            </FullStackGridItem>

          </FullStackGrid>
        </ContainerContentStandard>
      </Container >
    )
  }
}

const ArrowIcon = () => {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.744 1.58928C12.4185 1.26384 12.4185 0.736202 12.744 0.410765C13.0694 0.0853278 13.597 0.0853278 13.9225 0.410765L18.9225 5.41076C19.2479 5.7362 19.2479 6.26384 18.9225 6.58928L13.9225 11.5893C13.597 11.9147 13.0694 11.9147 12.744 11.5893C12.4185 11.2638 12.4185 10.7362 12.744 10.4108L16.3214 6.83334H1.67553C1.21022 6.83334 0.833008 6.46024 0.833008 6.00001C0.833008 5.53977 1.21022 5.16667 1.67553 5.16667H16.3214L12.744 1.58928Z" fill="#BCA4FF" />
    </svg>
  );
}


const WebDevelopmentIcon = () => {
  return (
    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 239">
        <g id="Group 236">
          <path id="test use1" d="M28 0C30.2091 0 32 1.79086 32 4V21C32 23.2091 30.2091 25 28 25H4C1.79086 25 0 23.2091 0 21V4C0 1.79086 1.79086 0 4 0H28ZM4.8 5.17L4.13 5.92C3.96969 6.10052 3.96128 6.36982 4.11 6.56L4.17 6.62L7.46 9.54L4.16 12.46C3.96085 12.6461 3.94751 12.9575 4.13 13.16L4.79 13.92C4.97 14.12 5.29 14.14 5.49 13.96L10.46 9.54L5.5 5.13C5.29484 4.95009 4.98333 4.96789 4.8 5.17Z" fill="#BCA4FF" />
          <path id="test use2" d="M11.64 12H18.36C18.58 12 18.66 12.02 18.74 12.07C18.83 12.11 18.89 12.17 18.94 12.26C18.98 12.34 19 12.42 19 12.64V13.36C19 13.58 18.98 13.66 18.93 13.74C18.8892 13.8249 18.8227 13.8949 18.74 13.94C18.66 13.98 18.58 14 18.36 14H11.64C11.42 14 11.34 13.98 11.26 13.93C11.1751 13.8892 11.1051 13.8227 11.06 13.74C11.02 13.66 11 13.58 11 13.36V12.64C11 12.42 11.02 12.34 11.07 12.26C11.11 12.17 11.17 12.11 11.26 12.06C11.34 12.02 11.42 12 11.64 12Z" fill="#14142A" />
        </g>
        <g id="gears">
          <g id="Group">
            <path id="Vector" d="M28.1075 16.575C27.488 14.475 24.512 14.475 23.8925 16.575L23.7425 17.085C23.6499 17.3994 23.4882 17.6891 23.2691 17.9328C23.05 18.1766 22.7791 18.3682 22.4763 18.4936C22.1736 18.619 21.8465 18.6751 21.5193 18.6577C21.192 18.6403 20.8728 18.5498 20.585 18.393L20.12 18.138C18.1955 17.091 16.091 19.1955 17.1395 21.1185L17.393 21.585C18.062 22.815 17.4275 24.3465 16.085 24.7425L15.575 24.8925C13.475 25.512 13.475 28.488 15.575 29.1075L16.085 29.2575C16.3994 29.3501 16.6891 29.5118 16.9328 29.7309C17.1766 29.95 17.3682 30.2209 17.4936 30.5237C17.619 30.8264 17.6751 31.1535 17.6577 31.4807C17.6403 31.808 17.5498 32.1272 17.393 32.415L17.138 32.88C16.091 34.8045 18.1955 36.909 20.1185 35.8605L20.585 35.607C20.8728 35.4502 21.192 35.3597 21.5193 35.3423C21.8465 35.3249 22.1736 35.381 22.4763 35.5064C22.7791 35.6318 23.05 35.8234 23.2691 36.0672C23.4882 36.3109 23.6499 36.6006 23.7425 36.915L23.8925 37.425C24.512 39.525 27.488 39.525 28.1075 37.425L28.2575 36.915C28.3501 36.6006 28.5118 36.3109 28.7309 36.0672C28.95 35.8234 29.2209 35.6318 29.5237 35.5064C29.8264 35.381 30.1535 35.3249 30.4807 35.3423C30.808 35.3597 31.1272 35.4502 31.415 35.607L31.88 35.862C33.8045 36.909 35.909 34.8045 34.8605 32.8815L34.607 32.415C34.4502 32.1272 34.3597 31.808 34.3423 31.4807C34.3249 31.1535 34.381 30.8264 34.5064 30.5237C34.6318 30.2209 34.8234 29.95 35.0672 29.7309C35.3109 29.5118 35.6006 29.3501 35.915 29.2575L36.425 29.1075C38.525 28.488 38.525 25.512 36.425 24.8925L35.915 24.7425C35.6006 24.6499 35.3109 24.4882 35.0672 24.2691C34.8234 24.05 34.6318 23.7791 34.5064 23.4763C34.381 23.1736 34.3249 22.8465 34.3423 22.5193C34.3597 22.192 34.4502 21.8728 34.607 21.585L34.862 21.12C35.909 19.1955 33.8045 17.091 31.8815 18.1395L31.415 18.393C31.1272 18.5498 30.808 18.6403 30.4807 18.6577C30.1535 18.6751 29.8264 18.619 29.5237 18.4936C29.2209 18.3682 28.95 18.1766 28.7309 17.9328C28.5118 17.6891 28.3501 17.3994 28.2575 17.085L28.1075 16.575ZM26 31.395C24.8344 31.395 23.7165 30.932 22.8923 30.1077C22.068 29.2835 21.605 28.1656 21.605 27C21.605 25.8344 22.068 24.7165 22.8923 23.8923C23.7165 23.068 24.8344 22.605 26 22.605C27.1652 22.605 28.2827 23.0679 29.1067 23.8918C29.9306 24.7158 30.3935 25.8333 30.3935 26.9985C30.3935 28.1637 29.9306 29.2812 29.1067 30.1052C28.2827 30.9291 27.1652 31.392 26 31.392V31.395Z" fill="#82E9FF" />
          </g>
        </g>
      </g>
    </svg>
  );
}
const UXDesignIcon = () => {
  return (
    <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 237">
        <path id="rulersvg" d="M30.9146 0.34324L0.343093 30.9153C-0.254236 31.5121 -0.0510375 32.0001 0.792689 32.0001V32.0001C1.00977 32.0001 1.18575 31.8241 1.18575 31.607V30.9187C1.18575 30.7799 1.29834 30.6673 1.43722 30.6673V30.6673C1.5761 30.6673 1.68868 30.7799 1.68868 30.9187V31.5078C1.68868 31.7797 1.90908 32.0001 2.18094 32.0001V32.0001C2.45281 32.0001 2.67321 31.7797 2.67321 31.5078V30.9185C2.67321 30.7797 2.78567 30.6673 2.92441 30.6673V30.6673C3.06314 30.6673 3.1756 30.7797 3.1756 30.9185V31.5075C3.1756 31.7795 3.39612 32.0001 3.66813 32.0001V32.0001C3.94015 32.0001 4.16066 31.7795 4.16066 31.5075V30.9185C4.16066 30.7797 4.27313 30.6673 4.41186 30.6673V30.6673C4.55059 30.6673 4.66306 30.7797 4.66306 30.9185V31.5078C4.66306 31.7797 4.88345 32.0001 5.15532 32.0001V32.0001C5.42719 32.0001 5.64758 31.7797 5.64758 31.5078V29.7459C5.64758 29.6071 5.76017 29.4945 5.89905 29.4945V29.4945C6.03793 29.4945 6.15051 29.6071 6.15051 29.7459V31.4665C6.15051 31.7612 6.38941 32.0001 6.68411 32.0001V32.0001C6.97881 32.0001 7.21771 31.7612 7.21771 31.4665V30.919C7.21771 30.78 7.33041 30.6673 7.46944 30.6673V30.6673C7.60846 30.6673 7.72117 30.78 7.72117 30.919V31.5078C7.72117 31.7797 7.94156 32.0001 8.21343 32.0001V32.0001C8.4853 32.0001 8.70569 31.7797 8.70569 31.5078V30.9185C8.70569 30.7797 8.81816 30.6673 8.95689 30.6673V30.6673C9.09562 30.6673 9.20809 30.7797 9.20809 30.9185V31.5075C9.20809 31.7795 9.4286 32.0001 9.70062 32.0001V32.0001C9.97263 32.0001 10.1931 31.7795 10.1931 31.5075V30.9187C10.1931 30.7799 10.3057 30.6673 10.4446 30.6673V30.6673C10.5835 30.6673 10.6961 30.7799 10.6961 30.9187V31.5078C10.6961 31.7797 10.9165 32.0001 11.1883 32.0001V32.0001C11.4602 32.0001 11.6806 31.7797 11.6806 31.5078V29.7454C11.6806 29.6068 11.7929 29.4945 11.9315 29.4945V29.4945C12.0701 29.4945 12.1825 29.6068 12.1825 29.7454V31.4659C12.1825 31.7609 12.4216 32.0001 12.7166 32.0001V32.0001C13.0116 32.0001 13.2507 31.7609 13.2507 31.4659V30.9185C13.2507 30.7797 13.3632 30.6673 13.5019 30.6673V30.6673C13.6407 30.6673 13.7531 30.7797 13.7531 30.9185V31.5075C13.7531 31.7795 13.9736 32.0001 14.2456 32.0001V32.0001C14.5177 32.0001 14.7382 31.7795 14.7382 31.5075V30.9187C14.7382 30.7799 14.8508 30.6673 14.9896 30.6673V30.6673C15.1285 30.6673 15.2411 30.7799 15.2411 30.9187V31.5081C15.2411 31.7798 15.4614 32.0001 15.7331 32.0001V32.0001C16.0048 32.0001 16.2251 31.7798 16.2251 31.5081V30.919C16.2251 30.78 16.3378 30.6673 16.4768 30.6673V30.6673C16.6159 30.6673 16.7286 30.78 16.7286 30.919V31.5075C16.7286 31.7795 16.9491 32.0001 17.2211 32.0001V32.0001C17.4931 32.0001 17.7136 31.7795 17.7136 31.5075V29.7454C17.7136 29.6068 17.826 29.4945 17.9646 29.4945V29.4945C18.1031 29.4945 18.2155 29.6068 18.2155 29.7454V31.4659C18.2155 31.7609 18.4546 32.0001 18.7496 32.0001V32.0001C19.0446 32.0001 19.2837 31.7609 19.2837 31.4659V30.9185C19.2837 30.7797 19.3962 30.6673 19.5349 30.6673V30.6673C19.6737 30.6673 19.7861 30.7797 19.7861 30.9185V31.5078C19.7861 31.7797 20.0065 32.0001 20.2784 32.0001V32.0001C20.5503 32.0001 20.7707 31.7797 20.7707 31.5078V30.919C20.7707 30.78 20.8834 30.6673 21.0224 30.6673V30.6673C21.1614 30.6673 21.2741 30.78 21.2741 30.919V31.5078C21.2741 31.7797 21.4945 32.0001 21.7664 32.0001V32.0001C22.0383 32.0001 22.2587 31.7797 22.2587 31.5078V30.9185C22.2587 30.7797 22.3711 30.6673 22.5099 30.6673V30.6673C22.6486 30.6673 22.761 30.7797 22.761 30.9185V31.5075C22.761 31.7795 22.9816 32.0001 23.2536 32.0001V32.0001C23.5256 32.0001 23.7461 31.7795 23.7461 31.5075V29.7457C23.7461 29.6069 23.8586 29.4945 23.9973 29.4945V29.4945C24.136 29.4945 24.2485 29.6069 24.2485 29.7457V31.4662C24.2485 31.761 24.4875 32.0001 24.7824 32.0001V32.0001C25.0772 32.0001 25.3162 31.761 25.3162 31.4662V30.9187C25.3162 30.7799 25.4288 30.6673 25.5677 30.6673V30.6673C25.7066 30.6673 25.8192 30.7799 25.8192 30.9187V31.5078C25.8192 31.7797 26.0396 32.0001 26.3114 32.0001V32.0001C26.5833 32.0001 26.8037 31.7797 26.8037 31.5078V30.9187C26.8037 30.7799 26.9163 30.6673 27.0551 30.6673V30.6673C27.194 30.6673 27.3066 30.7799 27.3066 30.9187V31.5078C27.3066 31.7797 27.527 32.0001 27.7989 32.0001V32.0001C28.0707 32.0001 28.2911 31.7797 28.2911 31.5078V30.9182C28.2911 30.7796 28.4035 30.6673 28.5421 30.6673V30.6673C28.6807 30.6673 28.793 30.7796 28.793 30.9182V31.5073C28.793 31.7794 29.0136 32.0001 29.2858 32.0001V32.0001C29.558 32.0001 29.7786 31.7794 29.7786 31.5073V29.7459C29.7786 29.6071 29.8912 29.4945 30.0301 29.4945V29.4945C30.1689 29.4945 30.2815 29.6071 30.2815 29.7459V31.8187C30.2815 31.9189 30.3627 32.0001 30.4629 32.0001V32.0001C30.8699 31.9994 31.2601 31.8375 31.5482 31.5498C31.8362 31.2622 31.9986 30.8722 31.9999 30.4651V0.792837C31.9999 -0.0514233 31.5108 -0.254088 30.9146 0.34324ZM24.9157 23.3804C24.9144 23.7871 24.7523 24.1768 24.4647 24.4643C24.1772 24.7519 23.7875 24.914 23.3808 24.9153H17.9008C17.0566 24.9153 16.855 24.4268 17.4507 23.8305L23.8293 17.4524C24.4261 16.8562 24.9152 17.0583 24.9152 17.9026L24.9157 23.3804Z" fill="#BCA4FF" />
        <path id="Vector_2" d="M30.7334 27.0169C27.1405 24.3617 21.3228 28.6703 20.0137 34.4839C19.0053 38.9635 14.3351 38.7798 14.4011 39.379C14.4657 39.9781 24.8974 40.9376 28.6659 37.792C32.1857 34.8527 34.6732 29.9294 30.7334 27.0169ZM36.1448 16.839C34.8123 16.1036 33.3068 16.8037 32.4789 18.0807L31.1484 20.133C30.1846 21.6196 30.9276 23.9073 32.357 24.9542V24.9542C33.771 25.9899 36.2782 26.333 37.5352 25.1115L39.2267 23.4677C40.3493 22.3769 40.7077 20.7121 39.6386 19.5689C38.6754 18.539 37.3866 17.5242 36.1448 16.839Z" fill="#82E9FF" />
      </g>
    </svg>
  );
}
const BackendIcon = () => {
  return (
    <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 238">
        <path id="box1" d="M28.8594 6.4123L15.177 0.0973304C15.0384 0.0332114 14.8876 0 14.7349 0C14.5823 0 14.4314 0.0332114 14.2929 0.0973304L0.61045 6.4123C0.427758 6.49685 0.273145 6.63201 0.164947 6.80177C0.0567493 6.97153 -0.000494909 7.16876 3.22351e-06 7.37007V25.2625C-0.000494909 25.4638 0.0567493 25.661 0.164947 25.8308C0.273145 26.0005 0.427758 26.1357 0.61045 26.2202L14.2929 32.5352C14.4314 32.5993 14.5823 32.6325 14.7349 32.6325C14.8876 32.6325 15.0384 32.5993 15.177 32.5352L28.8594 26.2202C29.0421 26.1357 29.1967 26.0005 29.3049 25.8308C29.4131 25.661 29.4703 25.4638 29.4698 25.2625V7.37007C29.4703 7.16876 29.4131 6.97153 29.3049 6.80177C29.1967 6.63201 29.0421 6.49685 28.8594 6.4123ZM15.1542 12.3337C14.8882 12.4565 14.5817 12.4565 14.3156 12.3337L5.53375 8.27793C4.75945 7.92033 4.75945 6.8198 5.53375 6.46221L14.3156 2.40648C14.5817 2.28362 14.8882 2.28362 15.1542 2.40648L23.9361 6.46221C24.7104 6.8198 24.7104 7.92033 23.9361 8.27793L15.1542 12.3337ZM27.3649 23.9492C27.3649 24.3392 27.1382 24.6936 26.7841 24.8571L17.2067 29.2801C16.544 29.5861 15.7874 29.1021 15.7874 28.3722V14.9983C15.7874 14.6083 16.0141 14.2539 16.3682 14.0904L25.9456 9.6674C26.6082 9.36138 27.3649 9.84537 27.3649 10.5753V23.9492Z" fill="#BCA4FF" />
        <path id="box2" d="M43.5948 13.7797L29.9123 7.46476C29.7738 7.40064 29.6229 7.36743 29.4703 7.36743C29.3176 7.36743 29.1668 7.40064 29.0282 7.46476L15.3458 13.7797C15.1631 13.8643 15.0085 13.9994 14.9003 14.1692C14.7921 14.339 14.7349 14.5362 14.7354 14.7375V32.6299C14.7349 32.8312 14.7921 33.0284 14.9003 33.1982C15.0085 33.368 15.1631 33.5031 15.3458 33.5877L29.0282 39.9026C29.1668 39.9668 29.3176 40 29.4703 40C29.6229 40 29.7738 39.9668 29.9123 39.9026L43.5948 33.5877C43.7774 33.5031 43.9321 33.368 44.0403 33.1982C44.1485 33.0284 44.2057 32.8312 44.2052 32.6299V14.7375C44.2057 14.5362 44.1485 14.339 44.0403 14.1692C43.9321 13.9994 43.7774 13.8643 43.5948 13.7797ZM29.8896 19.7011C29.6235 19.8239 29.317 19.8239 29.051 19.7011L20.2691 15.6454C19.4948 15.2878 19.4948 14.1872 20.2691 13.8296L29.051 9.77391C29.317 9.65105 29.6235 9.65105 29.8896 9.77391L38.6714 13.8296C39.4457 14.1872 39.4457 15.2878 38.6714 15.6454L29.8896 19.7011ZM42.1002 31.3166C42.1002 31.7066 41.8735 32.061 41.5195 32.2245L31.942 36.6475C31.2794 36.9536 30.5228 36.4696 30.5228 35.7397V22.3657C30.5228 21.9758 30.7495 21.6214 31.1035 21.4579L40.6809 17.0348C41.3436 16.7288 42.1002 17.2128 42.1002 17.9427V31.3166Z" fill="#82E9FF" />
      </g>
    </svg>
  );
}
