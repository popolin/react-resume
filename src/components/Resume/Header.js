import React from 'react';

import linkedinIcon from '../../icons/linkedin.svg';
import mailIcon from '../../icons/mail.svg';
import phoneIcon from '../../icons/phone.svg';
import websiteIcon from '../../icons/internet.svg';
import githubIcon from '../../icons/github.svg';

export const Header = ({ resume }) => {
    const {header} = resume;
    return (
    <header className="resume-header" >
        <h1 >{header.name}</h1>
        <ul>
            <li data-testid="Email">
            <a href={`mailto:${header.email}?subject=Interview%20Request`}>
            <img src={mailIcon} className="header-icon normal-icon" alt="Mail Icon" />
            {header.email}
            </a>
            </li>
            <li data-testid="Phone">
                <a href={`tel:${header.phone}`}>
                    <img src={phoneIcon} className="header-icon normal-icon" alt="Phone Icon" />
                {header.phone}
                </a>
            </li>
            <li data-testid="Github">
                <a href={header.github} target="_new">
                <img src={githubIcon} className="header-icon normal-icon" alt="Github Icon" />
                {header.github}
                </a>
            </li>
            <li data-testid="LinkedIn">
                <a href={header.linkedin} target="_new">
                <img src={linkedinIcon} className="header-icon normal-icon" alt="LinkedIn Icon" />
                {header.linkedin}
                </a>
            </li>
            <li data-testid="Website">
                <a href={header.website} target="_new">
                <img src={websiteIcon} className="header-icon normal-icon" alt="Website Icon" />
                {header.website}
                </a>
            </li>
        </ul>
        <ul data-testid="Address">
            <li>{header.address}</li>
            <li>{header.city}</li>
            <li>{header.state}</li>
            <li>{header.zip}</li>
            <li>{header.country}</li>
        </ul>
    </header>
    )
};

export default Header;



