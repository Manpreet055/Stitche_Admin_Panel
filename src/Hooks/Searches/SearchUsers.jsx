export const searchItems = (fields, data, dataSet, setItems) => {
  const searchterm = data.searches.trim().toLowerCase();

  let searchResults = dataSet.filter((item) => {
    return fields.some((field) => {
      // support nested fields like address.city
      const value = field.split(".").reduce((acc, key) => acc?.[key], item);
      return String(value).toLowerCase().includes(searchterm);
    });
  });

  if (searchResults.length !== 0) {
    setItems(searchResults);
  } else {
    setItems("No results found");
  }
};
  