import React from 'react';
import { Link } from 'react-router-dom';
import {  Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

import Hamburger from './Hamburger';
import routes from '../data/routes';
import languages from '../data/languages';

import { toggleToolbar } from '../../../actions/app.actions';

import {useTranslation} from "react-i18next";

const Header = ({ resume, toolbarOpen, dispatch }) => {

    const {t, i18n} = useTranslation('main');

    const changeLanguage = code => {
        localStorage.setItem('@react-resume/language', code);
        i18n.changeLanguage(code);
    };

    const toggleLocal = () => {
        dispatch(toggleToolbar());
    }
    const menuIcon = toolbarOpen ? faTimes : faBars;
    return (
        <header id="header">
            <h1 className="index-link">
                <Button onClick={() => toolbarOpen ? {} : toggleLocal() } fluid style={{backgroundColor: 'transparent', flex: 1, height: 'inherit', width: 40, lineHeight: 1}}>
                    <FontAwesomeIcon icon={menuIcon} />
                </Button>
            </h1>
            <h1 className="index-link">
                <Link to="/">{resume.header.shortName}</Link>
            </h1>
            <nav className="links">
            <ul>
                {routes.map((l) => (
                <li key={l.label}>
                    <Link to={l.path}>{t(l.label)}</Link>
                </li>
                ))}
            </ul>
            </nav>
            <nav className="links-right">
                <ul>
                {languages.filter((l) => !l.index).map((l, indice) => (
                    <li key={`in${indice}`}>
                        <Link onClick={() => changeLanguage(l.locale)} to={`#`}>{l.flag}</Link>
                    </li>
                ))}
                </ul>
            </nav>
            
            <Hamburger />
        </header>
    )
};

export default Header;