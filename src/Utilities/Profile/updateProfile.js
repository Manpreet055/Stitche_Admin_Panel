import axios from "axios";
import handleError from "../handleApiError";

const apiPath = import.meta.env.VITE_UPDATE_PROFILE;
const updateProfile = async (id, data) => {
  try {
    const response = await axios.patch(apiPath, {
      id,
      data,
    });
    console.log(response.data);
  } catch (error) {
    handleError(error);
  }
};

export default updateProfile;
