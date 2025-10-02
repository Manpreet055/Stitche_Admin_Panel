import axios from "axios";
import handleError from "../HandleApiError";
// Fetch chat data (GET request)
const getChatData = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/`,
      {
        id,
      }
    );
    console.log("Chat fetched:");
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
// Mark chat as read (PATCH request)
const markAsRead = async (isRead, id, setRead) => {
  if (isRead) return;

  try {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/`,
      { id, isRead: true }
    );

    console.log("Marked as Read:", response.data);
    setRead(true);
  } catch (error) {
    handleError(error);
    setRead(false);
  }
};

// Wrapper to fetch + mark
const fetchChat = async (isRead, id, setLoadingState, setRead) => {
  try {
    setLoadingState(true);

    await getChatData(id);
    await markAsRead(isRead, id, setRead);
  } catch (error) {
    console.error("Error in fetchChat:", error);
  } finally {
    setLoadingState(false);
  }
};

export default fetchChat;
