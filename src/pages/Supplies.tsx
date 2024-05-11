import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  useDeleteSupplyMutation,
  useGetAllReliefsQuery,
} from "@/redux/api/api";
import { TReliefGoods } from "@/types/releifGoods";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";

import { useState } from "react";
import UpdateSupplyForm from "./UpdateSupplyForm";
import ConfirmationModal from "@/components/ui/ConfirmationModal";

const Supplies = () => {
  const [open, setOpen] = useState(false);
  const [selectedSupplyId, setSelectedSupplyId] = useState<string | null>(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [supplyToDeleteId, setSupplyToDeleteId] = useState<string | null>(null);

  const closeModal = () => {
    setOpen(false);
    setSelectedSupplyId(null);
  };

  const {
    data: supplies,
    isLoading,
    isError,
  } = useGetAllReliefsQuery(undefined);

  // console.log(supplies);

  const [deleteSupplyMutation] = useDeleteSupplyMutation();

  const deleteSupply = async (id: string) => {
    // console.log(id);
    try {
      await deleteSupplyMutation(id);
      setDeleteConfirmationOpen(false);
    } catch (error) {
      console.log({ error });
    }
  };

  if (isLoading) {
    return (
      <Container className="pt-32 flex justify-center">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </Container>
    );
  }

  if (isError) {
    return <p>An Error occurred</p>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const animation = useFadeIn();

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="visible"
      className="pt-4 md:pt-10">
      <div>
        <h1 className="text-center mb-4">All Supplies</h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-popover">
                  <th></th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {supplies?.data?.map((item: TReliefGoods, index: number) => (
                  <tr key={item._id}>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex  gap-3 items-center">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold max-w-[10ch]">
                            {item.itemName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">{item.category}</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold max-w-[10ch]">
                          {item.amount}
                        </div>
                      </div>
                    </td>

                    <td className="flex flex-col gap-2">
                      <Button
                        onClick={() => {
                          setOpen(true);
                          setSelectedSupplyId(item._id);
                        }}
                        className="bg-popover hover:bg-popover-foreground">
                        Update
                      </Button>
                      <Button
                        onClick={() => {
                          setSupplyToDeleteId(item._id);
                          setDeleteConfirmationOpen(true);
                        }}
                        className="bg-red-500 hover:bg-red-700">
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal for updating supply */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Supply</DialogTitle>
          </DialogHeader>
          <UpdateSupplyForm
            supplyId={selectedSupplyId}
            closeModal={closeModal}
          />
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <ConfirmationModal
        open={deleteConfirmationOpen}
        onOpenChange={setDeleteConfirmationOpen}
        onConfirm={() => {
          if (supplyToDeleteId !== null) {
            deleteSupply(supplyToDeleteId);
            setSupplyToDeleteId(null);
          }
        }}
      />
    </motion.div>
  );
};

export default Supplies;
