import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

const deleteRequest = async (schema, id) => {
  try {
    const response = await axios.delete(`${uri}/api/${schema}/${id}`);
    const deletedData = response.data.data;
    console.log(deletedData);
    return response.data;
  } catch (err) {
    handleApiError(err);
  }
};

export default deleteRequest;
