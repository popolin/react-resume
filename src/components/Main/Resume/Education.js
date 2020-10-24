import React from 'react';
import {useTranslation} from "react-i18next";
import dayjs from 'dayjs';

import Degree from './Education/Degree';

const Education = ({ degrees }) => {
    const {t} = useTranslation('main');
    const degreesOrdered = degrees.sort((a, b) => dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1);

    return(
        <div className="education">
            <div className="link-to" id="resume.section.education" />
            <div className="title">
                <h3>{t('resume.section.education')}</h3>
            </div>
            {degreesOrdered.map((degree, idx) => (
            <Degree
                data={degree}
                key={idx}
            />
            ))}
        </div>
    )
};

export default Education;
