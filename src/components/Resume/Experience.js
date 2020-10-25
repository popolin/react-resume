import React from 'react';
import uuid from 'uuid/v4';

const Experience = ({ resume }) => (
  <section data-testid="Experience" className="resume-experience">
    <h2>
      Experience
    </h2>
    <hr />
    <ul>
      {resume.experiences?.map(
        exp => exp.isVisible !== false && (
        <li key={uuid()}>
          {' '}
          <h3 >
            {exp.position}
          </h3>
          {exp.dateFrom &&
            <h3 >
              {`${exp.dateFrom}${exp.dateTo ? ` - ${exp.dateTo}` : ''}`}
            </h3>}
          <em>{`${exp.company}, ${exp.city}, ${exp.state}`}</em>
          <ul>
            <li>{exp.primaryWorkBrief}</li>
            {exp.impact1 && <li>{exp.impact1}</li>}
            {exp.impact2 && <li>{exp.impact2}</li>}
            {exp.impact3 && <li>{exp.impact3}</li>}
            {exp.impact4 && <li>{exp.impact4}</li>}
            {exp.impact5 && <li>{exp.impact5}</li>}
          </ul>
        </li>
        ),
      )}
    </ul>
  </section>
);

export default Experience;
