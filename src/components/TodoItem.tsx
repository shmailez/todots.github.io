import React from "react";
import { useAppDispatch } from "../hooks";
import { removeTodo, updateTodo } from "../redux/Slices/TodoSlice";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() =>
          dispatch(
            updateTodo({
              id: id,
              changes: { completed: !completed },
            })
          )
        }
      />
      <span>{title}</span>
      <span className="span-button" onClick={() => dispatch(removeTodo(id))}>
        DEL
      </span>
    </li>
  );
};

export default TodoItem;
