import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const References = () => {
  const { t } = useTranslation('main');
  return (
    <div className="references">
      <div className="link-to" id="resume.section.references" />
      <div className="title">
        <Link to="/contact">
          <h3>{t('resume.references.title')}</h3>
        </Link>
      </div>
    </div>
  );
};

export default References;
