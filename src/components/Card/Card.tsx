export interface CardProps {
  title: string;
  todoSubTasks: number;
  doneSubTasks: number;
  onHandleClick?: () => void;
}

const Card = ({ title, todoSubTasks, doneSubTasks, onHandleClick }: CardProps) => {
  return (
    <div className="bg-white w-full flex flex-col py-[1.4375rem] px-4 rounded-lg max-w-[17.5rem] shadow-md hover:cursor-pointer" onClick={onHandleClick}>
      <span className="text-heading-md font-bold">{title}</span>
      <div>
        <span className="text-body-md font-bold text-body-text-secondary">{todoSubTasks} of {doneSubTasks} substasks</span>
      </div>
    </div>
  );
};

Card.displayName = "Card";

export default Card;
