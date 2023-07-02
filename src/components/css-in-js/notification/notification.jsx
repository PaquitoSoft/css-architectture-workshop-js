import PropTypes from 'prop-types';

import { StyledNotification } from './notification.styles';

function Notification(props) {
  return (
    <StyledNotification
      type={props.type}
      size={props.size}
      rounded={props.isRounded}
    >
      {props.children}
    </StyledNotification>
  );
}

Notification.propTypes = {
  /**
   * Controls the colors of the notification
   */
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  /**
   * Controls the size of the notification
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Use rounded corners
   */
  isRounded: PropTypes.bool,
  /**
   * Content to render within the button
   */
  children: PropTypes.node.isRequired,
};

Notification.defaultProps = {
  type: 'info',
  size: 'medium',
  isRounded: false
};

export default Notification;
