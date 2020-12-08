import React from 'react';
import RingLoader from 'react-spinners/RingLoader';
import { getI18n } from 'react-i18next';

const LoadingSpinner = () => (
  <center>
    <RingLoader
      size={150}
      loading
    />
    <h2 style={{ color: '#585858', marginLeft: 20, fontFamily: 'Raleway, Helvetica, sans-serif' }}>
      {getI18n().t('general:loading')}
      ...
    </h2>
  </center>
);

export default LoadingSpinner;
