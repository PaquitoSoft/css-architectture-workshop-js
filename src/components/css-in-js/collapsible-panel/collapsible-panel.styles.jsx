import { styled } from '@macaron-css/react';
import { themeVars } from "../theme";

export const Container = styled('div', {
  base: {
    fontFamily: themeVars.font.family,
    border: `1px solid ${themeVars.color.tertiary100}`,
    padding: `${themeVars.spacing20} ${themeVars.spacing10}`
  }
});

export const Header = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
  }
});

export const Title = styled('h2', {
  base: {
    margin: 0,
    padding: `${themeVars.spacing20} 0`
  }
});

export const StyledIcon = styled('div', {
  base: {
    color: themeVars.color.solid,
    cursor: 'pointer',
    height: themeVars.spacing40,
    width: themeVars.spacing40,
  }
});

export const Content = styled('div', {
  base: {
    display: 'none',
    padding: `${themeVars.spacing20} 0 ${themeVars.spacing20} calc(${themeVars.spacing60} + ${themeVars.spacing20})`,
  },
  variants: {
    expanded: {
      true: { display: 'block' }
    }
  }
});
