import axios from "axios";
import handleError from "../HandleApiError";

const fetchOrder = async (orderId,loadingState) => {
  try {
    loadingState(true)
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1",
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