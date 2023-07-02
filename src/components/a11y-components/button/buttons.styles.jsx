import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
  base: 'bg-transparent border-0 text-white',
  variants: {
    tone: {
      primary: 'bg-primary-500 hover:bg-primary-600',
      secondary: 'bg-secondary-500 hover:bg-secondary-600',
      critical: 'bg-critical-500 hover:bg-critical-600'
    },
    size: {
      small: 'py-1 px-2 font-sm',
      medium: 'py-2 px-3 font-base',
      large: 'py-4 px-6 font-lg'
    },
    rounded: {
      true: 'rounded'
    },
    disabled: {
      true: 'bg-tertiary-400 hover:bg-tertiary-400 cursor-not-allowed'
    },
    compoundVariants: [
      {
        size: 'large',
        rounded: true,
        class: 'rounded-xl'
      }
    ],
    defaultVariants: {
      tone: 'primary',
      size: 'medium',
      rounded: false,
      disabled: false,
    }
  }
});
