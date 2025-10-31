import axios from "axios";
const uri = import.meta.env.VITE_BASE_URI;
import handleApiError from "./handleApiError";

export const fetchMessages = async (loadingState, errorState, setData) => {
  try {
    loadingState(true);
    const response = await axios.get(`${uri}/inbox`);
    const data = response.data.messages;
    setData(data);
    return data;
  } catch (error) {
    handleApiError(error);
    errorState(error.message);
    throw error;
  } finally {
    loadingState(false);
  }
};

export const getChatData = async (id, loadingState, errorState,setData) => {
  try {
    loadingState(true);
    const response = await axios.get(`${uri}/inbox/${id}`);
    console.log("Chat fetched:");
    const data = response.data.chat;
    setData(data)
    return data 
  } catch (error) {
    handleApiError(error);
    errorState(error.message);
    throw error;
  } finally {
    loadingState(false);
  }
};
