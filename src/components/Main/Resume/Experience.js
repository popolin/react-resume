import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";

import Job from './Experience/Job';

const Experience = ({ data }) => {
    const {t} = useTranslation('main');
    return (
        <div className="experience">
            <div className="link-to" id="resume.section.experience" />
            <div className="title">
            <h3>{t('resume.section.experience')}</h3>
            </div>
            {data.map((job) => (
            <Job
                data={job}
                key={job.company}
            />
            ))}
        </div>
    )
};

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
