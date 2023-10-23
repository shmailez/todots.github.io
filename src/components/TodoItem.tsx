import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { removeTodo, updateTodo } from "../redux/Slices/TodoSlice";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  const [edit, setEdit] = useState(false);

  const [currentTitle, setCurrentTitle] = useState(title);

  const formSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setEdit((prev) => !prev);

    dispatch(updateTodo({ id: id, changes: { title: currentTitle } }));
  };
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
      <span style={{ display: edit ? "none" : "" }}>{title}</span>
      <form onSubmit={formSubmit} style={{ display: edit ? "inline" : "none" }}>
        <input
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
        />
      </form>
      <span className="span-button" onClick={() => setEdit((prev) => !prev)}>
        Change
      </span>
      <span className="span-button" onClick={() => dispatch(removeTodo(id))}>
        DEL
      </span>
    </li>
  );
};

export default TodoItem;
