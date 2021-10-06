import React from 'react';

import Swatch from '../swatch/swatch';
import ContrastSwatch from '../contrast-swatch/contrast-swatch';

import './table.scss';

const Table = ({ palette }) => (
  <table className="table">
    <thead>
      <tr>
        <th className="table__column-header table__column-header--empty"></th>
        {palette.map((swatch, index) => (
          <th key={index} className="table__column-header">
            <Swatch color={swatch} />
          </th>
        ))}
      </tr>
    </thead>

    <tbody>
      {palette.map((swatch, index) => (
        <TableRow key={index} swatch={swatch} palette={palette} />
      ))}
    </tbody>
  </table>
);

const TableRow = ({ swatch, palette }) => (
  <tr>
    <td className="table__row-header"><Swatch color={swatch} /></td>

    {palette.map((columnSwatch, index) => (
      <td key={index} className="table__cell">
        <ContrastSwatch foregroundColor={columnSwatch} backgroundColor={swatch} />
      </td>
    ))}
  </tr>
);

export default Table;
