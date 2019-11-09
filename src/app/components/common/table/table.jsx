import React from 'react';
import _ from 'lodash';

const Table = ({ tableData }) => (
  <table>
      <tbody>
      {
          _.map(tableData,(row,key)=>{
              return <tr key={key}>
                <th>{row.id}</th>
                <th>{row.name}</th>
                <th>{row.age}</th>
                <th>{row.gender}</th>
                <th>{row.phoneNo}</th>
                <th>{row.email}</th>
              </tr>
          })
      }
      </tbody>
</table>

);

export default Table;