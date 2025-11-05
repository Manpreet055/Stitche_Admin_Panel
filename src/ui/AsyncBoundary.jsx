// ...existing code...
import { Spinner } from "flowbite-react";
import React from "react";

const AsyncBoundary = ({
  loadingState = false,
  errorMessage,
  errorState, // accept legacy prop name
  customMessage, // default removed to avoid always rendering
}) => {
  const error = errorMessage ?? errorState;

  if (!loadingState && !error && !customMessage) return null;

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="text-xl">
        {loadingState ? (
          <div className="flex justify-center items-center text-xl blur-bg p-10 rounded flex-col w-full h-screen">
            <Spinner size="xl" />
            Loading...
          </div>
        ) : error ? (
          error
        ) : (
          (customMessage ?? "Something Went Wrong")
        )}
      </div>
    </div>
  );
};

export default AsyncBoundary;
// ...existing code...
