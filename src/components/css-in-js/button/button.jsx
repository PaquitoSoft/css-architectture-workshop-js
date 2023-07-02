import PropTypes from 'prop-types';

import StyledButton from './buttons.styles';

function Button(props) {
  return (
    <StyledButton
      {...props}
      disabled={props.isDisabled}
      onClick={props.onClick}
      aria-controls={props.ariaControls}
      aria-expanded={props.ariaExpanded}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </StyledButton>
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
  /**
   * Defines aria-controls ay11 attribute
   */
  ariaControls: PropTypes.string,
  /**
   * Defines aria-expanded ay11 attribute
   */
  ariaExpanded: PropTypes.bool,
  /**
   * Defines aria-label ay11 attribute
   */
  ariaLabel: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  size: 'medium',
  isRounded: false,
  isDisabled: false
};

export default Button;
