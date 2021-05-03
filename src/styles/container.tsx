import styled from 'styled-components';

interface ContainerProps {
    readonly centered?: boolean;
}

export const Container = styled.section<ContainerProps>`
    display: grid;
    grid-template-columns: [full-start] minmax(2rem,1fr) [standard-start] 0 [narrow-start] minmax(1rem,67.5rem) [narrow-end] 0 [standard-end] minmax(2rem,1fr) [full-end];
    padding: 0;
    position: relative;
    text-align: ${(props) => (props.centered ? 'center' : 'left')};
    @media (min-width: 50rem) {
       grid-template-columns: [full-start] minmax(2rem,1fr) [standard-start] 3.75rem [narrow-start] minmax(1rem,67.5rem) [narrow-end] 3.75rem [standard-end] minmax(2rem,1fr) [full-end];
    }
`;

export const ContainerContentStandard = styled.div`
  grid-column: standard;
`;
export const ContainerContentFull = styled.div`
  grid-column: full;
`;
/* export const Container = styled.div<ContainerProps>`
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    text-align: ${props => props.centered ? 'center' : 'left'};
    @media ${device.tablet} {
       width: 768px;
    }
    @media ${device.tablet} {
       width: 970px;
    }
    @media ${device.tablet} {
        width: 1170px;
    }
`;

 */
