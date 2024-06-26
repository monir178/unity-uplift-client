import { SubmitHandler, useForm } from "react-hook-form";
import {
  useGetAllReliefsQuery,
  useUpdateSupplyMutation,
} from "@/redux/api/api";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface IFormData {
  _id?: string;
  itemName: string;
  category: string;
  amount: string;
  description: string;
  img: string;
}

type TUpdateSupplyFormProps = {
  supplyId: string | null;
  closeModal: () => void;
};

const UpdateSupplyForm = ({ supplyId, closeModal }: TUpdateSupplyFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const [updateSupply, { isLoading }] = useUpdateSupplyMutation();

  const { data: defaultSupplies } = useGetAllReliefsQuery(undefined);

  const supply = defaultSupplies?.data.find(
    (supply: IFormData) => supply?._id === supplyId
  );

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      const result = await updateSupply({ id: supplyId, data });
      if (!result) {
        toast.error("Error occurred while updating supply", {
          position: "top-center",
        });
      } else {
        toast.success("Supply updated successfully", {
          position: "top-center",
        });
        closeModal();
      }
    } catch (error) {
      console.error("Error occurred while updating supply:", error);
      toast.error("Error occurred while updating supply");
    }
  };

  return (
    <div className="pt-4 md:pt-10">
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
              defaultValue={supply?.itemName || ""}
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
              defaultValue={supply?.category || ""}
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
              defaultValue={supply?.amount || ""}
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
              defaultValue={supply?.description || ""}
            />
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="img">Photo URL:</label>
            <input
              className="input-field bg-gray-200 border border-popover rounded-md p-2"
              type="text"
              id="img"
              {...register("img", { required: true })}
              defaultValue={supply?.img || ""}
            />
            {errors.img && (
              <span className="text-red-500">Photo URL is required</span>
            )}
          </div>

          <Button
            className="bg-popover hover:bg-popover-foreground w-full"
            type="submit"
            disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Supply"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSupplyForm;
