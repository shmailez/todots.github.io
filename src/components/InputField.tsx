import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { addTodo } from "../redux/Slices/TodoSlice";

const InputField: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (title.trim().length) {
      dispatch(
        addTodo({
          title: title,
          id: new Date().toISOString(),
          completed: false,
        })
      );
      setTitle("");
    }
  };

  return (
    <div className="input-field">
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button className="add-button" onClick={handleAction}>
        {" "}
        add{" "}
      </button>
    </div>
  );
};

export default InputField;
