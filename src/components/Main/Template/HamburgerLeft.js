import React, { useState, useRef } from 'react';

import { Label } from 'semantic-ui-react';
import Menu from 'react-burger-menu/lib/menus/slide';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import {faFileCode} from '@fortawesome/free-solid-svg-icons/faFileCode';
import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';

import {useTranslation} from "react-i18next";

import { useOnClickOutside } from '../../../helpers/hooks';

import ToolbarHeader from './ToolbarHeader';
import ButtonMenu from './ButtonMenu';


const HamburgerLeft = ({ resume }) => {
    const node = useRef();
    const {t} = useTranslation('edit');

    useOnClickOutside(node, () => setMenuOpen(false));

    const [menuOpen, setMenuOpen] = useState(false);
    const changeMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }


    return (
        <div ref={node}>
            <nav className="main" id="hambuger-nav-left">
                <ul>
                    {menuOpen ? (
                        <li className="menu close-menu" style={{ left: 0, right: 'auto' }}>
                            <div onClick={() => changeMenuOpen()} className="menu-hover">&#10005;</div>
                        </li>
                    ) : (
                            <li className="menu open-menu" style={{ left: 0, right: 'auto' }}>
                                <div onClick={() => changeMenuOpen()} className="menu-hover">&#9776;</div>
                            </li>
                        )}
                </ul>
            </nav>
            <Menu left isOpen={menuOpen} >
                <ToolbarHeader />
                <ButtonMenu 
                    icon={faFile}
                    label={t('toolbar.buttonSimple')}
                    labelHover={t('toolbar.buttonSimpleHover')}
                    to='/simple' />
                <ButtonMenu 
                    icon={faFileCode}
                    label={t('toolbar.buttonJson')}
                    labelHover={t('toolbar.buttonJsonHover')}
                    to='/json' />
                {/* <ButtonMenu 
                    icon={faEdit}
                    label={t('toolbar.buttonEdit')}
                    labelHover={t('toolbar.buttonEditHover')}
                    title="Admin"
                    onClick={() => console.log('boraaa')} /> */}
            </Menu>
        </div>
    );
};

export default HamburgerLeft;
