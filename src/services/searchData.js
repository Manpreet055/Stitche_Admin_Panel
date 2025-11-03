import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

const searchData = async (query) => {
  try {
    const response = await axios.get(`${uri}/products/search?query=${query}`);
    const data = response.data.products;
    console.log(data);
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export default searchData;
