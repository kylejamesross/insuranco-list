import sortBy from "lodash-es/sortBy";

const getSortedByCategoryList = list => sortBy(list, "category");

export default getSortedByCategoryList;
