import React from 'react';
import { Label, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import {useTranslation} from "react-i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';


const ButtonMenu = ({ icon, label, labelHover, to, onClick, title }) => {
    const {t} = useTranslation('edit');
    return (
        <div className="json-resume-tool">
            {title && (
                <Label size="big" basic>
                    {title}
                </Label>
            )}
            <Button animated fluid 
                    as={to === undefined ? null : Link} to={to}
                    onClick={onClick}
                    style={{
                        height: 50,
                        backgroundColor: '#fff',
                        borderColor: '#fff',
                        fontSize: 12}}>
                    <Button.Content visible style={{color:"#646464", marginTop: to === undefined ? 0 : 8}}>
                        <FontAwesomeIcon icon={icon} />
                        {'  '}
                        {label}
                    </Button.Content>
                    <Button.Content hidden style={{color:"#646464"}}>
                        {labelHover}{'  '}
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Button.Content>
                </Button>
            
        </div>
    )
};

export default ButtonMenu;
