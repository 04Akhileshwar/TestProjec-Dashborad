import React, { Component } from "react";
function List() {
  return (
    <div className="TextHeader">
    <table className="table">
    <thead >
      <tr>
        <th className="th">Product Name</th>
        <th className="th">Stock</th>
        <th className="th">Price</th>
        <th className="th">Total sales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="td">Abstract 3D</td>
        <td className="td">32 in stock</td>
        <td className="td">$45.99</td>
        <td className="td">20</td>
      </tr>
      <tr>
        <td className="td">Sarphens Illustration</td>
        <td className="td">32 in stock</td>
        <td className="td">$45.99</td>
        <td className="td">20</td>
      </tr>
    </tbody>
  </table>
</div>
);
  }

export default List;
