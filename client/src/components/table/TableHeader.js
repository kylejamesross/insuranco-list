import React from "react";
import Typography from "@material-ui/core/Typography";

const TableHeader = ({ category, index }) => (
  <Typography variant="h6" id={`table-table-${index}`}>
    {category}
  </Typography>
);

export default TableHeader;
