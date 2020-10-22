import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import classNames from 'classnames';
import Certifications from './Certifications';
import Education from './Education';
import Experience from './Experience';
import ResumeHeader from './Header';
import Projects from './Projects';
import TechnicalSkills from './TechnicalSkills';
import {  Button } from 'semantic-ui-react';
// import { paperSizes } from '../Tools/PaperSize';
import {
  EDUCATION,
  TECH_SKILLS,
  PROJECTS,
  EXPERIENCE,
  CERTIFICATION,
  defaultResumeOrder,
} from '../../helpers/resume.helper';
import '../../styles/Resume.css';

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
            case PROJECTS:
              return <Projects key={uuid()} />;
            case EXPERIENCE:
              return <Experience key={uuid()} />;
            case CERTIFICATION:
              return <Certifications key={uuid()} />;
            default:
              return <p>Error with order.</p>;
          }
        })}
      </div>
    </div>
    
    <Button onClick={() => window.print()} fluid style={{maxWidth: 200}}>
        <p
            style={{
                color: 'red',
                textAlign: 'center',
                position: 'absolute',
                width: '100vw',
                marginTop: 5,
            }}
            >
            <span role="img" aria-label="img"> 🖨️ ️</span>
            {`Imprimir `}{' '}
            <span role="img" aria-label="img"> 🖨️ ️</span>
            </p>
    </Button>

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
