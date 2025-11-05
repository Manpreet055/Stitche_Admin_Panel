import { FormProvider, useForm } from "react-hook-form";
import ImageUploader from "../../Layout/ProductForm/ImageUploader";
import BasicInfo from "../../Layout/ProductForm/BasicInfo";
import PricingInfo from "../../Layout/ProductForm/PricingInfo";
import CategorySelect from "../../Layout/ProductForm/CategorySelect";
import StockDetails from "../../Layout/ProductForm/StockDetails";
import BackButton from "../../ui/BackButton";
import editProduct from "../../Utilities/Product/editProduct";
import ProductContext from "../../Context/products/productContext";
import { useContext } from "react";

const EditProductPage = () => {
  const { product } = useContext(ProductContext);
  const methods = useForm({
    defaultValues: {
      name: product.title,
      description: product.description,
      category: product.category,
      subCategory: product.subCategory,
      "discount-type": product.discount.type,
      brand: product.brand,
      barcode: product.barcode,
      price: Math.ceil(product.price),
      images: product.media.images,
      thumbnail: product.media.thumbnail,
      discount: product.discount.percentage,
      priceAfterDiscount: product.discount.priceAfterDiscount,
      stock: product.stock,
      isFeatured: product.isFeatured ? "yes" : "no",
    },
  });

  return (
    <section className="overflow-y-scroll scrollbar-hidden px-5  h-screen pb-56 w-full">
      <div className="w-full flex justify-start">
        <BackButton />
      </div>
      <FormProvider {...methods}>
        <form
          action=""
          method="POST"
          onSubmit={methods.handleSubmit((value) =>
            editProduct(value, product.id),
          )}
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
                {methods.formState.isSubmitting ? "Updating" : "Update"}
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default EditProductPage;
