import React from 'react';
import uuid from 'uuid/v4';

const Education = ({ resume }) => (
  <section data-testid="Education" className="resume-education">
    <h2>Education</h2>
    <hr />
    <ul>
      {resume.education?.map(
        ed => ed.isVisible !== false && (
        <li key={uuid()}>
          <h3>{ed.site}</h3>
          {ed.dateFrom &&
            <h3>
              {`${ed.dateFrom}${ed.dateTo ? ` - ${ed.dateTo}` : ''}`}
            </h3>}
          <em>{ed.studyDegree}</em>
        </li>
        ),
      )}
    </ul>
  </section>
);

export default Education;
