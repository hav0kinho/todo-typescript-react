import { Dispatch, SetStateAction } from "react";

export default interface ITodoList {
  todoKey: number;
  titulo: string;
  descricao: string;
  todoList?: ITodoList[];
  setTodoList?: Dispatch<SetStateAction<ITodoList[]>>;
}
