import PropTypes from 'prop-types';
import { /*ChevronRightIcon,*/ ChevronDownIcon } from '@heroicons/react/24/solid';

import Button from '../button/button';

function CollapsiblePanel(props) {
  return (
    <div>
      <div>
        <Button>
          <ChevronDownIcon width={24} height={24} />
        </Button>
        <h2>{props.title}</h2>
      </div>

      <div>
        {props.children}
      </div>
    </div>
  );
}

CollapsiblePanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CollapsiblePanel;
