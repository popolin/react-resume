import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from './Main';

const docMarkdown = require('./data/about.md');


// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = ({resume, updateResume}) => {

    const {t} = useTranslation('main');
    const [markdown, setMarkdown] = React.useState('');

    useEffect(() => {
        loadMarkdown();
      }, []);

    const loadMarkdown = async() => {
        fetch(docMarkdown)
            .then((res) => res.text())
            .then((md) => {
                setMarkdown(md);
        })
    }
    

    const count = markdown.split(/\s+/)
        .map((s) => s.replace(/\W/g, ''))
        .filter((s) => s.length).length;

    return(
        <Main resume={resume} updateResume={updateResume}>
            <Helmet title={t('about.title')} />
            <article className="post" id="about">
            <header>
                <div className="title">
                <h2><Link to="/about">{t('about.title')}</Link></h2>
                <p>({t('about.subtitle', {count})})</p>
                </div>
            </header>
            <ReactMarkdown
                children={markdown}
                allowDangerousHtml={true}
                renderers={{
                    Link: LinkRenderer,
                }}
            />
            </article>
        </Main>
    )
};

export default About;
