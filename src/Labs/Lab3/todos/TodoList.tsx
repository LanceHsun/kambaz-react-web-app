import TodoItem from "./TodoItem";
import todos from "./todos.json";
export default function TodoList() {
    let count = 0;
    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {todos.map(todo => {
                    return (<TodoItem key={count++} todo={todo} />);
                })}
            </ul><hr />
        </>
    );
}
