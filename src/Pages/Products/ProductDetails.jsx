import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PDPHeader from "../../Layout/Products/ProductDetails/PDPHeader";
import ProductGallery from "../../Layout/Products/ProductDetails/ProductGallery";
import ProductDesc from "../../Layout/Products/ProductDetails/ProductDesc";
import PriceDetails from "../../Layout/Products/ProductDetails/PriceDetails";
import MetaData from "../../Layout/Products/ProductDetails/MetaData";
import { fetchAllDataById } from "../../services/fetchData";
import ProductContext from "../../Context/products/productContext";

const ProductDetails = () => {
  const { product, setProduct } = useContext(ProductContext);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(null);

  const { productId } = useParams();

  const [imagesArr, setImages] = useState([]);
  const [thumbnails, setThumbnail] = useState("");

  useEffect(() => {
    if (!productId) return;

    const fetchProductData = async () => {
      try {
        const data = await fetchAllDataById(
          "products",
          productId,
          setLoadingState,
          setError
        );
        const fetchedProduct = data?.product ?? data ?? null;
        setProduct(fetchedProduct);

        setImages(fetchedProduct?.media?.images ?? []);
        setThumbnail(fetchedProduct?.media?.thumbnail ?? "");
      } catch (err) {
        setError(err?.message ?? "Failed to load product");
      }
    };

    if (product) return;
    fetchProductData();
  }, []);

  const {
    title = "",
    _id = "",
    description = "",
    category = "",
    subCategory = "",
    brand = "",
    sku = "",
    stock = 0,
    price = 0,
    discount = {},
    rating = 0,
    media = {},
    isFeatured = false,
    timestamps = {},
  } = product ?? {};

  const { thumbnail = "", images = [] } = media;
  const { createdAt = "", updatedAt = "" } = timestamps;
  const discountPercentage = discount?.percentage ?? 0;

  useEffect(() => {
    setImages(images ?? []);
    setThumbnail(thumbnail ?? "");
  }, [images, thumbnail]);

  return (
    <section className="flex h-screen overflow-y-auto scrollbar-hidden pb-56 flex-col gap-6 p-4 w-full">
      <PDPHeader
        title={title}
        category={category}
        subCategory={subCategory}
        id={_id}
        isFeatured={isFeatured}
      />
      <ProductGallery images={imagesArr} thumbnail={thumbnails} />
      <ProductDesc
        description={description}
        brand={brand}
        rating={rating}
        stock={stock}
        isFeatured={isFeatured}
      />
      <div className="flex min-h-64 gap-y-6 justify-between flex-wrap">
        <PriceDetails price={price} discount={discountPercentage} />
        <MetaData
          id={_id}
          sku={sku}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
      </div>
    </section>
  );
};

export default ProductDetails;
