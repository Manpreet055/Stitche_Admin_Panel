import axios from "axios";
import handleError from "../handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

const editProduct = async (_id, updates) => {
  try {
    const response = await axios.patch(`${uri}/products/edit`, {
      _id,
      ...updates,
    });
    const responseData = response.data;
    console.log(responseData);
  } catch (error) {
    handleError(error);
  }
};

export default editProduct;
