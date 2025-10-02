import axios from "axios";
import handleError from "../HandleApiError";

const sendText = async (id, data) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        id,
        data,
      }
    );
    console.log(response.data);
  } catch (error) {
    handleError(error);
  }
};

export default sendText;
