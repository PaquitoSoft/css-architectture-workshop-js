import Button from './button';

export default {
  title: 'css-in-js/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    tone: 'primary',
    children: 'Save'
  },
};

export const Secondary = {
  args: {
    tone: 'secondary',
    children: 'Reset'
  },
};

export const Critical = {
  args: {
    tone: 'critical',
    children: 'Delete'
  },
};

export const Large = {
  args: {
    size: 'large',
    tone: 'primary',
    children: 'Save'
  },
};

export const Small = {
  args: {
    size: 'small',
    tone: 'secondary',
    children: 'Save'
  },
};

export const Disabled = {
  args: {
    isDisabled: true,
    children: 'Save'
  },
};

export const Rounded = {
  args: {
    tone: 'primary',
    isRounded: true,
    children: 'Save'
  },
};
