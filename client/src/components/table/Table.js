import React, { Fragment } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import MaterialTable from "@material-ui/core/Table";
import TableHeader from "./TableHeader";
import TableValueSum from "./TableValueSum";

const Table = ({ list, category, index }) => (
  <Fragment>
    <TableHeader category={category} index={index} />
    <div className="table-wrapper">
      <MaterialTable aria-labelledby={`table-table-${index}`} stickyHeader>
        <TableHead />
        <TableBody list={list} />
      </MaterialTable>
    </div>
    <TableValueSum list={list} category={category} />
  </Fragment>
);

export default Table;
