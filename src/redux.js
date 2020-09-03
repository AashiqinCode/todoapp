import { createStore } from "redux";
import { v4 as uuid } from "uuid";

const initialState = {
  todos: [
    {
      id: uuid(),
      name: "Read a bit",
      complete: true,
    },
    {
      id: uuid(),
      name: "Do laundry",
      complete: false,
    },
  ],
};

export const store = createStore(
  reducer,
  initialState, //As i didnt used CombinedReducer,passed the initial state to the createStore
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);
// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                complete: !todo.complete,
              }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
// Actions
export const addTodoAction = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const toggleTodoComplete = (todoId) => ({
  type: "TOGGLE_TODO",
  payload: todoId,
});

export const deleteTodoAction = (todoId) => ({
  type: "DELETE_TODO",
  payload: todoId,
});
