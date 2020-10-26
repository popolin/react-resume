import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getSocialIcon} from '../../util/iconUtil'

export const Header = ({ resume }) => {
    const {header} = resume;
    const contactsWithShort = resume.contacts.map(contact => {
        const {link, label} = contact;
        const fromIndex = link.lastIndexOf('/');
        let short = null;
        if(fromIndex > 0){
            short = link.substr(fromIndex+1);
        }
        return {
            link, label, short
        };
    })
    return (
    <header className="resume-header" >
        <h1 >{header.name}</h1>
        <ul>
            <li data-testid="Website" >
                <a href={header.website}>{header.website}</a>
            </li>
            <li data-testid="Email" >
                <a href={`mailto:${header.email}?subject=Interview%20Request`}>
                    {header.email}
                </a>
            </li>
            <li data-testid="Phone">
                <a href={`tel:${header.phone}`}>
                    {header.phone}
                </a>
            </li>
        </ul>
        <ul>
            {contactsWithShort.filter(s => s.short).map((s) => (
                <li key={s.label}>
                    <a href={s.link}>
                        <FontAwesomeIcon size={4} icon={getSocialIcon(s.label)} />{` ${s.short}`}
                    </a>
                </li>
            ))}
        </ul>
        <div style={{marginTop: 5}}>
            <li>{`${header.city}, ${header.state} - ${header.country}`}</li>
        </div>
    </header>
    )
};

export default Header;



