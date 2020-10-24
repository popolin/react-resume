import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import classNames from 'classnames';
import Certifications from './Certifications';
import Education from './Education';
import Experience from './Experience';
import ResumeHeader from './Header';
import TechnicalSkills from './TechnicalSkills';
import {
  EDUCATION,
  TECH_SKILLS,
  EXPERIENCE,
  CERTIFICATION,
  defaultResumeOrder,
} from '../../helpers/resume.helper';

import '../../../src/static/css/simpleResume.css';

const Resume = ({
  font,
  order,
}) => (
  <>
    <div className={classNames('react-resume', 'a4', { })}>
      <div
        className="resume"
        style={{ fontFamily: font }}
      >
        <ResumeHeader />
        {order.map((item) => {
          switch (item) {
            case EDUCATION:
              return <Education key={uuid()} />;
            case TECH_SKILLS:
              return <TechnicalSkills key={uuid()} />;
            case EXPERIENCE:
              return <Experience key={uuid()} />;
            case CERTIFICATION:
              return <Certifications key={uuid()} />;
            default:
              return <p key={uuid()}>Error with order.</p>;
          }
        })}
      </div>
    </div>
    
  </>
);

Resume.defaultProps = {
  font: undefined,
  order: defaultResumeOrder,
};

Resume.propTypes = {
  font: PropTypes.string,
  order: PropTypes.arrayOf(PropTypes.number),
};

const mapStateToProps = state => ({
  font: state.tools.font,
  order: state.tools.order,
  resume: state.resume,
});

export default connect(mapStateToProps)(Resume);
