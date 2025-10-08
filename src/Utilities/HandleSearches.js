import axios from "axios";
import handleError from "./HandleApiError";

// This function is responsible for sending the request using searchbarData to the backend
//This function will be also fired up when user stop typing (debounce logic)
const handleSearches = async (formData, ApiPath) => {
  try {
    const response = await axios.post(
      ApiPath || "https://jsonplaceholder.typicode.com/posts",
      {
        search: formData.searches,
      }
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    handleError(error);
  }
};

export default handleSearches;
