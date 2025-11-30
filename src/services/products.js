import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

export const createProduct = async (details, setToast, setError) => {
  try {
    setToast("submitting");
    const formData = new FormData();
    // normal text fields
    Object.keys(details).forEach((key) => {
      if (key !== "images" && key !== "thumbnail" && key !== "removedImages") {
        formData.append(key, details[key]);
      }
    });

    // images (multiple)
    if (details.images && details.images.length > 0) {
      details.images.forEach((img) => {
        formData.append("images", img);
      });
    }

    // thumbnail (single)
    if (details.thumbnail && details.thumbnail.length > 0) {
      formData.append("thumbnail", details.thumbnail[0]);
    }

    console.log(formData);
    const response = await axios.post(`${uri}/products`, formData);
    setToast("submitted");

    const createdProduct = response.data.createdProduct;
    console.log(createdProduct);

    return createdProduct;
  } catch (error) {
    setError(error.message);
    handleApiError(error);
    setToast("error");
  }
};

export const updateProduct = async (
  id,
  updates,
  setLoadingState,
  setError,
  setToast,
) => {
  try {
    setLoadingState(true);
    setToast("updating");

    const formData = new FormData();

    // normal text fields
    Object.keys(updates).forEach((key) => {
      if (key !== "images" && key !== "thumbnail" && key !== "removedImages") {
        formData.append(key, updates[key]);
      }
    });

    // images (multiple)
    if (updates.images && updates.images.length > 0) {
      updates.images.forEach((img) => {
        if (typeof img !== "string") {
          formData.append("newImages", img);
        }
      });
    }
    if (updates.removedImages && updates.removedImages.length > 0) {
      updates.removedImages.forEach((img) => {
        formData.append("removedImages", img);
      });
    }

    // thumbnail (single)
    if (updates.thumbnail && updates.thumbnail.length > 0) {
      formData.append("newThumbnail", updates.thumbnail[0]);
    }

    console.log(formData);
    const response = await axios.patch(`${uri}/products/edit/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setToast("updated");

    const responseData = response.data;
    console.log(responseData);
  } catch (error) {
    handleApiError(error);
    setError(error.message);
    setToast("error");
  } finally {
    setLoadingState(false);
  }
};

export const toggleFeatured = async (
  _id,
  isFeatured,
  loadingState,
  setFeatured,
) => {
  try {
    loadingState(true);
    const response = await axios.patch(`${uri}/products`, { _id, isFeatured });

    const data = response.data;
    const newValue = data?.isFeatured ?? isFeatured;
    setFeatured(newValue);
  } catch (error) {
    console.log(error.message);
    setFeatured(!isFeatured);
    handleApiError(error);
    throw error;
  } finally {
    loadingState(false);
  }
};
