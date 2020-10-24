import React from 'react';
import PropTypes from 'prop-types';

import dayjs from 'dayjs';

const Course = ({ data }) => (
  <li className="course-container">
    <div className="course-info">
        <a href={data.link} target="_blank">
            <p className="course-name">{data.title} <span style={{fontWeight: 900}}>({data.duration}h)</span></p>
        </a>
        <p className="course-date" style={{marginBottom: -10}}>{dayjs(data.begin).format("MMMM, YYYY")}</p>
        <p className="course-school" style={{}}>{data.school}</p>
    </div>
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Course.defaultProps = {
  last: false,
};

export default Course;
