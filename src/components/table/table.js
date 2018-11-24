import React, { Component } from 'react';

import Swatch from '../Swatch/Swatch';
import ContrastSwatch from '../ContrastSwatch/ContrastSwatch';

import './Table.scss';

const Table = ({ palette }) => (
  <table className="table">
    <thead>
      <th className="table__column-header table__column-header--empty"></th>
      {palette.map((swatch) => (
        <th className="table__column-header">
          <Swatch color={swatch} />
        </th>
      ))}
    </thead>

    <tbody>
      {palette.map((swatch) => (
        <TableRow swatch={swatch} palette={palette} />
      ))}
    </tbody>
  </table>
);

const TableRow = ({ swatch, palette }) => (
  <tr>
    <td className="table__row-header"><Swatch color={swatch} /></td>

    {palette.map((columnSwatch) => (
      <td className="table__cell">
        <ContrastSwatch foregroundColor={columnSwatch} backgroundColor={swatch} />
      </td>
    ))}
  </tr>
);

export default Table;
