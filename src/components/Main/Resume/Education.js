import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";

import Degree from './Education/Degree';

const Education = ({ data }) => {
    const {t} = useTranslation('main');

    return(
        <div className="education">
            <div className="link-to" id="resume.section.education" />
            <div className="title">
                <h3>{t('resume.section.education')}</h3>
            </div>
            {data.map((degree) => (
            <Degree
                data={degree}
                key={degree.school}
            />
            ))}
        </div>
    )
};

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Education.defaultProps = {
  data: [],
};

export default Education;
