import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

import Hamburger from './Hamburger';
import routes from '../data/routes';
import languages from '../data/languages';

import { toggleToolbar } from '../../../actions/app.actions';

const Header = ({ toolbarOpen, dispatch }) => {
    const menuIcon = toolbarOpen ? faTimes : faBars;
    return(
        <header id="header">

            <h1 className="index-link">
                <Button onClick={() => dispatch(toggleToolbar()) } fluid style={{backgroundColor: 'transparent', flex: 1, height: 'inherit', width: 40, lineHeight: 1}}>
                    <FontAwesomeIcon icon={menuIcon} />
                </Button>
            </h1>
            <h1 className="index-link">
            {routes.filter((l) => l.index).map((l) => (
                <Link key={l.label} to={l.path}>{l.label}</Link>
            ))}
            </h1>
            <nav className="links">
            <ul>
                {routes.filter((l) => !l.index).map((l) => (
                <li key={l.label}>
                    <Link to={l.path}>{l.label}</Link>
                </li>
                ))}
            </ul>
            </nav>
            <nav className="links-right">
                <ul>
                {languages.filter((l) => !l.index).map((l, indice) => (
                    <li key={`in${indice}`}>
                        <Link to={l.locale}>{l.flag}</Link>
                    </li>
                ))}
                </ul>
            </nav>
            
            <Hamburger />
        </header>
    )
};


// Header.defaultProps = {
//     dispatch: () => {},
//     toolbarOpen: false,
//     };
    
// Header.propTypes = {
//     dispatch: PropTypes.func,
//     toolbarOpen: PropTypes.bool,
//     };
    
// const mapStateToProps = state => ({
//     toolbarOpen: state.app.toolbarOpen,
//     });

    
// export default connect(mapStateToProps)(Header);

export default Header;