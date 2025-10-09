import axios from "axios";

const toggleStarred = async (checked, id, state, loadingState) => {
  try {
    state(checked); //update UI
    loadingState(true); // for loading spinner
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        id,
        isStarred: checked,
      }
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    if (error.response) {
      console.log("Server Error : ", error.response);
      state(!checked); // roll back to prev state on error
    } else if (error.request) {
      console.log("Network Error : ", error.request);
      state(!checked);
    } else {
      console.log("Something went wrong..", error.message);
      state(!checked);
    }
  } finally {
    loadingState(false);
  }
};
export default toggleStarred;
