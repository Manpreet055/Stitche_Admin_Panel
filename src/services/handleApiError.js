// Shared error handler
const handleApiError = (error) => {
  if (error.response) {
    console.log("Server Error:", error.response);
  } else if (error.request) {
    console.log("Network Error:", error.request);
  } else {
    console.log("Something went wrong:", error.message);
  }
};

export default handleApiError;
