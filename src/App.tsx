import { Button } from "@/components/ui/Button/Button";
function App() {
  return <div className="bg-gray-300 w-full h-full flex items-center justify-center flex-col">
    <div className="mb-8 text-heading-lg text-gray-500 font-bold">This board is empty. Create a new column to get started.</div>
    <Button>+ Add New Column</Button>
    </div>;
}

export default App;
