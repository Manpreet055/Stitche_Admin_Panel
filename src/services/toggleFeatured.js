import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

const toggleFeatured = async (id, state, loadingState) => {
  try {
    loadingState(true);
    const response = await axios.patch(`${uri}/products`, {
      _id,
      isFeatured,
    });

    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error.message);
  } finally {
    loadingState(false);
  }
};

export default toggleFeatured;
