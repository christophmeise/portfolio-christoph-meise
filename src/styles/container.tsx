import styled from "styled-components";

interface ContainerProps {
    readonly centered?: boolean;
};

export const Container = styled.div<ContainerProps>`
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    text-align: ${props => props.centered ? 'center' : 'left'};
    @media (min-width: 768px) {
       width: 768px;
    }
    @media (min-width: 992px) {
       width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
`;

