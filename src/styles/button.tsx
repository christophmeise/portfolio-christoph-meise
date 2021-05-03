import styled from 'styled-components';

interface ButtonProps {
    readonly inverted?: boolean;
}

export const Button = styled.button<ButtonProps>`
    align-items: center;
    background-color: transparent;
    border: 2px solid ${(props) => (props.inverted ? props.theme.colors.fontWhite : props.theme.colors.fontBlack)};
    border-radius: 40px;
    box-sizing: border-box;
    color: ${(props) => (props.inverted ? props.theme.colors.fontWhite : props.theme.colors.fontBlack)};
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.75px;
    line-height: 12px;
    padding: 12px 30px;
    text-align: center;
`;
