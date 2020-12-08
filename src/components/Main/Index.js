import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';


import Main from './Main';


const Index = ({ resume, updateResume }) => {
  const { t } = useTranslation('main');
  return (
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
              contact: <Link to="/contact" />,
            }}
          />
        </p>
        <p>
          <Trans
            i18nKey="main:index.subWelcome"
            components={{
              netlify: <Link target="_blank" to="https://www.netlify.com/" />,
              fauna: <Link target="_blank" to="https://fauna.com/" />,
            }}
          />
        </p>
        <p>
          {' '}
          {t('index.sourceAvailable')}
          {' '}
          <Link to="https://github.com/popolin/react-resume">{t('index.here')}</Link>
          .
        </p>
      </article>
    </Main>
  );
};

export default Index;
