import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import path from 'path';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Body, { IResume } from '../../components/Body';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ptMarkdown = require('../../static/about_pt.md');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const enMarkdown = require('../../static/about_en.md');

interface AboutProps {
  resume: IResume;
  updateResume: React.FunctionComponent;
}

const About: React.FC<AboutProps> = ({ resume, updateResume }) => {
  const { t } = useTranslation('main');

  const currentLanguage =
    localStorage.getItem('@react-resume/language') || 'en';

  let docMarkdown = enMarkdown;
  if (currentLanguage === 'pt') {
    docMarkdown = ptMarkdown;
  }

  const [markdown, setMarkdown] = React.useState('');

  const loadMarkdown = useCallback(() => {
    fetch(docMarkdown)
      .then(res => res.text())
      .then(md => {
        setMarkdown(md);
      });
  }, [docMarkdown]);

  useEffect(() => {
    loadMarkdown();
  }, [loadMarkdown]);

  const count = markdown
    .split(/\s+/)
    .map(s => s.replace(/\W/g, ''))
    .filter(s => s.length).length;

  return (
    <Body resume={resume} updateResume={updateResume}>
      <Helmet title={t('about.title')} />
      <article className="post" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">{t('about.title')}</Link>
            </h2>
            <p>({t('about.subtitle', { count })})</p>
          </div>
        </header>
        <ReactMarkdown allowDangerousHtml>{markdown}</ReactMarkdown>
      </article>
    </Body>
  );
};

export default About;
