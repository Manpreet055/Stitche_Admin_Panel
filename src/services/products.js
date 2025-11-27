import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

export const createProduct = async (details, setLoadingState, setError) => {
  try {
    setLoadingState(true);

    // Build FormData so files are sent correctly as multipart/form-data
    const formData = new FormData();

    // Append fields. Handle files for `images` (array) and `thumbnail` (File or FileList)
    for (const key in details) {
      const value = details[key];

      if (key === "images") {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            // If it's a File, append as file; otherwise append the value (string URL)
            if (item instanceof File) formData.append("images", item);
            else formData.append("images", item);
          });
        }
      } else if (key === "thumbnail") {
        // thumbnail can be a FileList or array or single File
        if (value instanceof File) formData.append("thumbnail", value);
        else if (value && value.length > 0)
          formData.append("thumbnail", value[0]);
      } else if (value !== undefined && value !== null) {
        // For objects/arrays (except files), stringify to preserve structure
        if (typeof value === "object")
          formData.append(key, JSON.stringify(value));
        else formData.append(key, value);
      }
    }
    console.log(formData);
    // Do NOT set Content-Type header manually; let the browser set the correct boundary
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
