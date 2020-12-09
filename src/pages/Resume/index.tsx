import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { useTranslation } from 'react-i18next';

import Body, { IResume } from '../../components/Body';
import Education from '../../components/Main/Resume/Education';
import Experience from '../../components/Main/Resume/Experience';
import Certifications from '../../components/Main/Resume/Certifications';
import Courses from '../../components/Main/Resume/Courses';

import Skills from '../../components/Main/Resume/Skills';
import References from '../../components/Main/Resume/References';

const sections = [
  'resume.section.education',
  'resume.section.experience',
  'resume.section.skills',
  'resume.section.courses',
  'resume.section.certifications',
  'resume.section.references',
];

interface ResumeProps {
  resume: IResume;
  updateResume: React.FunctionComponent;
}

const Resume: React.FC<ResumeProps> = ({ resume, updateResume }) => {
  const { t } = useTranslation('main');

  return (
    <Body resume={resume} updateResume={updateResume}>
      <Helmet title={t('resume.title')} />
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2>
              <Link to="resume">{t('resume.title')}</Link>
            </h2>
            <div className="link-container">
              {sections.map(sec => (
                <h4 key={sec}>
                  <a href={`#${sec}`}>{t(sec)}</a>
                </h4>
              ))}
            </div>
          </div>
        </header>
        <Education degrees={resume.degrees} />
        <Experience positions={resume.positions} />
        <Skills skills={resume.skills} />
        <Courses courses={resume.courses} />
        <Certifications certifications={resume.certifications} />
        <References />
      </article>
    </Body>
  );
};

export default Resume;
