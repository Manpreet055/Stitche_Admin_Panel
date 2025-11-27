import { X } from "lucide-react";
import { useFormContext } from "react-hook-form";

const ImageUploader = () => {
  const { register, watch, setValue } = useFormContext();

const watchImages = Array.isArray(watch("images")) ? watch("images") : [];
  const watchThumbnail = watch("thumbnail") || "";
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    // Merge new files with old ones
    const existing = watchImages || [];
    setValue("images", [...existing, ...files], { shouldValidate: true });
  };

  const removeImage = (index) => {
    const updated = [...watchImages];
    updated.splice(index, 1);
    setValue("images", updated);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Product Media */}
      <div className="input-section items-center">
        <h3 className="title">Product Media</h3>

        {/* Uploaded Images Preview */}
        <div className="w-full gap-4 flex flex-wrap p-4">
          {watchImages.map((file, index) => (
            <div
              key={index}
              className="relative border border-gray-300 w-fit max-w-[90px] max-h-[90px] lg:max-h-[150px] lg:max-w-[150px]"
            >
              <button 
                type="button"
                onClick={() => removeImage(index)}
                className="top-0 left-0 rounded-full user-card absolute bg-white/80 hover:bg-white"
              >
                <X />
              </button>
              <img
                src={
                  typeof file !== "string" ? URL.createObjectURL(file) : file
                }
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          ))}
        </div>

        <label
          htmlFor="images"
          className="bg-rose-400/30 rounded-2xl primary-bg transition-all duration-300 ease-in-out px-7 py-5 block text-white cursor-pointer"
        >
          Add Images
        </label>
        <input
          id="images"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          name="images"
          {...register("images")}
          onChange={handleImageChange}
        />
      </div>

      {/* Thumbnail */}
      <div className="input-section items-center">
        <h3 className="title">Thumbnail</h3>

        <div className="w-full gap-4 flex flex-wrap p-4">
          {watchThumbnail.length !== 0 && (
            <div className="border border-gray-300 w-fit max-w-[90px] max-h-[90px] lg:max-h-[150px] lg:max-w-[150px]">
              <img
                src={
                  typeof watchThumbnail === "string"
                    ? watchThumbnail
                    : URL.createObjectURL(watchThumbnail[0])
                }
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          )}
        </div>

        <label
          htmlFor="thumbnail"
          className="bg-rose-400/30 rounded-2xl primary-bg transition-all duration-300 ease-in-out px-7 py-5 block text-white cursor-pointer"
        >
          Add Thumbnail
        </label>
        <input
          id="thumbnail"
          name="thumbnail"
          type="file"
          accept="image/*"
          className="hidden"
          {...register("thumbnail", {
            required: true,
          })}
        />
      </div>
    </div>
  );
};

export default ImageUploader;
