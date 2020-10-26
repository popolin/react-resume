import React from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next'
import {useTranslation} from "react-i18next";
import dayjs from 'dayjs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getSocialIcon} from '../../../util/iconUtil'


const Nav = ({resume}) => {
    const {t} = useTranslation('main');
    const degreesOrdered = resume.degrees.sort((a, b) => dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1);
    const lastDegree = degreesOrdered[0];

    const positionsOrdered = resume.positions.sort((a, b) => dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1);
    const lastPosition = positionsOrdered[0];
    const penultPosition = positionsOrdered[1];
    const antPenultPosition = positionsOrdered[2];
    const firstPosition = positionsOrdered[positionsOrdered.length-1];
    const yearsExperience = dayjs().year() - dayjs(firstPosition.begin).year();

    const NavDesc = ({description}) => (
        <Trans 
            i18nKey={description}
            values={{
                yearsExperience,
                firstName: resume.header.name.split(' ')[0],
                lastGraduation: lastDegree.degree,
                lastGraduationSchool: lastDegree.school,
                latCompanyPosition: lastPosition.position,
                latCompany: lastPosition.company,
                penultCompany: penultPosition.company,
                beforePenultCompany: antPenultPosition.company
            }}
            components={{ 
                school: <a target='_blank' href={lastDegree.link} />, 
                lastCompany: <a target='_blank' href={lastPosition.link} />, 
                penultCompany: <a target='_blank' href={penultPosition.link} />, 
                beforePenultCompany: <a target='_blank' href={antPenultPosition.link} />,
                others: <Link to='/resume' /> }}
        />
    )

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
                <NavDesc description="main:nav.description1" />
                <br />
                <NavDesc description="main:nav.description2" />
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
