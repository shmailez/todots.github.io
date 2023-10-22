import TodoItem from "./TodoItem";
import React from "react";
import { useAppDispatch } from "../hooks";
import { removeAll, todoSelector } from "../redux/Slices/TodoSlice";
import { useSelector } from "react-redux";

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();

  const todos = useSelector(todoSelector.selectAll);

  console.log(todos);

  return (
    <>
      <button className="dell-button" onClick={() => dispatch(removeAll())}>
        {" "}
        DELETE ALL TODO{" "}
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
