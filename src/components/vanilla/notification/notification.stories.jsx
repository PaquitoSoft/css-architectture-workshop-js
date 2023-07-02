import Notification from './notification';

import '../theme.css';

export default {
  title: 'vanilla/Notification',
  component: Notification,
  tags: ['autodocs'],
};

export const Info = {
  args: {
    children: 'You have new mail.'
  },
};

export const Success = {
  args: {
    type: 'success',
    children: 'Email successfully sent.'
  },
};

export const Warning = {
  args: {
    type: 'warning',
    children: 'Your session is about to expire.'
  },
};

export const Error = {
  args: {
    type: 'error',
    children: 'Message could not be sent.'
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'You have new mail.'
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'You have new mail.'
  },
};

export const Rounded = {
  args: {
    isRounded: true,
    children: 'You have new mail.'
  }
}
