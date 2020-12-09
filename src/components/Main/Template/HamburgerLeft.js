import React, { useState, useRef } from 'react';

import Menu from 'react-burger-menu/lib/menus/slide';
import {FaFileCode, FaFile} from 'react-icons/fa';

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
                    icon={FaFile}
                    label={t('toolbar.buttonSimple')}
                    labelHover={t('toolbar.buttonSimpleHover')}
                    to='/simple' />
                <ButtonMenu
                    icon={FaFileCode}
                    label={t('toolbar.buttonJson')}
                    labelHover={t('toolbar.buttonJsonHover')}
                    to='/json' />

            </Menu>
        </div>
    );
};

export default HamburgerLeft;
