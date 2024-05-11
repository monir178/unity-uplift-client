import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateSupplyMutation } from "@/redux/api/api";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface IFormData {
  itemName: string;
  category: string;
  amount: string;
  description: string;
  img: string;
}

const CreateSupply = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const [createSupply, { isLoading }] = useCreateSupplyMutation();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      const result = await createSupply(data);
      if (!result) {
        toast.error("Error occurred while creating supply", {
          position: "top-center",
        });
      } else {
        toast.success("Supply created successfully", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error occurred while creating supply:", error);
      toast.error("Error occurred while creating supply");
    }
  };

  return (
    <div className="pt-4 md:pt-10">
      <h1>Post a Supply</h1>
      <div className="flex justify-center">
        <form
          className="space-y-4 w-full max-w-md"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="itemName">Item Name:</label>
            <input
              className="input-field bg-gray-200 border border-popover rounded-md p-2  "
              type="text"
              id="itemName"
              {...register("itemName", { required: true })}
            />
            {errors.itemName && (
              <span className="text-red-500">Item Name is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="category">Category:</label>
            <input
              className="input-field bg-gray-200 border border-popover rounded-md p-2"
              type="text"
              id="category"
              {...register("category", { required: true })}
            />
            {errors.category && (
              <span className="text-red-500">Category is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Amount:</label>
            <input
              className="input-field bg-gray-200 border border-popover rounded-md p-2"
              type="text"
              id="amount"
              {...register("amount", { required: true })}
            />
            {errors.amount && (
              <span className="text-red-500">Amount is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Description:</label>
            <textarea
              className="input-field bg-gray-200 border border-popover rounded-md p-2"
              id="description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="img">Photo URL:</label>
            <textarea
              className="input-field bg-gray-200 border border-popover rounded-md p-2"
              id="img"
              {...register("img", { required: true })}
            />
            {errors.img && (
              <span className="text-red-500">Photo URL is required</span>
            )}
          </div>

          <Button
            className="bg-popover hover:bg-popover-foreground w-full"
            type="submit"
            disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Supply"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateSupply;
