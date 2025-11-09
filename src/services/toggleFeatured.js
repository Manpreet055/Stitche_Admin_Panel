import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

const toggleFeatured = async (_id, isFeatured, loadingState, setFeatured) => {
  try {
    loadingState(true);
    const response = await axios.patch(`${uri}/api/products`, {
      _id,
      isFeatured,
    });

    const data = response.data;
    const newValue = data?.isFeatured ?? isFeatured;
    setFeatured(newValue);
    console.log(data);
  } catch (error) {
    console.log(error.message);
    setFeatured(!isFeatured);
    handleApiError(error);
    throw error;
  } finally {
    loadingState(false);
  }
};

export default toggleFeatured;
