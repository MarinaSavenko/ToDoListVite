import ToDoButtoms from "../todo-buttoms/ToDoButtoms.tsx";

interface ToDoOutputProps {
    newValue: string[];
    setNewValue: (newValue: string[]) => void;

}

const ToDoOutput = ({newValue, setNewValue}: ToDoOutputProps) =>{

    return(
        <div>
            {newValue.map((outputValue, index) => (
                <div key={index}>
                <ToDoButtoms {...{newValue, setNewValue, outputValue}}/>
                </div>

            ))}

        </div>

    );
};
export default ToDoOutput