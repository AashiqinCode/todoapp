import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import {store,persistor} from './redux';
import { PersistGate } from "redux-persist/integration/react";

// Components
import TodoInput from "./Components/Form";
import TodoList from "./Components/ToDoList";

const App = () => (
  <Provider store={store}>
    <div className="main">
      <header className="main">To Do List</header>
      <PersistGate persistor={persistor}>
        <TodoInput />
        <TodoList />
      </PersistGate>
    </div>
  </Provider>
);

export default App;
