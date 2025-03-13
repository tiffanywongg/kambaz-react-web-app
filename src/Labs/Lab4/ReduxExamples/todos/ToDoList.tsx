//import { useState } from "react";
import {ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    // const [todos, setTodos] = useState(initialTodos);
    // const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
    // const addTodo = (todo: any) => {
    //   const newTodos = [ ...todos, { ...todo,
    //     id: new Date().getTime().toString() }];
    //   setTodos(newTodos);
    //   setTodo({id: "-1", title: ""});
    // };
    // const deleteTodo = (id: string) => {
    //   const newTodos = todos.filter((todo) => todo.id !== id);
    //   setTodos(newTodos);
    // };
    // const updateTodo = (todo: any) => {
    //   const newTodos = todos.map((item) =>
    //     (item.id === todo.id ? todo : item));
    //   setTodos(newTodos);
    //   setTodo({id: "-1", title: ""});
    // };
    return (
      <div>
        <h2>Todo List</h2>
        <ListGroup>
          {/* <ListGroup.Item className="d-flex align-items-center justify-content-between">
            <FormControl
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              className="me-2"
              style={{ width: "auto" }}
            />
            <div>
              <Button onClick={() => updateTodo(todo)} id="wd-update-todo-click" className="btn me-2 btn-warning">
                Update
              </Button>
              <Button onClick={() => addTodo(todo)} id="wd-add-todo-click" className="btn btn-success">
                Add
              </Button>
            </div>
          </ListGroup.Item >
          {todos.map((todo) => (
            <ListGroup.Item key={todo.id} className="d-flex align-items-center justify-content-between">
                {todo.title}
                <div className="ms-auto">
                  <Button onClick={() => setTodo(todo)}
                        id="wd-set-todo-click" className="btn me-2 btn-primary"> Edit </Button>
                  <Button onClick={() => deleteTodo(todo.id)}
                        id="wd-delete-todo-click" className="btn btn-danger"> Delete </Button>
                </div>
              
            </ListGroup.Item>
          ))} */}
            {/* <TodoForm
                todo={todo}
                setTodo={setTodo}
                updateTodo={updateTodo}
                addTodo={addTodo}/>
                {todos.map((todo) => (
            <TodoItem
                todo={todo}
                deleteTodo={deleteTodo}
                setTodo={setTodo} />
            ))} */}

        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} deleteTodo={(id: string) => {}} setTodo={(todo: { id: string; title: string; }) => {}} />
        ))}


        </ListGroup><hr/>
  </div>);}
  