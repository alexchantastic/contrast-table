import React, { Component } from 'react';

import Swatch from '../Swatch/Swatch';
import ContrastSwatch from '../ContrastSwatch/ContrastSwatch';

import './Table.scss';

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

    {palette.map((columnSwatch) => (
      <td>
        <ContrastSwatch foregroundColor={columnSwatch} backgroundColor={swatch} />
      </td>
    ))}
  </tr>
);

export default Table;
