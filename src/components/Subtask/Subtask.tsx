import { Checkbox } from "@/components/ui/Checkbox/Checkbox";
import { cn } from "@/lib/utils";

export interface SubtaskProps {
  children: string;
  finished?: boolean;
}

const Subtask = ({ children, finished }: SubtaskProps) => {
  return (
    <div className="px-3 rounded-md flex items-center bg-gray-300 hover:bg-primary/25">
      <Checkbox className="mr-4" defaultChecked={finished}/>
      <span
        className={cn(
          "font-bold text-black py-3",
          finished && "line-through text-body-text-secondary"
        )}
      >
        {children}
      </span>
    </div>
  );
};

export default Subtask;
