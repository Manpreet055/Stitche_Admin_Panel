import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

export const createProduct = async (details, setLoadingState, setError) => {
  try {
    setLoadingState(true);
    const formData = new FormData();

    // normal text fields
    Object.keys(details).forEach((key) => {
      if (key !== "images" && key !== "thumbnail" && key !== "discount") {
        formData.append(key, details[key]);
      }
    });

    // images (multiple)
    if (details.images && details.images.length > 0) {
      details.images.forEach((img) => {
        formData.append("images", img);
      });
    }

    if (details.discount) {
      formData.append("discount",details.discount.discount) 
      formData.append("type",details.discount.type) 
    }

    // thumbnail (single)
    if (details.thumbnail && details.thumbnail.length > 0) {
      formData.append("thumbnail", details.thumbnail[0]);
    }

    console.log(formData)
    const response = await axios.post(`${uri}/products`, formData);
    const createdProduct = response.data.createdProduct;
    console.log(createdProduct);

    return createdProduct;
  } catch (error) {
    setError(error.message);
    handleApiError(error);
  } finally {
    setLoadingState(false);
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
