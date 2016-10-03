export const selectBench = (benches) => {
  return benches ? Object.keys(benches).map( key => benches[key]) : [];
};
