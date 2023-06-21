import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button onClick={props.onClick}>{props.children}</button>
  );
}

Button.propTypes = {
  /**
   * Controls the color of the button
   */
  tone: PropTypes.oneOf(['primary', 'secondary', 'critical']),
  /**
   * Controls the size of the button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Whether to use rounded corners
   */
  isRounded: PropTypes.bool,
  /**
   * Should the button be disabled?
   */
  isDisabled: PropTypes.bool,
  /**
   * Event handler to call when the button is clicked
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Content to render within the button
   */
  children: PropTypes.node.isRequired,
};

export default Button;
