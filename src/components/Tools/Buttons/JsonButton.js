import React from 'react';
import { Button } from 'semantic-ui-react';
import { toggleJson } from '../../../actions/app.actions';

import {useTranslation} from "react-i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {faFileCode} from '@fortawesome/free-solid-svg-icons/faFileCode';

const JsonButton = ({ dispatch }) => {
    const {t} = useTranslation('edit');
    return (
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
                        {t('toolbar.buttonJson')}
                    </Button.Content>
                    <Button.Content hidden style={{color:"#646464"}}>
                        {t('toolbar.buttonJsonHover')}{'  '}
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </Button.Content>
                </Button>
            
        </div>
    )
};

export default JsonButton;
