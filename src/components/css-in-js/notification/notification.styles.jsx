import { styled } from '@macaron-css/react';
import { themeVars } from "../theme";

export const StyledNotification = styled('div', {
  base: {
    color: themeVars.color.surface,
    fontFamily: themeVars.font.family,
    fontSize: themeVars.font.size20,
    padding: `${themeVars.spacing20} ${themeVars.spacing30}`,
    width: '200px'
  },
  variants: {
    type: {
      info: {
        backgroundColor: themeVars.color.primary100
      },
      success: {
        backgroundColor: themeVars.color.secondary100
      },
      warning: {
        backgroundColor: themeVars.color.warning100,
        color: themeVars.color.solid
      },
      error: {
        backgroundColor: themeVars.color.critical100
      }
    },
    size: {
      small: { width: '100px' },
      large: { width: '300px' },
    },
    rounded: {
      true: { borderRadius: themeVars.borderRadius10}
    }
  }
});
