import PropTypes from 'prop-types';
import { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import cx from 'classnames';

import Button from '../button/button';

import styles from './collapsible-panel.module.css';

function CollapsiblePanel(props) {
  const [isExpanded, setIsExpanded] = useState(props.initialState);
  const Icon = isExpanded ? ChevronDownIcon : ChevronRightIcon;
  const panelId = `collapsible-panel-${Date.now()}`;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button
          aria-controls={panelId}
          aria-expanded={isExpanded}
          aria-label='Toggle panel content visibility'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Icon className={styles.icon} width={24} height={24} />
        </Button>
        <h2>{props.title}</h2>
      </div>

      <div
        id={panelId}
        aria-labelledby={panelId}
        role="region"
        className={cx(
          styles.content,
          { [styles.expanded]: isExpanded }
        )}
      >
        {props.children}
      </div>
    </div>
  );
}

CollapsiblePanel.propTypes = {
  /**
   * Panel's title.
   */
  title: PropTypes.string.isRequired,
  initialState: PropTypes.oneOf(['expanded' | 'collapsed' ]),
  /**
   * The contents of the panel to be displayed when expanded.
   */
  children: PropTypes.node.isRequired,
};

CollapsiblePanel.propTypes = {
  initialState: 'collapsed'
};

export default CollapsiblePanel;
