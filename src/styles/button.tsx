/* eslint-disable no-shadow */
import styled from 'styled-components';
import { device } from '../theme/theme';

export enum ButtonSizes {
    s, m, l, xl, xxl
}
interface ButtonProps {
    readonly inverted?: boolean;
    readonly size?: ButtonSizes;
}

const fontSizeChooserMobile = (props: any) => {
    if (props.size === ButtonSizes.s) return '12px';
    if (props.size === ButtonSizes.m) return '14px';
    if (props.size === ButtonSizes.l) return '16px';
    if (props.size === ButtonSizes.xl) return '18px';
    if (props.size === ButtonSizes.xxl) return '20px';
    return '12px';
};
const lineHeightChooserMobile = (props: any) => {
    if (props.size === ButtonSizes.s) return '10px';
    if (props.size === ButtonSizes.m) return '12px';
    if (props.size === ButtonSizes.l) return '14px';
    if (props.size === ButtonSizes.xl) return '16px';
    if (props.size === ButtonSizes.xxl) return '18px';
    return '10px';
};
const paddingChooserMobile = (props: any) => {
    if (props.size === ButtonSizes.s) return '10px 26px';
    if (props.size === ButtonSizes.m) return '12px 30px';
    if (props.size === ButtonSizes.l) return '14px 34px';
    if (props.size === ButtonSizes.xl) return '16px 39px';
    if (props.size === ButtonSizes.xxl) return '22px 54px';
    return '10px 26px';
};
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
    font-size: ${fontSizeChooserMobile};
    font-weight: 600;
    letter-spacing: 0.75px;
    line-height: ${lineHeightChooserMobile};
    padding: ${paddingChooserMobile};
    text-align: center;
    transition: all 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);

    @media ${device.laptop} {
        font-size: ${fontSizeChooser};
        line-height: ${lineHeightChooser};
        padding: ${paddingChooser};
    }

    &:hover {
        background: ${(props) => (props.inverted ? props.theme.colors.primary : 'transparent')};
        border: 2px solid ${(props) => (props.inverted ? props.theme.colors.primary : props.theme.colors.primaryLight)};
        color: ${(props) => (props.inverted ? props.theme.colors.fontWhite : props.theme.colors.primaryLight)};
    }
`;
