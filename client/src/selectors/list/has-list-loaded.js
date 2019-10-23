const hasListLoaded = listContext => {
  const { isLoading = false, list } = listContext || {};
  return !isLoading && list !== null;
};

export default hasListLoaded;
