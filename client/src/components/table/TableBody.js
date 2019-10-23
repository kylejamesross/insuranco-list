import React from "react";
import TableBodyMaterial from "@material-ui/core/TableBody";
import TableBodyRow from "./TableBodyRow";

const TableBody = ({ list }) => (
  <TableBodyMaterial>
    {list.map(({ name, value, category, id }) => (
      <TableBodyRow
        key={id}
        name={name}
        value={value}
        category={category}
        id={id}
      />
    ))}
  </TableBodyMaterial>
);

export default TableBody;
