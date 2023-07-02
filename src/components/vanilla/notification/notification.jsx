import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './notification.module.css';

function Notification(props) {
  return (
    <div
      className={cx(
        styles.notification,
        styles[`type-${props.type}`],
        styles[`size-${props.size}`],
        { [styles.rounded]: props.isRounded }
      )}
    >
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

Notification.defaultProps = {
  type: 'info',
  size: 'medium',
  isRounded: false
};

export default Notification;
