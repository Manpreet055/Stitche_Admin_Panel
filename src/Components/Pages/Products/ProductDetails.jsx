import React, { useEffect, useState } from "react";
import PDPHeader from "../../Layout/Products/ProductDetails/PDPHeader";
import { useParams } from "react-router-dom";
import ProductsData from "../../Layout/Products/products.json";
import ProductGallery from "../../Layout/Products/ProductDetails/ProductGallery";
import ProductDesc from "../../Layout/Products/ProductDetails/ProductDesc";
import PriceDetails from "../../Layout/Products/ProductDetails/PriceDetails";
import MetaData from "../../Layout/Products/ProductDetails/MetaData";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = ProductsData.find((p) => String(p.id) === String(productId));
  const {
    title,
    id,
    description,
    category,
    subCategory,
    brand,
    sku,
    stock,
    price,
    discount,
    rating,
    media,
    isFeatured,
    timestamps,
  } = product;
  const { thumbnail, images } = media;
  const { createdAt, updatedAt } = timestamps;

  //
  const [loadingState, setLoadingState] = useState(true);
  const [imagesArr, setImages] = useState([]);
  const [thumbnails, setThumbnail] = useState("");
  useEffect(() => {
    setImages(images);
    setThumbnail(thumbnail);
    setLoadingState(false);
  }, []);

  return (
    <section className="flex h-screen overflow-y-auto scrollbar-hidden pb-56 flex-col gap-6 p-4 w-full">
      <PDPHeader
        title={title}
        category={category}
        subCategory={subCategory}
        id={id}
        isFeatured={isFeatured}
      />
      <ProductGallery
        images={imagesArr}
        thumbnail={thumbnails}
        loadingState={loadingState}
      />
      <ProductDesc
        description={description}
        brand={brand}
        rating={rating}
        stock={stock}
        isFeatured={isFeatured}
      />
      <div className="flex min-h-64 gap-y-6 justify-between flex-wrap">
        <PriceDetails price={price} discount={discount.percentage} />
        <MetaData
          id={id}
          sku={sku}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
      </div>
    </section>
  );
};

export default ProductDetails;
