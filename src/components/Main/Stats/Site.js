import React from 'react';

import Table from './Table';
import data from '../data/github';

const Stats = (props) => {
    const { t } = props;
    const sites = Object.keys(data).map((key) => {
        const row = data[key];
        const obj = {
            ...row,
            itemKey: row.label,
            label: t(row.label),
        }
        return obj;
    });
    return (
        <div>
            <h3>{t('resume.stats.aboutSite')}</h3>
            <Table
            data={sites}
            />
        </div>
    )
};

export default Stats;
