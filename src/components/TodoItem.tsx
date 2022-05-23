import React, { useState } from "react";
//CSS
import styles from "./TodosItem.module.css";

//INTERFACES
import ITodoList from "../interfaces/TodoListInterface";

//COMPONENTE
const TodosList = ({
  todoKey,
  titulo,
  descricao,
  todoList,
  setTodoList,
}: ITodoList) => {
  const [finished, setFinished] = useState<boolean>(false);

  const handleCompleteButton = () => {
    setFinished(!finished);
  };

  const handleDeleteButton = () => {
    const newTodoList: ITodoList[] = todoList?.filter((todo) => {
      return todo.todoKey !== todoKey;
    })!;

    setTodoList!(newTodoList);
    console.log(todoList);
  };

  return (
    <div
      className={
        finished === true ? styles.todo_element_completed : styles.todo_element
      }
    >
      <div className={styles.todo_text}>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
      <div className={styles.todo_buttons}>
        <button onClick={handleCompleteButton} className={styles.button_green}>
          {finished === true ? "Descompletar" : "Completar"}
        </button>
        <button onClick={handleDeleteButton} className={styles.button_red}>
          Deletar
        </button>
      </div>
    </div>
  );
};

export default TodosList;
