import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { FormControl, ListGroup, Button } from "react-bootstrap";

export default function TodoForm(
    //{ todo, setTodo, addTodo, updateTodo }
) {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <ListGroup.Item>
            <div className="d-flex justify-content-between align-items-center">
                <FormControl
                    className="flex-grow-1"
                    value={todo.title}
                    onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
                <Button
                    onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click"
                    className="btn btn-warning ms-2">
                    Update
                </Button>
                <Button
                    onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click"
                    className="btn btn-success ms-2">
                    Add
                </Button>
            </div>
        </ListGroup.Item>
    );
}
