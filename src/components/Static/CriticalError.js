import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { useTranslation } from 'react-i18next';

const CriticalError = ({ message }) => {
  const { t } = useTranslation('general');
  return (
    <div className="errorPanel">

      <h2 className="errorTitle">
        {t('error')}
      </h2>
      <div className="errorDivider" />
      <div>
        <FontAwesomeIcon
          icon={faTimes}
          style={{
            display: 'inline-block', float: 'left', width: '6.5em', height: '6.5em',
          }}
          color="#b83a3d"
        />
        <div style={{
          display: 'inline-block', float: 'left', marginLeft: 20, marginTop: 10,
        }}
        >
          <span className="errorText">
            {t('errorGeneralDescription')}
          </span>
          <br />
          {message && (
            <>
              <span className="errorText" style={{ fontSize: '115%', fontWeight: 'bold' }}>
                {message}
              </span>
              <br />
            </>
          )}
          <span className="errorText">
            {t('errorContact')}
            {' '}
            <a href="mailto: micpopolin@gmail.com">micpopolin@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CriticalError;
