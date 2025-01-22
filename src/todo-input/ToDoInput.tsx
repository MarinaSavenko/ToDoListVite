import { useState } from "react";
import { useDispatch } from "react-redux";


interface ToDoInputProps {
    setNewValue: (newValue: string[]) => void;
}

const ToDoInput = ({ setNewValue }: ToDoInputProps) => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    return (
        <>
            <input
                type="text"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
            <button
                type="button"
                onClick={() => {
                    dispatch(setNewValue(value));
                    setValue("");
                }}
            >
                Add
            </button>
        </>
    );
};

export default ToDoInput;
