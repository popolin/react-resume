import React from 'react';
import { useTranslation } from 'react-i18next';

const Certifications = ({ certifications }) => {
  const { t } = useTranslation('main');

  return (
    <div className="education">
      <div className="link-to" id="resume.section.certifications" />
      <div className="title">
        <h3>{t('resume.section.certifications')}</h3>
      </div>
      {certifications.map((certification, idx) => (
        <article key={idx} className="degree-container" style={{ marginBottom: 10 }}>
          <header>
            <h4 className="degree" style={{ fontWeight: 'bold' }}>{certification.from}</h4>
            {certification.tests.map((test, idxTest) => (
              <p key={idxTest} className="school" style={{ marginTop: idxTest == 0 ? -5 : -30, fontWeight: 900 }}>
                <strong>
                  {test.shortName}
                  {' '}
                  -
                </strong>
                {' '}
                {test.title}
              </p>
            ))}
          </header>
        </article>
      ))}
    </div>
  );
};

export default Certifications;
