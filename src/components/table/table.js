import React, { Component } from 'react';

import Swatch from '../swatch/swatch';

import './table.scss';

const Table = ({ palette }) => (
  <table className="table">
    <thead>
      <th></th>
      {palette.map((swatch) => (
        <th>
          <Swatch foregroundColor={swatch} backgroundColor={swatch} />
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
    <td><Swatch foregroundColor={swatch} backgroundColor={swatch} /></td>

    {palette.map((swatch) => (
      <td>
        <Swatch foregroundColor={swatch} backgroundColor={swatch} />
      </td>
    ))}
  </tr>
);

export default Table;
