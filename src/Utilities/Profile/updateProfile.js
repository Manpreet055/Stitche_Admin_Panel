import axios from "axios";
import handleError from "../handleApiError";

const updateProfile = async (id, data) => {
  try {
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
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

export default updateProfile
