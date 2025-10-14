import axios from "axios";
import handleError from "./handleApiError";
const apiPath = import.meta.env.VITE_SEARCH_ITEM;

// This function is responsible for sending the request using searchbarData to the backend
//This function will be also fired up when user stop typing (debounce logic)
const handleSearches = async (formData) => {
  try {
    const response = await axios.post(apiPath, {
      search: formData.searches,
    });
    const data = response.data;
    console.log(data);
  } catch (error) {
    handleError(error);
  }
};

export default handleSearches;
