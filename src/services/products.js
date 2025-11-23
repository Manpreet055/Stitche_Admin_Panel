import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

export const createProduct = async (details, setLoadingState, setError) => {
  try {
    setLoadingState(true);
    const response = await axios.post(`${uri}/products`, {
      productDetails: details,
    });
    const createdProduct = response.data.createdProduct;
    console.log(createdProduct);

    return createdProduct;
  } catch (error) {
    setError(error.message);
    handleApiError(error);
  }
};

export const editProduct = async (_id, updates, setLoadingState, setError) => {
  try {
    setLoadingState(true);

    const response = await axios.patch(`${uri}/products/edit`, {
      _id,
      ...updates,
    });
    const responseData = response.data;
    console.log(responseData);
  } catch (error) {
    handleError(error);
    setError(error.message);
  } finally {
    setLoadingState(false);
  }
};
