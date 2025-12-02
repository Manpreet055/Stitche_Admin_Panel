import { FormProvider, useForm } from "react-hook-form";
import ImageUploader from "../../Layout/ProductForm/ImageUploader";
import StockDetails from "../../Layout/ProductForm/StockDetails";
import PricingInfo from "../../Layout/ProductForm/PricingInfo";
import BasicInfo from "../../Layout/ProductForm/BasicInfo";
import CategorySelect from "../../Layout/ProductForm/CategorySelect";
import BackButton from "../../ui/BackButton";
import { createProduct } from "../../services/products";
import { useState } from "react";
import ToastComp from "../../ui/ToastComp";
import { Check, Clock, TriangleAlert } from "lucide-react";
const AddProduct = () => {
  const methods = useForm();

  const [toast, setToast] = useState();
  const [error, setError] = useState(false);

  const onsubmit = (data) => {
    console.log(data);
    createProduct(data, setToast, setError);
  };

  const toastData = {
    submitting: {
      text: "Creating New Product",
      icon: <Clock />,
    },
    submitted: {
      text: "New Product Created",
      icon: <Check />,
    },
    error: {
      text: error,
      icon: <TriangleAlert />,
    },
  };

  return (
    <section className=" scrollbar-hidden w-full h-screen blur-bg flex-1 overflow-y-auto sm:pb-30 overflow-x-hidden">
      {toast ? (
        <ToastComp text={toastData[toast].text} icon={toastData[toast].icon} />
      ) : (
        error && <ToastComp text={error} icon={TriangleAlert} />
      )}{" "}
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
                {toastData[toast] === "submitting"
                  ? "Creating product "
                  : "Create Product"}
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default AddProduct;
