import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Personal from './Personal';
import Site from './Site';
import Body, { IResume } from '../../components/Body';

interface StatsProps {
  resume: IResume;
  updateResume: React.FunctionComponent;
}

const Stats: React.FC<StatsProps> = ({ resume, updateResume }) => {
  const { t } = useTranslation('main');
  return (
    <Body resume={resume} updateResume={updateResume}>
      <Helmet title={t('resume.stats.title')} />
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2>
              <Link to="/stats">{t('resume.stats.title')}</Link>
            </h2>
          </div>
        </header>
        <Personal resume={resume} t={t} />
        <Site t={t} />
      </article>
    </Body>
  );
};

export default Stats;
