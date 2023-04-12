import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    value: "",
    newValue: "",
    todos: [],
  },
  reducers: {
    changeTodoValue: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
    addTodo: (state, action) => {
      let id = 1;
      if (state.todos.length > 0) {
        id = state.todos[state.todos.length - 1].id + 1;
      }

      state.todos = [
        ...state.todos,
        { id, text: action.payload, status: false, editStatus: true },
      ];
      state.value = ''
    },
    deleteTodo: (state, action) => {
      const id = action.payload;

      const filteredTodos = state.todos.filter((todo) => +todo.id !== +id);

      state.todos = filteredTodos;
    },
    changeStatus: (state, action) => {
      const id = action.payload.id;
      const status = action.payload.status;

      const newArray = state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: status,
          };
        } else return todo;
      });
      state.todos = newArray;
    }, 
    deleteAllTodo:(state , action) =>{
        state.todos = []
    },
    editTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.editStatus = false;
        }
      });
    },
    getNewValue: (state, action) => {
      state.newValue = action.payload;
    },
    saveTodoValue: (state, action) => {
      const id = action.payload.id;
      const newValue = action.payload.value;
      state.todos.map((value) => {
        if (value.id === id) {
          value.text = newValue;
          value.editStatus = true;
        }
      });
    },
    cancelTodo: (state, action) => {
      state.todos.map((value) => {
        if (value.id === action.payload) {
          value.editStatus = true;
        }
      });
    },
  },
});

export const {
  changeTodoValue,
  addTodo,
  deleteTodo,
  changeStatus,
  deleteAllTodo,
  editTodo,
  getNewValue,
  saveTodoValue,
  cancelTodo
} = todoSlice.actions;

export default todoSlice.reducer;
