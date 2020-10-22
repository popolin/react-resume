import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { toggleSimples } from '../../../actions/app.actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';

const SimplesButton = ({ resume, dispatch }) => (
  <div className="json-resume-tool">
      <Button animated fluid 
            onClick={() => dispatch(toggleSimples())}
            style={{
                height: 50,
                backgroundColor: '#fff', borderColor: '#fff',
                fontSize: 12, fontWeight: 400
            }}>
            <Button.Content visible>
                <FontAwesomeIcon icon={faFile}  color="#646464"/>
                {'  '}
                VERSÃO SIMPLES
            </Button.Content>
            <Button.Content hidden style={{color:"#646464"}}>
                Simples{'  '}
                <FontAwesomeIcon icon={faArrowRight} />
            </Button.Content>
        </Button>
    
  </div>
);

SimplesButton.defaultProps = {
  resume: {},
};

SimplesButton.propTypes = {
  resume: PropTypes.shape({}),
};

export default SimplesButton;
