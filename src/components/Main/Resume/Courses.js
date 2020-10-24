import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";
import dayjs from 'dayjs';

import Course from './Courses/Course';

const getRows = (courses) => {
    const coursesOrdered = courses.sort((a, b) => dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1);
    return coursesOrdered.map((course, idx) => (
        <Course
            data={course}
            key={course.title}
            last={idx === courses.length - 1}
        />
    ))
};

const Courses = ({ courses }) => {
    const {t} = useTranslation('main');
    return (
        <div className="courses">
            <div className="link-to" id="resume.section.courses" />
            <div className="title">
            <h3>{t('resume.courses.title')}</h3>
            </div>
            <ul className="course-list">
            {getRows(courses)}
            </ul>
        </div>
    )
};

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
