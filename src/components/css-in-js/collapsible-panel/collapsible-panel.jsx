import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

import Button from '../button/button';
import { Container, Content, Header, StyledIcon, Title } from './collapsible-panel.styles';

function CollapsiblePanel(props) {
  const [isExpanded, setIsExpanded] = useState(props.initialState === 'expanded');
  const Icon = isExpanded ? ChevronDownIcon : ChevronRightIcon;
  const panelId = `collapsible-panel-${Date.now()}`;

  return (
    <Container>
      <Header>
        <Button
          ariaControls={panelId}
          ariaExpanded={isExpanded}
          ariaLabel='Toggle panel content visibility'
          onClick={() => setIsExpanded(prevValue => !prevValue)}
        >
          <StyledIcon>
            <Icon />
          </StyledIcon>
        </Button>
        <Title>{props.title}</Title>
      </Header>
      
      <Content
        id={panelId}
        role='region'
        expanded={isExpanded}
        aria-labelledby={panelId}
      >
        {props.children}
      </Content>
    </Container>
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
