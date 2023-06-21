import PropTypes from 'prop-types';

function Notification(props) {
  return (
    <div>
      {props.children}
    </div>
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

export default Notification;
