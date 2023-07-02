import CollapsiblePanel from './collapsible-panel';

import '../theme.css';

export default {
  title: 'vanilla/Collapsible Panel',
  component: CollapsiblePanel,
  tags: ['autodocs'],
};

const Address = () => (
  <div>
    <div>Calle Real, 1</div>
    <span style={{ fontSize: 14 }}>CP. 15003 - A Coruña</span>
  </div>
);

export const Basic = {
  args: {
    title: 'Hidden message',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
}

export const Collapsed = {
  args: {
    title: 'Shipping Address',
    children: <Address />
  },
};

export const Expanded = {
  args: {
    title: 'Shipping Address',
    children: <Address />,
    initialState: 'expanded'
  },
};
