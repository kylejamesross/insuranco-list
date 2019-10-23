import React, { useContext, useMemo, Fragment } from "react";
import ListContext from "../contexts/list-context";
import getListGroupedByCategory from "../../selectors/list/get-list-category-grouped";
import Table from "./Table";

const Tables = () => {
  const listContext = useContext(ListContext);

  const groups = useMemo(() => getListGroupedByCategory(listContext), [
    listContext
  ]);

  return (
    <Fragment>
      {Object.keys(groups).map((category, index) => (
        <Table
          index={index}
          key={category}
          category={category}
          list={groups[category]}
        />
      ))}
    </Fragment>
  );
};

export default Tables;
