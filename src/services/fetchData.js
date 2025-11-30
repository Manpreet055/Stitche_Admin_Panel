import axios from "axios";
const uri = import.meta.env.VITE_BASE_URI;
import handleApiError from "./handleApiError";

export const fetchAllData = async (
  path,
  setLoadingState,
  setError,
  setData,
  page = 1,
  limit = 10,
) => {
  try {
    setLoadingState(true);
    const response = await axios.get(
      `${uri}/api/${path}/?page=${page}&limit=${limit}`,
    );
    const data = response.data;
    setData(data.data);
    return data;
  } catch (error) {
    handleApiError(error);
    setError(error.message);
    throw error;
  } finally {
    setLoadingState(false);
  }
};

export const fetchAllDataById = async (path, id, setLoadingState, setError) => {
  try {
    setLoadingState(true);
    const response = await axios.get(`${uri}/api/${path}/${id}`);
    let data = response.data.data;
    return data;
  } catch (error) {
    handleApiError(error);
    setError(error.message);
    throw error;
  } finally {
    setLoadingState(false);
  }
};
