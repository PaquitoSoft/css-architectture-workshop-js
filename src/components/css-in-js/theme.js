import { createGlobalTheme } from '@macaron-css/core';

export const themeVars = createGlobalTheme(':root', {
  color: {
    primary100: '#1976d2',
    primary200: '#1565c0',
    secondary100: '#319795',
    secondary200: '#2c7a7b',
    tertiary100: '#d3d1d1',
    warning100: '#ecc94b',
    critical100: '#e53e3e',
    critical200: '#c53030',
    surface: '#fff',
    solid: '#000',
  },
  font: {
    family: 'Inter, sans-serif',
    size10: '0.7rem',
    size20: '0.825rem',
    size30: '1.125rem',
  },

  spacing10: '4px',
  spacing20: '8px',
  spacing30: '16px',
  spacing40: '24px',
  spacing50: '32px',
  spacing60: '48px',
  spacing70: '72px',

  borderRadius10: '4px',
  borderRadius20: '16px',
});
