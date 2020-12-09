import React from 'react';
import { Label, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa';


const ButtonMenu = ({
  icon: Icon, label, labelHover, to, onClick, title,
}) => (
  <div className="json-resume-tool">
    {title && (
    <Label size="big" basic>
      {title}
    </Label>
    )}
    <Button
      animated
      fluid
      as={to === undefined ? null : Link}
      to={to}
      onClick={onClick}
      style={{
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#fff',
        fontSize: 12,
      }}
    >
      <Button.Content visible style={{ color: '#646464', marginTop: to === undefined ? 0 : 8 }}>
        <Icon />
        {'  '}
        {label}
      </Button.Content>
      <Button.Content hidden style={{ color: '#646464' }}>
        {labelHover}
        {'  '}
        <FaArrowRight />
      </Button.Content>
    </Button>

  </div>
);

export default ButtonMenu;
