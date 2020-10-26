import React from 'react';

import dayjs from 'dayjs';

const Course = ({ data }) => (
    <article className="degree-container">
        <header>
            <a href={data.link} target="_blank">
                <h4 className="degree" style={{display: 'inline'}}>{data.title}</h4>
            </a>
            <p className="school" style={{marginTop: -10}}>{dayjs(data.begin).format("MMMM, YYYY")} <span style={{fontWeight: 900}}>({data.duration}h)</span></p>
            <p className="school" style={{marginTop: -35, fontWeight: 900}}>{data.school}</p>
        </header>
    </article>

);

export default Course;
