import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

const searchData = async (query) => {
  try {
    const response = await axios.get(`${uri}/api/search?query=${query}`);
    const data = response.data.results;
    console.log(data);
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export default searchData;
