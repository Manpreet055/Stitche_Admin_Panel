import axios from "axios";
import handleError from "../handleApiError";

const sendMessages = async (id, data) => {
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

export default sendMessages;
