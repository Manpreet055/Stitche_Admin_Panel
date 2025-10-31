import axios from "axios";
import handleError from "./handleApiError";

export const getAllUsers = async () => {
  const uri = import.meta.env.VITE_BASE_URI;
  try {
    const response = await axios.get(`${uri}/users`);
    return response.data.users;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
