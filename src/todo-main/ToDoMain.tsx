import ToDoInput from "../todo-input/ToDoInput.tsx";
import ToDoOutput from "../todo-output/ToDoOutput.tsx";
import {useState} from "react";


const ToDoMain = () =>{
  const [ newValue, setNewValue] = useState<string[]>([]);
  return(
      <>
        <ToDoInput setNewValue = {setNewValue} />
        <ToDoOutput setNewValue = {setNewValue}  newValue = {newValue}/>

      </>

  );
};
export default ToDoMain