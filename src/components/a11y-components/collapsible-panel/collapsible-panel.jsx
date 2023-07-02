import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import * as Collapsible from '@radix-ui/react-collapsible';

import Button from '../button/button';

function CollapsiblePanel(props) {
  const [isExpanded, setIsExpanded] = useState(props.initialState === 'expanded');
  const Icon = isExpanded ? ChevronDownIcon : ChevronRightIcon;
  const panelId = `collapsible-panel-${Date.now()}`;

  return (
    <Collapsible.Root
      className="border py-2 px-1 border-gray-300"
      open={isExpanded}
      onOpenChange={setIsExpanded}
    >
      <div className="flex items-center gap-2">
        <Collapsible.Trigger asChild>
          <Button
            ariaControls={panelId}
            ariaExpanded={isExpanded}
            ariaLabel='Toggle panel content visibility'
            onClick={() => setIsExpanded(prevValue => !prevValue)}
          >
            <Icon className="w-8 h-8 text-black" />
          </Button>
        </Collapsible.Trigger>

        <h2 className="m-0 py-2">{props.title}</h2>
      </div>

      <Collapsible.Content className="py-2 pl-10">
        {props.children}
      </Collapsible.Content>
    </Collapsible.Root>
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
