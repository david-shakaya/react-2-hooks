import React from "react";
// import style from "./Todos.module.css";

const Todos = ({ todos, onDeleteTodo, cauntComplitedTodo }) => {
  return (
    <div>
      <p>Общее количество {todos.length}</p>
      <p>Количество выполненных {cauntComplitedTodo} </p>
      <ul>
        {todos.map(({ id, text }) => {
          return (
            <li key={id}>
              <h2>{text}</h2>
              <button onClick={() => onDeleteTodo(id)}>Удалить</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
