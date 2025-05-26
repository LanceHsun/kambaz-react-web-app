import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

interface Todo {
  id: string;
  title: string;
}

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: Todo) => (
          <TodoItem 
            key={todo.id}
            todo={todo} 
          />
        ))}
      </ListGroup>
      <hr/>
    </div>
  );
}