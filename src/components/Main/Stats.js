import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {useTranslation} from "react-i18next";

import Main from './Main';

import Personal from './Stats/Personal';
import Site from './Stats/Site';

const Stats = ({resume, updateResume}) => {
    const {t} = useTranslation('main');
    return (
        <Main resume={resume} updateResume={updateResume}>
            <Helmet title={t('resume.stats.title')} />
            <article className="post" id="stats">
                <header>
                    <div className="title">
                        <h2><Link to="/stats">{t('resume.stats.title')}</Link></h2>
                    </div>
                </header>
                <Personal resume={resume} t={t} />
                <Site t={t} />
            </article>
        </Main>
    )
};

export default Stats;
