import axios from "axios";
const apiPath = import.meta.env.VITE_DELETE_REQUEST_URL;

const deleteRequest = async (id, loadingState) => {
  if (!confirm("Do you really want to Delete?")) return;
  try {
    loadingState(true);
    const response = await axios.delete(apiPath, {
      id,
    });
    console.log("Message deleted...", response.data);
    alert("Item deleted !!");
  } catch (error) {
    if (error.response) {
      console.log("Server Error : ", error.response);
    } else if (error.request) {
      console.log("Network Error : ", error.request);
    } else {
      console.log("Something went wrong..", error.message);
    }
  } finally {
    loadingState(false);
  }
};
export default deleteRequest;
