import { tv } from 'tailwind-variants';

export const notificationStyles = tv({
  base: 'text-white py-2 px-3',
  variants: {
    type: {
      info: 'bg-info-500',
      success: 'bg-success-500',
      warning: 'bg-warning-500',
      error: 'bg-error-500'
    },
    size: {
      small: 'w-28',
      medium: 'w-52',
      large: 'w-96'
    },
    isRounded: {
      true: 'rounded'
    }
  },
  defaultVariants: {
    type: 'info',
    size: 'medium',
    isRounded: false
  }
});
