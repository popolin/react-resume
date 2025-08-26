import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
// import HamburgerLeft from './HamburgerLeft';
// import languages from '../data/languages';
import routes from '../data/routes';

import {useTranslation} from "react-i18next";

const Header = ({ resume, updateResume }) => {
    
    
    const {t, i18n} = useTranslation('main');

    const changeLanguage = code => {
        localStorage.setItem('@react-resume/language', code);
        i18n.changeLanguage(code);
        updateResume();
    };

    return (
        <header id="header">
            {/* <HamburgerLeft resume={resume} /> */}

            <h1 className="index-link" style={{marginLeft: 30}}>
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
                {/* {languages.filter((l) => !l.index).map((l, indice) => (
                    <li key={`in${indice}`}>
                        <Link onClick={() => changeLanguage(l.locale)} to={`#`}>{l.flag}</Link>
                    </li>
                ))} */}
                </ul>
            </nav>
            
            <Hamburger />
        </header>
    )
};

export default Header;