import React from 'react';

interface TableItemProps {
  label: string;
  link?: string;
  value: string;
}
interface TableRowProps {
  property: TableItemProps;
}

const TableRow: React.FC<TableRowProps> = ({ property }) => (
  <tr>
    <td width="70%">{property.label}</td>
    <td>
      {property.link ? (
        <a href={property.link || ''}>{property.value}</a>
      ) : (
        property.value
      )}
    </td>
  </tr>
);

export default TableRow;
