import React, { useMemo } from "react";
import numberWithCommas from "../../utils/number-with-commas";
import TableCell from "@material-ui/core/TableCell";
import RemoveButton from "./RemoveButton";
import TableRow from "@material-ui/core/TableRow";

const TableBodyRow = ({ name, value: noCommasValue, category, id }) => {
  const value = useMemo(() => numberWithCommas(noCommasValue), [noCommasValue]);
  return (
    <TableRow key={name}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{category}</TableCell>
      <TableCell align="right">${value}</TableCell>
      <TableCell align="right">
        <RemoveButton id={id} />
      </TableCell>
    </TableRow>
  );
};

export default TableBodyRow;
