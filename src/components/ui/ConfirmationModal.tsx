import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";

type TConfirmationModalProps = {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onConfirm: () => void;
};

const ConfirmationModal = ({
  open,
  onOpenChange,
  onConfirm,
}: TConfirmationModalProps) => {
  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
        </DialogHeader>
        <div className="flex justify-end space-x-4">
          <Button
            onClick={handleCancel}
            className="bg-popover hover:bg-popover-foreground">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="bg-red-500 hover:bg-red-700">
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
