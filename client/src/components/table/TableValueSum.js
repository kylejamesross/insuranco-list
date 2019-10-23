import React, { useMemo } from "react";
import getSumOfValues from "../../selectors/list/get-sum-of-values";

const TableValueSum = ({ list, category }) => {
  const valueSum = useMemo(() => getSumOfValues(list), [list]);

  return (
    <div className="total-value">
      Total Value of {category}: ${valueSum}
    </div>
  );
};

export default TableValueSum;
