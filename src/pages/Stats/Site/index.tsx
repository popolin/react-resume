import React, { useEffect, useState } from 'react';

import data from '../../../components/Main/data/github';
import Table from '../../../components/Main/Stats/Table';

interface SiteProps {
  t: (args: string) => string;
}

interface TableRow {
  label: string;
  value: string;
  link?: string;
}

const Site: React.FC<SiteProps> = ({ t }) => {
  const [formatedData, setFormatedData] = useState<TableRow[]>([]);

  useEffect(() => {
    const sites = data.map(each => {
      const itemKey = each.label;
      const label = t(each.label);
      return {
        ...each,
        itemKey,
        label,
      };
    });
    setFormatedData(sites);
  }, [t]);

  return (
    <div>
      <h3>{t('resume.stats.aboutSite')}</h3>
      {formatedData && <Table data={formatedData} />}
    </div>
  );
};

export default Site;
