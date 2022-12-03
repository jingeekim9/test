import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Input = styled.input`
  font-size: 18px;
  border: 1px solid #f0c0bb;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: #faf1f0;
  width: 70%;
  height: 30px;
  padding: 5px;
`;

const Button = styled.button`
  background-color: #f0c0bb;
  border: none;
  width: 20%;
  font-weight: 700;
`;

function TodoAdd({ todos, updateTodo }) {
  const [todo, setTodo] = useState({
    id: null,
    text: "",
    isDone: false,
  });

  const addTodo = (e) => {
    const { name, value } = e.target;
    setTodo({
      id: todos.length + 1,
      text: value,
      isDone: false,
    });
  };

  const onClickChange = () => {
    if(todo.text == "")
    {
      alert("Please insert some text.");
      return;
    }
    updateTodo(todo);
    setTodo({
      id: null,
      text: "",
      isDone: false,
    });
  };
  console.log(todo);
  return (
    <Container>
      <Input
        type="text"
        name="text"
        value={todo.text}
        onChange={addTodo}
      ></Input>
      <Button onClick={onClickChange}>Add</Button>
    </Container>
  );
}

export default TodoAdd;
