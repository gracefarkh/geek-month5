import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelTodo, getNewValue, saveTodoValue } from "../../store/todoSlice";

function NewWindow({ todoInfo }) {
  const dispatch = useDispatch();

  const { newValue } = useSelector((state) => state.todoReducer);

  const getNewValueFn = (event) => {
    dispatch(getNewValue(event.target.value));
  };
  console.log(newValue);

  const saveTodoFn = () => {
    const valueObj = {
      id: todoInfo.id,
      value: newValue,
    };
    dispatch(saveTodoValue(valueObj));
  };

  const cancelTodoFn = () => {
    dispatch(cancelTodo(todoInfo.id));
  };



  return (
    <div className="new_todo">
      <input 
      className="new_input"
      type="text" onChange={getNewValueFn} />
      <button onClick={saveTodoFn}>Save</button>
      <button onClick={cancelTodoFn}>Cancel</button>
    </div>
  );
}

export default NewWindow;
