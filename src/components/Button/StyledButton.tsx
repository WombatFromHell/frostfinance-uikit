import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps } from "./types";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

const getDisabledStyles = ({ isLoading, theme }: ThemedButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.pancake-button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.pancake-button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.2s;
  border-radius: 0.5rem;
    color: ${({ theme }) => (theme.isDark ? `#fff` : `#0ad9e4`)};
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: solid 3px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      linear-gradient(90deg, #42d784, #60d5dc);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: ${({ theme }) => (theme.isDark ? `2px 1000px 1px #212230 inset` : `2px 1000px 1px #E6FDFE inset`)};
      

  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
    opacity: 0.85;
  }

  ${getDisabledStyles}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${layout}
  ${space}
`;

export default StyledButton;
