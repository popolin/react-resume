import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { IResume } from '../../../components/Body';
import Table from '../../../components/Main/Stats/Table';

interface PersonalProps {
  resume: IResume;
  t: (arg0: string) => string;
}

const Personal: React.FC<PersonalProps> = ({ t, resume }) => {
  const labelAge = useMemo(() => {
    return t('resume.stats.currentAge');
  }, [t]);

  const [data, setData] = useState([
    {
      label: labelAge,
      value: '',
    },
    {
      label: t('resume.stats.countriesVisited'),
      value: resume.countries.total,
      link: resume.countries.map,
    },
    {
      label: t('resume.stats.currentCity'),
      value: `${resume.header.city}, ${resume.header.country}`,
    },
  ]);

  const tick = useCallback(() => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
    const birthTime = new Date(resume.header.birthdate);
    const age = ((Date.now() - birthTime.getTime()) / divisor).toFixed(11);

    const itemAgeIndex = data.findIndex(dat => dat.label === labelAge);
    const itemAge = data[itemAgeIndex];
    if (itemAge) {
      Object.assign(itemAge, {
        value: age,
      });
      const newArray = [...data];
      newArray[itemAgeIndex] = itemAge;
      setData(newArray);
    }
  }, [data, labelAge, resume.header.birthdate]);

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, [tick]);

  return (
    <>
      <h3>{t('resume.stats.aboutMe')}</h3>
      <Table data={data} />
    </>
  );
};

export default Personal;
