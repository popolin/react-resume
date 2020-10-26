import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';

import Menu from 'react-burger-menu/lib/menus/slide';

import { useOnClickOutside } from '../../../helpers/hooks';
import routes from '../data/routes';
import {useTranslation} from "react-i18next";

const Hamburger = () => {
    const node = useRef();
    const {t} = useTranslation('main');

    useOnClickOutside(node, () => setMenuOpen(false));

    const [menuOpen, setMenuOpen] = useState(false);
    const changeMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }



  return (
    <div ref={node} className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {menuOpen ? (
            <li className="menu close-menu">
              <div onClick={() => changeMenuOpen()} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => changeMenuOpen()} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      <Menu right isOpen={menuOpen}>
        <ul className="hamburger-ul">
          {routes.map((l) => (
            <li key={l.label}>
              <Link to={l.path} onClick={() => changeMenuOpen()}>
                <h3 className={l.index && 'index-li'}>{t(l.label)}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  );
};

export default Hamburger;
