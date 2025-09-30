import axios from "axios";

const readMessage = async (isRead, id, loadingState, setRead) => {
  if (isRead) return;
  try {
    loadingState(true);
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        id,
        isRead: true,
      }
    );
    console.log("Marked as Read.", response.data);
    setRead(true);
  } catch (error) {
    if (error.response) {
      console.log("Server Error : ", error.response);
      setRead(false);
    } else if (error.request) {
      console.log("Network Error : ", error.request);
      setRead(false);
    } else {
      console.log("Something went wrong..", error.message);
      setRead(false);
    }
  } finally {
    loadingState(false);
  }
};
export default readMessage;
