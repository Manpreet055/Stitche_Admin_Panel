import React, { useEffect, useState } from "react";

const HandleImages = ({
  imgs,
  thumbnails,
  defaultImgs = null,
  defaultThumbnails = null,
}) => {
  // Handle Images Upload
  const [imageArr, setImageArr] = useState([]);
  const [images, setimages] = useState([]);

  const [thumbnailArr, setthumbnailArr] = useState([]);
  const [thumbnail, setThumbnails] = useState([]);

  useEffect(() => {
    if (defaultImgs && defaultThumbnails) {
      setimages(defaultImgs);
      setImageArr(defaultImgs);
      setThumbnails(defaultThumbnails);
      setthumbnailArr(defaultThumbnails);
    }
  }, [defaultImgs, defaultThumbnails]);

  // This Single function handles everythings including images and thumbnail's preview, sending files to the form using props , updating the value etc.
  const getFiles = (event, state, array, setState, setArr, setProp) => {
    const newFile = event.target.files[0];
    if (newFile) {
      setState([...state, URL.createObjectURL(newFile)]);
      const updatedArr = [...array, newFile];
      setArr(updatedArr);
      setProp(updatedArr);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="input-section  items-center">
        <h3 className="title">Product Media</h3>

        {/* Uploaded Images Preview */}
        <div className="w-full gap-4 flex flex-wrap  p-4">
          {images.map((file, index) => (
            <div
              className="border border-gray-300 w-fit max-w-[90px] max-h-[90px] lg:max-h-[150px]  lg:max-w-[150px]"
              key={index}
            >
              <img src={file} className="w-full h-full" alt="" />
            </div>
          ))}
        </div>
        <label
          htmlFor="images"
          className=" bg-rose-400/30 rounded-2xl hover:border-rose-700 border-2 border-rose-400 transition-all duration-300 ease-in-out px-7 py-5 block text-white cursor-pointer"
        >
          Add images{" "}
        </label>
        <input
          onChange={(event) => {
            getFiles(event, images, imageArr, setimages, setImageArr, imgs);
          }}
          id="images"
          type="file"
          accept="image/*"
          className="hidden"
        />
      </div>
      <div className="input-section  items-center">
        <h3 className="title">Thumbnail</h3>

        {/* Uploaded Images Preview */}
        <div className="w-full gap-4 flex flex-wrap  p-4">
          {thumbnail.map((file, index) => (
            <div
              className="border border-gray-300 w-fit max-w-[90px] max-h-[90px] lg:max-h-[150px]  lg:max-w-[150px]"
              key={index}
            >
              <img src={file} className="w-full h-full" alt="" />
            </div>
          ))}
        </div>
        <label
          htmlFor="thumbnails"
          className=" bg-rose-400/30 rounded-2xl hover:border-rose-700 border-2 border-rose-400 transition-all duration-300 ease-in-out px-7 py-5 block text-white cursor-pointer"
        >
          Add Thumbnail{" "}
        </label>
        <input
          onChange={(event) => {
            getFiles(
              event,
              thumbnail,
              thumbnailArr,
              setThumbnails,
              setthumbnailArr,
              thumbnails
            );
          }}
          id="thumbnails"
          type="file"
          accept="image/png"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default HandleImages;
