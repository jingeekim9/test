import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Text = styled.div`
  font-size: 18px;
  color: #106cde;
  font-weight: 700;
`;

function TodoLeft({ todos }) {
  const completed = todos.filter((todo) => todo.isDone == true);
  return (
    <Wrapper>
      <Text>
        {todos.length} todos, {completed.length} completed
      </Text>
    </Wrapper>
  );
}

export default TodoLeft;
