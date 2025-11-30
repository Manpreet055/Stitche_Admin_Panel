import React, { useContext, useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ImageUploader from "../../Layout/ProductForm/ImageUploader";
import BasicInfo from "../../Layout/ProductForm/BasicInfo";
import PricingInfo from "../../Layout/ProductForm/PricingInfo";
import CategorySelect from "../../Layout/ProductForm/CategorySelect";
import StockDetails from "../../Layout/ProductForm/StockDetails";
import BackButton from "../../ui/BackButton";
import { updateProduct } from "../../services/products";
import { useParams } from "react-router-dom";
import { fetchAllDataById } from "../../services/fetchData";
import { Check, Clock, TriangleAlert } from "lucide-react";
import ToastComp from "../../ui/ToastComp";

const EditProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState();

  useEffect(() => {
    try {
      async function fetchData() {
        const data = await fetchAllDataById(
          "products",
          productId,
          setLoadingState,
          setError,
        );
        setProduct(data);
        // console.log(data);
      }
      fetchData();
    } catch (error) {
      setError(error.message);
    }
  }, [productId]);

  const defaultValues = {
    title: product.title ?? "",
    description: product.description ?? "",
    category: product.category ?? "",
    subCategory: product.subCategory ?? "",
    type: product.discount?.type ?? 0,
    brand: product.brand ?? "",
    barcode: product.barcode ?? "",
    price: Math.ceil(product.price ?? 0),
    images: product.media?.images ?? [],
    thumbnail: product.media?.thumbnail ?? "",
    value: product.discount?.discount || product.discount?.value || 0,
    priceAfterDiscount: product.discount?.priceAfterDiscount ?? 0,
    stock: product.stock ?? product.quantity ?? 0,
    isFeatured: product.isFeatured ? true : false,
    sku: product.sku,
  };

  const toastData = {
    updating: {
      text: "Updating Product",
      icon: <Clock />,
    },
    updated: {
      text: "Product Updated",
      icon: <Check />,
    },
    error: {
      text: error,
      icon: <TriangleAlert />,
    },
  };

  const methods = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (!product) return;
    methods.reset(defaultValues);
  }, [product]);

  const onsubmit = async (data) => {
    console.log(data);
    const { dirtyFields } = methods.formState;
    const currentValues = methods.getValues();
    const changedData = Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key] = currentValues[key];
      return acc;
    }, {});
    updateProduct(productId, changedData, setLoadingState, setError, setToast);
  };
  return (
    <section className="overflow-y-scroll scrollbar-hidden px-5  h-screen pb-56 w-full">
      {toast ? (
        <ToastComp text={toastData[toast].text} icon={toastData[toast].icon} />
      ) : (
        error && <ToastComp text={error} icon={TriangleAlert} />
      )}
      <div className="w-full flex justify-start">
        <BackButton />
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onsubmit)}
          className=" rounded-3xl flex gap-y-6 justify-evenly flex-wrap w-full"
        >
          <div className="flex-col gap-6 flex w-full max-w-2xl">
            <BasicInfo />
            <PricingInfo />
            <CategorySelect />
          </div>

          <div className="w-full  gap-6 max-w-2xl flex flex-col">
            <StockDetails />
            <ImageUploader />
            <div className="flex gap-2 justify-end px-4">
              <button
                className="button-style primary-bg scale-transition"
                type="reset"
              >
                Clear All
              </button>
              <button
                disabled={methods.formState.isSubmitting}
                className={`button-style primary-bg scale-transition ${
                  methods.formState.isSubmitting && "opacity-50"
                }`}
                type="submit"
              >
                {loadingState ? "Updating Product" : "Update Product"}
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default EditProductPage;
