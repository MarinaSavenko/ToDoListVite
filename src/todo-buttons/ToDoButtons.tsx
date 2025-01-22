import { useState } from "react";

interface ToDoButtonsProps {
    newValue: string[];
    setNewValue: (newValue: string[]) => void;
    outputValue: string;
}

const ToDoButtons = ({ newValue, setNewValue, outputValue }: ToDoButtonsProps) => {
    // Состояние для отслеживания изменения текста
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(outputValue);

    // Функция для обработки изменения текста
    const onSave = () => {
        setNewValue(
            newValue.map((item) => (item === outputValue ? editedValue : item))
        );
        setIsEditing(false);  // Отключаем режим редактирования
    };

    // Функция для обработки удаления задачи
    const onDelete = () => {
        setNewValue(newValue.filter((item) => item !== outputValue));
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
}
export default ToDoButtons


