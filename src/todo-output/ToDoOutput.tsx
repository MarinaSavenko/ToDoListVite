import ToDoButtons from "../todo-buttons/ToDoButtons.tsx";

interface ToDoOutputProps {
    newValue: string[];
    setNewValue: (newValue: string[]) => void;

}

const ToDoOutput = ({newValue, setNewValue}: ToDoOutputProps) =>{

    return(
        <div>
            {newValue.map((outputValue, index) => (
                <div key={index}>
                <ToDoButtons {...{newValue, setNewValue, outputValue}}/>
                </div>

            ))}

        </div>

    );
};
export default ToDoOutput