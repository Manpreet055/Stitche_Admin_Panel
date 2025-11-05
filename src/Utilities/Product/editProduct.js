import axios from "axios";
import handleError from "../handleApiError";
const apiPath = import.meta.env.VITE_EDIT_PRODUCT;

const editProduct = async (data, id) => {
  try {
    const response = await axios.patch(apiPath, {
      id,
      title: data.title,
      brand: data.brand,
      category: data.category,
      description: data.description,
      discountPercentage: data.discountPercentage,
      images: data.images.map((img) =>
        typeof img === "string"
          ? {
              url: img,
              type: "existing",
            }
          : { file: img, type: "new" },
      ),
      thumbnail: Array.of(data.thumbnail).map((t) =>
        typeof t === "string"
          ? { url: t, type: "existing" }
          : {
              file: t,
              type: "new",
            },
      ),
      stock: data.stock,
      price: data.price,
      priceAfterDiscount: data.priceAfterDiscount,
      subCategory: data.subCategory,
    });
    const responseData = response.data;
    console.log(responseData);
  } catch (error) {
    handleError(error);
  }
};

export default editProduct;
