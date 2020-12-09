import React from 'react';

import TableRow from './TableRow';

interface TableProp {
  label: string;
  value: string;
  link?: string;
}

interface TableProps {
  data: TableProp[];
}

const Table: React.FC<TableProps> = ({ data }) => (
  <table>
    <tbody>
      {data.map(dat => (
        <TableRow key={dat.label} property={dat} />
      ))}
    </tbody>
  </table>
);

export default Table;
