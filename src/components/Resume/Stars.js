import React from 'react';
import PropTypes from 'prop-types';
import starsfilled from '../../icons/star-fill.svg';
import starsblank from '../../icons/star-blank.svg';

const level = (lev) => {
  let a = parseInt(lev, 10);
  a = Number.isNaN(a) || a < 0 ? 0 : a;
  a = (a > 5) ? 5 : a;
  return a;
};

const Stars = ({ lev }) => {
  const stars = [];
  for (let i = 1; i <= level(lev); i += 1) {
    stars.push(<img src={starsfilled} key={i} alt="filled-star" className="normal-icon" />);
  }
  for (let i = level(lev) + 1; i <= 5; i += 1) {
    stars.push(<img src={starsblank} key={i} alt="blank-star" className="normal-icon" />);
  }
  return (
    <div className="keyword-level">
      {stars}
    </div>
  );
};

Stars.defaultProps = {
  lev: 0,
};

Stars.propTypes = {
  lev: PropTypes.number,
};

export default Stars;
