/* eslint-disable no-shadow */
import styled from 'styled-components';

export enum ButtonSizes {
    s, m, l, xl, xxl
}
interface ButtonProps {
    readonly inverted?: boolean;
    readonly size?: ButtonSizes;
}

const fontSizeChooser = (props: any) => {
    if (props.size === ButtonSizes.s) return '14px';
    if (props.size === ButtonSizes.m) return '16px';
    if (props.size === ButtonSizes.l) return '18px';
    if (props.size === ButtonSizes.xl) return '20px';
    if (props.size === ButtonSizes.xxl) return '22px';
    return '14px';
};
const lineHeightChooser = (props: any) => {
    if (props.size === ButtonSizes.s) return '12px';
    if (props.size === ButtonSizes.m) return '14px';
    if (props.size === ButtonSizes.l) return '16px';
    if (props.size === ButtonSizes.xl) return '18px';
    if (props.size === ButtonSizes.xxl) return '20px';
    return '12px';
};
const paddingChooser = (props: any) => {
    if (props.size === ButtonSizes.s) return '12px 30px';
    if (props.size === ButtonSizes.m) return '14px 34px';
    if (props.size === ButtonSizes.l) return '16px 39px';
    if (props.size === ButtonSizes.xl) return '22px 54px';
    if (props.size === ButtonSizes.xxl) return '24px 60px';
    return '12px 30px';
};


export const Button = styled.button<ButtonProps>`
    align-items: center;
    background-color: transparent;
    border: 2px solid ${(props) => (props.inverted ? props.theme.colors.fontWhite : props.theme.colors.fontBlack)};
    border-radius: 40px;
    box-sizing: border-box;
    color: ${(props) => (props.inverted ? props.theme.colors.fontWhite : props.theme.colors.primary)};
    cursor: pointer;
    display: flex;
    font-size: ${fontSizeChooser};
    font-weight: 600;
    letter-spacing: 0.75px;
    line-height: ${lineHeightChooser};
    padding: ${paddingChooser};
    text-align: center;
`;
