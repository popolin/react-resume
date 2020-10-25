import React from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

import Resume from '../../components/Resume';

import Main from './Main';

const Simple = ({resume, updateResume}) => {

    const {t} = useTranslation('edit');

    return(
        <Main resume={resume} updateResume={updateResume} full={true}>
            <article className="post" id="index">
                <header>
                    <div className="title">
                        <h2>
                            <Link to="/simple">{t('simples.title')}</Link>
                        </h2>
                        <p>{t('simples.description')}</p>
                    </div>
                </header>
            
                <Resume resume={resume} />
            </article>

        </Main>
    )
};

export default Simple;
