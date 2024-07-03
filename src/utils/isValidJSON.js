export const isValidJSON = (jsonString) => {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
