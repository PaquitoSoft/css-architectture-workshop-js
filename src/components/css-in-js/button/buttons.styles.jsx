import { styled } from '@macaron-css/react';
import { themeVars } from '../theme';

const StyledButton = styled('button', {
  base: {
    backgroundColor: 'transparent',
    border: 'none',
    color: themeVars.color.surface,
    cursor: 'pointer',
    fontFamily: themeVars.font.family,
    fontSize: themeVars.font.size20,
    padding: `${themeVars.spacing20} ${themeVars.spacing30}`
  },
  variants: {
    tone: {
      primary: {
        backgroundColor: themeVars.color.primary100,
        ':hover': {
          backgroundColor: themeVars.color.primary200
        }
      },
      secondary: { 
        backgroundColor: themeVars.color.secondary100,
        ':hover': {
          backgroundColor: themeVars.color.secondary200,
        } 
      },
      critical: { 
        backgroundColor: themeVars.color.critical100,
        ':hover': {
          backgroundColor: themeVars.color.critical200,
        } 
      },
    },
    size: {
      small: {
        padding: `${themeVars.spacing10} ${themeVars.spacing20}`,
        fontSize: themeVars.font.size10
      },
      large: {
        padding: `${themeVars.spacing30} ${themeVars.spacing40}`,
        fontSize: themeVars.font.size30
      },
    },
    isRounded: {
      true: {
        borderRadius: themeVars.borderRadius20,
      }
    },
    isDisabled: {
      true: {
        backgroundColor: themeVars.color.tertiary100,
        cursor: 'not-allowed',
        ':hover': {
          backgroundColor: themeVars.color.tertiary100,
        }
      }
    },
  }
});

export default StyledButton;
