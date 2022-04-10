import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { device } from '../../theme/theme';
import HoverContainer from '../selectedWorkItem';

export const TagContainer = styled.div`
  column-gap: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 500px;
  row-gap: 8px;
`;
export const Tag = styled.div`
  align-items: center;
  border: 1px solid #FFFFFF;
  border-radius: 40px;
  box-shadow: 0 0 1px 0px white inset, 0 0 1px 0px white;
  display: flex;
  justify-content: center;
  span {
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    padding: 3px 14px;
  }
`;
export const TextContainer = styled.div`
  padding: 48px 24px;

  @media ${device.tablet} {
    padding: 62px 48px;
    max-width: 520px;
  }
`;
export const MercedesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  #wewater-illustration {
    display: none;
    visibility: hidden;
  }

  @media ${device.tablet} {
    #wewater-illustration {
      display: block;
      visibility: visible;
    }
  }

  h3 {
    color: ${(props) => props.theme.colors.fontWhite};
    font-size: 28px;
    font-weight: 800;
    line-height: 40px;
    margin: 16px 0;
  }
  p {
    color: ${(props) => props.theme.colors.fontWhite};
    font-size: 17px;
    font-weight: normal;
    line-height: 32px;
  }
`;

export default class MercedesCard extends PureComponent {
  render() {
    return (
      <HoverContainer large containerId="mercedes-container" href="https://www.mercedes-benz.de/passengercars/configurator.html?kpid=go_cmp-12048946313_adg-117005915220_ad-490888941252_kwd-300735337658_dev-c_ext-&gclid=EAIaIQobChMIlLboqMOH9wIV6YxoCR3YGgHbEAAYASAAEgJeJ_D_BwE&group=all&subgroup=see-all&view=BODYTYPE">
        <MercedesContainer>
          <TextContainer>
            <h3>
              Mercedes-Benz Tech Innovation
            </h3>
            <p>
              Improving the Mercedes-Benz Online Store and Car Configurator by enabling data enrichment and Car-by-Car comparison.
            </p>
            <TagContainer>
              <Tag>
                <span>Spring Boot</span>
              </Tag>
              <Tag>
                <span>Kotlin</span>
              </Tag>
              <Tag>
                <span>Opensearch</span>
              </Tag>
              <Tag>
                <span>Angular</span>
              </Tag>
              <Tag>
                <span>Java 17</span>
              </Tag>
              <Tag>
                <span>Docker</span>
              </Tag>
              <Tag>
                <span>Kubernetes</span>
              </Tag>
              <Tag>
                <span>Spring Cloud Dataflow</span>
              </Tag>
              <Tag>
                <span>DevOps</span>
              </Tag>
            </TagContainer>
          </TextContainer>
          {/*           {
            typeof window !== 'undefined' && window.innerWidth > 768
            && (
              <StaticImage
                src="../../../static/images/works/mercedes.jpg"
                alt="Mercedes Vehicle"
                height={420}
                width={764}
                quality={100}
                className="mercedes-img"
                loading="eager"
                objectPosition="right"
                objectFit="contain"
                placeholder="none"
              />
            )
          } */}
        </MercedesContainer>
      </HoverContainer>
    );
  }
}
