import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

const SidebarCloseButton = ({
  closeToolbar,
  title,
}) => (
  <Menu
    attached="top"
    size="massive"
    borderless
    style={{ border: 'none', maxWidth: '100%', paddingTop: 60}}
  >
    {title
      && <Menu.Item position="left" content={title}  />}
      
    <Menu.Item
      position="right"
      icon={<FontAwesomeIcon icon={faTimes} />}
      onClick={closeToolbar}
      style={{
        minWidth: 60,
      }}
    />
    
  </Menu>
);

SidebarCloseButton.defaultProps = {
  closeToolbar: () => {},
  toolbarOpen: false,
  title: undefined,
  backgroundColor: undefined,
};

SidebarCloseButton.propTypes = {
  closeToolbar: PropTypes.func,
  toolbarOpen: PropTypes.bool,
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default SidebarCloseButton;
