import React from 'react';
import classNames from 'classnames';
import Certifications from './Certifications';
import Education from './Education';
import Experience from './Experience';
import ResumeHeader from './Header';
import TechnicalSkills from './TechnicalSkills';

import '../../../src/static/css/simpleResume.css';

const Resume = ({resume}) => (
  <>
    <div className={classNames('react-resume', 'a4', { })}>
      <div className="resume">
        <ResumeHeader resume={resume} />

        <Education resume={resume} />
        <TechnicalSkills resume={resume} />
        <Experience resume={resume} />
        <Certifications resume={resume} />
        
      </div>
    </div>
    
  </>
);

export default Resume;
