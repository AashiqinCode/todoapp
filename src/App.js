import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./App.css";
// Components
import TodoInput from "./Components/Form";
import TodoList from "./Components/ToDoList";

const App = () => (
  <Provider store={store}>
    <div className="main">
      <TodoInput />
      <TodoList />
    </div>
  </Provider>
);

export default App;
