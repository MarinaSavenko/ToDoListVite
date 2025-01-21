import {useState} from "react";

interface ToDoInputProps {
    setNewValue: (newValue: (prevValue: string[]) => string[]) => void;
}
const ToDoInput = ({ setNewValue }: ToDoInputProps) =>{
    const [value, setValue] = useState("");
   
    return(
        <>
            <input type="text" value={value}
                 onChange={(event) => {
                     setValue(event.target.value)
                 }}/>
            <button type="button" onClick={() =>{
                setNewValue((newValue: string[]) => {
                    return([...newValue, value])
                    });

                setValue("");
               // console.log(value);
               } } > Add </button>
        </>
    );
}
export default ToDoInput