import React from 'react';
import {useTranslation} from "react-i18next";
import dayjs from 'dayjs';

import Job from './Experience/Job';


const Experience = ({ positions }) => {
    const {t} = useTranslation('main');

    const positionsOrdered = positions.sort((a, b) => dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1);
    
    return (
        <div className="experience">
            <div className="link-to" id="resume.section.experience" />
            <div className="title" style={{margin: 23}}>
                <h3>{t('resume.section.experience')}</h3>
            </div>
            {positionsOrdered.map((job, idx) => (
            <Job
                data={job}
                key={idx}
            />
            ))}
        </div>
    )
};

export default Experience;
