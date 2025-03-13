import { Button, ListGroup } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
    todo: { id: string; title: string };
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string; title: string }) => void;
  }) {
    const dispatch = useDispatch();
    return (
      <ListGroup.Item key={todo.id}  className="d-flex align-items-center justify-content-between">
        {todo.title}
        <div className="ms-auto">
            <Button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click" className="btn me-2 btn-primary"> Edit </Button>
            <Button onClick={() =>  dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click" className="btn btn-danger"> Delete </Button>
        </div> 
    </ListGroup.Item>);}