import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import dayjs from 'dayjs';

import 'dayjs/locale/pt-br';
import 'dayjs/locale/en';

const currentLanguage = localStorage.getItem('@react-resume/language') || 'en';
const locale = currentLanguage === 'pt' ? 'pt-br' : 'en';

const Job = ({ data }) => {
  const { t } = useTranslation('main');
  const beginLocale = dayjs(data.begin).locale(locale);
  const beginFormatted = beginLocale.format('MMMM, YYYY');
  let endFormatted = t('resume.experience.present');
  if (data.end) {
    const endLocale = dayjs(data.end).locale(locale);
    endFormatted = endLocale.format('MMMM, YYYY');
  }
  return (
    <article className="jobs-container">
      <header>
        <h4>
          <a href={data.link} target='_blank'>{data.company}</a>
          {' '}
          -
          {' '}
          {data.position}
        </h4>
        <p className="daterange">
          {beginFormatted}
          {' '}
          -
          {' '}
          {endFormatted}
        </p>
      </header>
      <ul className="points">
        {data.points.map(point => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
};

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Job;
