export const parseArgs = () => {
  let aArgs = process.argv.slice(2);
  return aArgs || [];
};
