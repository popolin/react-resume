import React from 'react';
import { Button } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons/faGlobeAmericas';

const FancyButton = () => (
  <div className="json-resume-tool">
        <Button animated fluid 
            style={{
                height: 50,
                backgroundColor: '#fff', borderColor: '#fff',
                fontSize: 12, fontWeight: 400
            }}>
            <Button.Content visible>
                <FontAwesomeIcon icon={faGlobeAmericas}  color="#646464"/>
                {'  '}
                VERSÃO 'THEME'
            </Button.Content>
            <Button.Content hidden style={{color:"#646464"}}>
                Theme{'  '}
                <FontAwesomeIcon icon={faArrowRight} />
            </Button.Content>
        </Button>
  </div>
);

export default FancyButton;
