import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/todoSlice";
import { changeStatus } from "../store/todoSlice";
import NewWindow from "./NewWindow/NewWindow";


export function Todo({ todoInfo }) {
  const dispatch = useDispatch();

  const deleteTodoFn = () => {
    dispatch(deleteTodo(todoInfo.id));
  };

  const changeCheckbox = (event) => {
    const todo = {
      status: event.target.checked,
      id: todoInfo.id,
    };
    dispatch(changeStatus(todo));
  };

  const EditFn = () => {
    dispatch(editTodo(todoInfo.id));
  };
  return (
    <>
      {todoInfo.editStatus ? (
        <div className="todo">
          <input type="checkbox" onClick={changeCheckbox} />
          <p className={todoInfo.status ? "active" : ""}>{todoInfo.text}</p>
          <button 
          className="delete"
          onClick={deleteTodoFn}> delete</button>
          <button onClick={EditFn}>Edit</button>
        </div>
      ) : (
        <NewWindow todoInfo={todoInfo} />
      )}
    </>
  );
}
