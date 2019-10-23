import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHeadMaterial from "@material-ui/core/TableHead";

const TableHead = () => (
  <TableHeadMaterial>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell align="right">Category</TableCell>
      <TableCell align="right">Value</TableCell>
      <TableCell align="right"> </TableCell>
    </TableRow>
  </TableHeadMaterial>
);

export default TableHead;
