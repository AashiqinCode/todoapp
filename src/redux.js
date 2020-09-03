import { createStore } from "redux";
import { v4 as uuid } from "uuid";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

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

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducer);

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

// Reducer
export function reducer(state, action) {
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

export const store = createStore(
  persistedReducer,
  initialState,
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);
export const persistor = persistStore(store);
