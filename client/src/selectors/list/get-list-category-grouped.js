import { groupBy } from "lodash-es";
import getSortedByCategoryList from "./get-sorted-by-category-list";

const getListGroupedByCategory = listContext => {
  const { list = [] } = listContext || {};

  const sortedList = getSortedByCategoryList(list);

  return groupBy(sortedList, "category");
};

export default getListGroupedByCategory;
