import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/AlertDialog/AlertDialog";

export type DialogProps = {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  textCancel: string;
  textConfirm: string;
};

const CustomDialog = ({title, description, onConfirm, onCancel, textCancel, textConfirm}: DialogProps) => {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent className='max-w-[30rem]'>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction variant='destructive' size='full' onClick={onConfirm}>{textConfirm}</AlertDialogAction>
          <AlertDialogCancel variant='secondary' size='full' onClick={onCancel}>{textCancel}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default CustomDialog;
