import { useSelector } from "react-redux";
import ToDoButtons from "../todo-buttons/ToDoButtons.tsx";
import { AddedState } from "../features/counter/addedSlice.ts";

interface ToDoOutputProps {}

const ToDoOutput = (props: ToDoOutputProps) => {
  const values = useSelector(
    (state: { added: AddedState }) => state.added.values
  );

  return (
    <div>
      {values.map((outputValue, index) => (
        <div key={index}>
          <ToDoButtons {...{ outputValue }} />
        </div>
      ))}
    </div>
  );
};
export default ToDoOutput;
