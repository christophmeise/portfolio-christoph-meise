import styled from "styled-components";

interface ButtonProps {
    readonly inverted?: boolean;
};

export const Button = styled.button<ButtonProps>`
    color: ${props => props.inverted ? props.theme.colors.fontWhite : props.theme.colors.fontBlack};
    border: 2px solid ${props => props.inverted ? props.theme.colors.fontWhite : props.theme.colors.fontBlack};
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 40px;
    font-weight: 600;
    font-size: 14px;
    line-height: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.75px;
    padding: 12px 30px;
    cursor: pointer;
`;
