import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Label, Button } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';

const notMe = () => {
    toast(' ❌ Ops... Só eu posso fazer isso', { toastId: 12 })
}

const EditorButton = ({ dispatch }) => (
  <div className="json-resume-tool">
    <Label size="big" basic>
      Admin
    </Label>
    <Button animated fluid 
            onClick={() => notMe()}
            style={{
                height: 50,
                backgroundColor: '#fff', borderColor: '#fff',
                fontSize: 12, fontWeight: 400
            }}>
            <Button.Content visible style={{}}>
                <FontAwesomeIcon icon={faEdit}  color="#646464"/>
                {'  '}
                EDITAR JSON
            </Button.Content>
            <Button.Content hidden style={{color:"#646464"}}>
                Editar{'  '}
                <FontAwesomeIcon icon={faArrowRight}  />
            </Button.Content>
        </Button>
  </div>
);

EditorButton.defaultProps = {
  dispatch: () => {},
};

EditorButton.propTypes = {
  dispatch: PropTypes.func,
};

export default EditorButton;
