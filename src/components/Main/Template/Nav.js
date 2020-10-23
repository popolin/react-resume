import React from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next'
import {useTranslation} from "react-i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getSocialIcon} from '../../../util/iconUtil'

const Nav = ({resume}) => {
    const {t} = useTranslation('main');
    return(
        <section id="sidebar">
            <section id="intro">
            <Link to="/" className="logo">
                <img src={resume.header.photo} alt="" />
            </Link>
            <header>
                <h2>{resume.header.shortName}</h2>
                <p><a href={`mailto:${resume.header.email}`}>{resume.header.email}</a></p>
            </header>
            </section>

            <section className="blurb">
            <h2>{t('nav.about')}</h2>
            <p>
                <Trans 
                    i18nKey="main:nav.description"
                    values={{
                        firstName: resume.header.name.split(' ')[0],
                        lastGraduationDegree: 'Master Degree',
                        lastGraduationSchool: 'UnB',
                        lastGraduation: 'Distributed Computing Development',
                        latCompanyPosition: 'Full Stack Dev',
                        latCompany: 'Trix',
                        penultCompany: 'Pix',
                        beforePenultCompany: 'Oi'
                    }}
                    components={{ 
                        school: <a target='_blank' href="http://ppgi.unb.br" />, 
                        lastCompany: <a target='_blank' href="https://www.trixti.com.br" />, 
                        penultCompany: <a target='_blank' href="https://www.facebook.com/pixidea" />, 
                        beforePenultCompany: <a target='_blank' href="http://oiapps.com.br" />,
                        others: <Link to='/resume' /> }}
                />
            </p>
            <ul className="actions">
                <li>
                    {window.location.pathname !== `${`/react-resume`}/resume` ? <Link to="/resume" className="button">{t('nav.learnMore')}</Link> : <Link to="/about" className="button">About Me</Link>}
                </li>
            </ul>
            </section>

            <section id="footer">
            <ul className="icons">
                {resume.contacts.map((s) => (
                <li key={s.label}>
                    <a href={s.link}>
                        <FontAwesomeIcon icon={getSocialIcon(s.label)} />
                    </a>
                </li>
                ))}
            </ul>
            <p className="copyright">&copy; Michel Popolin <Link to="/">popolin.com.br</Link>.</p>
            </section>
        </section>
    )
};

export default Nav;
