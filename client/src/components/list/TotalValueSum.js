import React, { useContext, useMemo } from "react";
import ListContext from "../contexts/list-context";
import { Typography } from "@material-ui/core";
import getSumOfValues from "../../selectors/list/get-sum-of-values";

const TotalValueSum = () => {
  const listContext = useContext(ListContext);

  const { list } = listContext;

  const totalValues = useMemo(() => getSumOfValues(list), [list]);

  if (list.length === 0) {
    return null;
  }

  return (
    <Typography variant="h6" component="h6">
      Total Value of All Goods: ${totalValues}
    </Typography>
  );
};

export default TotalValueSum;
