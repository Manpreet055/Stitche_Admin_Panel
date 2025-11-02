import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

const getRecentOrders = async (
    setLoadingState,
    setError,
    setData,
    limit = 10,
) => {
  try {
    setLoadingState(true);
    const response = await axios.get(`${uri}/orders/?limit=${limit}`);
    const data = response.data.orders;
    setData(data);
  } catch (error) {
    handleApiError(error);
    setError(error.message);
    throw error;
  } finally {
    setLoadingState(false);
  }
};

export default getRecentOrders;
