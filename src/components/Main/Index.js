import React from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next'
import {useTranslation} from "react-i18next";

import Main from './Main';


const Index = ({resume, updateResume}) => {
    const {t} = useTranslation('main');
    return(
        <Main resume={resume} updateResume={updateResume}>
            <article className="post" id="index">
            <header>
                <div className="title">
                    <h2>
                        <Link to="/">{t('index.about')}</Link>
                    </h2>
                    <p>{t('index.decription')}</p>
                </div>
            </header>
            <p> 
                <Trans 
                    i18nKey="main:index.welcome"
                    components={{ 
                        about: <Link to="/about" />, 
                        resume: <Link to="/resume" />, 
                        stats: <Link to="/stats" />,
                        contact: <Link to="/contact" /> }}
                />
            </p>
            <p>
                <Trans 
                    i18nKey="main:index.subWelcome"
                    components={{ 
                        netlify: <a target='_blank' href='https://www.netlify.com/' />, 
                        fauna: <a target='_blank' href='https://fauna.com/' />}}
                />
            </p>
            <p> {t('index.sourceAvailable')} <a href="https://github.com/popolin/react-resume">{t('index.here')}</a>.</p>
            </article>
        </Main>
    )
};

export default Index;
