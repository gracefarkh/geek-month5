import { changeTodoValue, addTodo, deleteAllTodo } from "../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../components/Todo";

export default function TodoPage() {
  const dispatch = useDispatch();

  const { value, todos } = useSelector((state) => state.todoReducer);

  const changeValueFn = (event) => {
    dispatch(changeTodoValue(event.target.value));
  };

  const addTodoFn = () => {
    if (value.trim() === "") {
      alert("The fields are empty");
      return;
    }
    dispatch(addTodo(value));
  };

  const deleteAll = () => {
    dispatch(deleteAllTodo());
  };

  return (
    <div className="todoPage">
      <input
        className="input_main"
        type="text"
        value={value}
        onChange={changeValueFn}
        placeholder="Enter your todo"
      />
      <button 
      onClick={addTodoFn}>Add to do</button>
      <button onClick={deleteAll}>Delete All</button>
      {todos.length > 0 ? (
        todos.map((todo) => <Todo todoInfo={todo} key={todo.id} />)
      ) : (
        <p className="to_do">Enter to do</p>
      )}
    </div>
  );
}
