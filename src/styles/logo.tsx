import styled from 'styled-components';

interface LogoProps {
    readonly primary?: boolean;
}

export const Logo = styled.span<LogoProps>`
    color: ${(props) => (props.primary ? '#000000' : '#FFFFFF')};
    cursor: pointer;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 30px;
    margin-bottom: 0;
    margin-right: 32px;
    margin-top: 0;
    text-align: right;
`;
