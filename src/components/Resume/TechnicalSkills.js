import React from 'react';
import uuid from 'uuid/v4';
import Stars from './Stars';

const defaultLevel = 4;

const retString = kw => (typeof kw === 'string' ? kw : kw.name);
const retObject = kw => (typeof kw === 'string' ? { name: kw, level: defaultLevel } : kw);

const showSkillLevel = true;

const TechnicalSkills = ({ resume }) => (
  <section data-testid="TechSkills" className="resume-tech-skills">
    <h2>
      Technical Skills
    </h2>
    <hr />
    <div className="grid-container">
      {resume.techSkills?.map(
        (skill, index) => skill.isVisible !== false && (
            <div key={uuid()} className="grid-column" style={{ flexBasis: skill.columnWidthPercent || undefined}}>
              <h3>
                {skill.category}
              </h3>
              {showSkillLevel
                ? skill.keywords.map(kw => (
                  <div className="tech-skills-keyword" key={uuid()}>
                    <div className="keyword-name">{retObject(kw).name}</div>
                    <Stars lev={retObject(kw).level} />
                  </div>
                ))
                : skill.keywords.map((kw, skillIndex) => (skillIndex === skill.keywords.length - 1 ? retString(kw) : `${retString(kw)}, `))}
            </div>)
      )}
    </div>
  </section>
);

export default TechnicalSkills;
