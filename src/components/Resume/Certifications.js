import React from 'react';
import uuid from 'uuid/v4';

const Certifications = ({ resume, font }) => (
  <section data-testid="Certification" className="resume-certification">
    <h2 style={{ fontFamily: font }}>
      Certifications
    </h2>
    <hr />
    <ul>
      {resume.certifications?.map(
        cert => cert.isVisible !== false && (
        <li key={uuid()}>
          <h3 style={{ fontFamily: font }}>
            {cert.issuedBy}
          </h3>
          {cert.dateFrom && (
          <h3 style={{ fontFamily: font }}>
            {`${cert.dateFrom}${cert.dateTo ? ` - ${cert.dateTo}` : ''}`}
          </h3>
          )}
          <p>{cert.id}</p>
        </li>
        ),
      )}
    </ul>
  </section>
);

export default Certifications;
