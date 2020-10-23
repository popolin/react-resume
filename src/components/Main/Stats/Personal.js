import React, { useState, useEffect } from 'react';

import Table from './Table';

const PersonalStats = ({t ,resume}) => {

    const [data, setData] = useState({
        age: {
            label: t('resume.stats.currentAge'),
            value: 0,
        },
        countries: {
            label: t('resume.stats.countriesVisited'),
            value: resume.countries.total,
            link: resume.countries.map
        },
        location: {
            label: t('resume.stats.currentCity'),
            value: `${resume.header.city}, ${resume.header.country}`,
          },
    });

    const calcAge = () => {
        const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
        const birthTime = new Date(resume.header.birthdate);
        return ((Date.now() - birthTime) / divisor).toFixed(11);
    }

    const tick = () => {
        setData({
            ...data,
            age: {
                label: t('resume.stats.currentAge'),
                value: calcAge(),
            }
        });
    };

    useEffect(() => {
        const timer = setInterval(() => tick(), 25);
        return () => { clearInterval(timer); };
    }, []);
    
    return (
        <>
            <h3>{t('resume.stats.aboutMe')}</h3>
            <Table data={Object.keys(data).map((key) => data[key]) } />
        </>
    );
};

export default PersonalStats;
