import { useState } from "react";
import {
  AddedState,
  setNewValue,
  setValue,
} from "../features/counter/addedSlice";
import { useDispatch, useSelector } from "react-redux";

interface ToDoButtonsProps {
  outputValue: string;
}

const ToDoButtons = ({ outputValue }: ToDoButtonsProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(outputValue);
  const values = useSelector(
    (state: { added: AddedState }) => state.added.values
  );

  const onSave = () => {
    const newValues = values.map((item) =>
      item === outputValue ? editedValue : item
    );
    dispatch(setValue(newValues));
    setIsEditing(false); // Отключаем режим редактирования
  };

  // Функция для обработки удаления задачи
  const onDelete = () => {
    dispatch(setValue(values.filter((item) => item !== outputValue)));
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)} // Обновляем значение
        />
      ) : (
        outputValue // Если не редактируем, просто отображаем элемент
      )}

      {isEditing && (
        <button type="button" onClick={onSave}>
          Save
        </button>
      )}
      <>
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </>
    </div>
  );
};
export default ToDoButtons;
