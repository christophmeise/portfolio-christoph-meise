import styled from "styled-components";

interface LogoProps {
    readonly primary?: boolean;
};

export const Logo = styled.span<LogoProps>`
    color: ${props => props.primary ? '#000000' : '#FFFFFF'};
    line-height: 17px;
    font-weight: 800;
    font-size: 22px;
    letter-spacing: -0.03em;
    margin-bottom: 0;
    margin-top: 0;
    text-align: right;
    margin-right: 32px;
    cursor: pointer;
`;
