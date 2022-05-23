import React, { useState } from "react";
//CSS
import styles from "./Todos.module.css";
//COMPONENTES
import TodoItem from "./TodoItem";

//INTERFACES
import ITodoList from "../interfaces/TodoListInterface";

let newKey = 0;

const Todos = () => {
  const [todoList, setTodoList] = useState<ITodoList[]>([]);
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoDesc, setTodoDesc] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: ITodoList = {
      todoKey: newKey++,
      titulo: todoTitle,
      descricao: todoDesc,
    };
    setTodoList([...todoList, newTodo]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "titulo") {
      setTodoTitle(e.target.value);
    } else {
      setTodoDesc(e.target.value);
    }
  };

  return (
    <div className={styles.todos_component_div}>
      {/*Div do Formulário */}
      <div className={styles.form_div}>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_container}>
            <div className={styles.input_div}>
              <label htmlFor="titulo">Titulo: </label>
              <input onChange={handleChange} name="titulo" />
            </div>
            <div className={styles.input_div}>
              <label htmlFor="descricao">Descrição: </label>
              <input onChange={handleChange} name="descricao" />
            </div>
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </div>

      {/*Div dos To Do */}
      <div className={styles.todos_div}>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.todoKey}
            todoKey={todo.todoKey}
            titulo={todo.titulo}
            descricao={todo.descricao}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
