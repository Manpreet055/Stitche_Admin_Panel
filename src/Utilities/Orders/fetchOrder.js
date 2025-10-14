import axios from "axios";
import handleError from "../handleApiError";
const apiPath = import.meta.env.VITE_FETCH_ORDER_DETAILS;

const fetchOrder = async (orderId,loadingState) => {
  try {
    loadingState(true)
    const response = await axios.get(
      apiPath,
      {
        orderId,
      }
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    handleError(error);
  }finally{
    loadingState(false)
  }
};

export default fetchOrder;