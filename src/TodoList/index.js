import React, { useState } from "react";
import styled, { css } from "styled-components";
import TodoItem from "../TodoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Check = styled.button`
  border-radius: 50px;
  border: 3px solid #106cde;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  ${(props) =>
    props.isDone &&
    css`
      background-color: #106cde;
    `}
`;

function TodoList({ todos, switchStatus, deleteTodo }) {
  console.log(todos);
  //iterate -> looping the array -> todos
  //for(i in range(10))
  return (
    <Container>
      
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          deleteTodo={deleteTodo}
          switchStatus={switchStatus}
        ></TodoItem>
      ))}
    </Container>
  );
}

export default TodoList;
