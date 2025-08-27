import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

import dayjs from 'dayjs';
import Body from '../../components/Body';

import { IResume } from '../../components/Body';

interface IndexProps {
  resume: IResume;
  updateResume: React.FunctionComponent;
}

const Index: React.FC<IndexProps> = ({ resume, updateResume }) => {
  const positionsOrdered = resume.positions.sort((a, b) =>
    dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1,
  );
  const firstPosition = positionsOrdered[positionsOrdered.length - 1];
  const yearsExperience = dayjs().year() - dayjs(firstPosition.begin).year();

  const { t } = useTranslation('main');
  return (
    <Body resume={resume} updateResume={updateResume}>
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
            values={{
              yearsExperience,
            }}
            components={{
              about: <Link to="/about" />,
              resume: <Link to="/resume" />,
              stats: <Link to="/stats" />,
              contact: <Link to="/contact" />,
            }}
          />
        </p>
        <span>
          Here you can:
          <ul>
            <li>
              Learn more <Link to="/about">about me</Link> and
              <Link to="/resume"> my journey</Link>
            </li>
            <li>
              Get in <Link to="/contact">touch with me</Link>
            </li>
          </ul>
        </span>
        <p>
          <Trans
            i18nKey="main:index.subWelcome"
            components={{
              linkNetlify: (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.netlify.com/"
                >
                  Netlify
                </a>
              ),
              linkFauna: (
                <a rel="noreferrer" target="_blank" href="https://fauna.com/">
                  FaunaDB
                </a>
              ),
            }}
          />
        </p>
        <p>
          {' '}
          {t('index.sourceAvailable')}{' '}
          <a href="https://github.com/popolin/react-resume">
            {t('index.here')}
          </a>
          .
        </p>
      </article>
    </Body>
  );
};

export default Index;
