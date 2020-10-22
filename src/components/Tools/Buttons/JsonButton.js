import React from 'react';
import { Button } from 'semantic-ui-react';
import { toggleJson } from '../../../actions/app.actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {faFileCode} from '@fortawesome/free-solid-svg-icons/faFileCode';

const JsonButton = ({ dispatch }) => (
  <div className="json-resume-tool">
        <Button animated fluid 
            onClick={() => dispatch(toggleJson())}
            style={{
                height: 50,
                backgroundColor: '#fff', borderColor: '#fff',
                fontSize: 12, fontWeight: 400
            }}>
            <Button.Content visible>
                <FontAwesomeIcon icon={faFileCode}  color="#646464"/>
                {'  '}
                VERSÃO JSON
            </Button.Content>
            <Button.Content hidden style={{color:"#646464"}}>
                Json{'  '}
                <FontAwesomeIcon icon={faArrowRight}/>
            </Button.Content>
        </Button>
    
  </div>
);

export default JsonButton;
