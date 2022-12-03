import React, { useState } from "react";
import styled from "styled-components";
import TodoAdd from "../TodoAdd";
import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoList from "../TodoList";

const Container = styled.div`
  height: 100vh;
  justify-content: center;
  background-color: #6e6753;
  padding: 30px;
`;

const TodoContainer = styled.div`
  border-radius: 20px;
  background-color: white;
  width: 370px;
  padding: 20px;
  margin-right: 30px;
  display: inline-block;
`;

const BreakLine = styled.hr`
  margin-bottom: 18px;
`;

const MemoButton = styled.button`
  background-color: #f0c0bb;
  border: none;
  width: 80px;
  height: 40px;
  border-radius: 10px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Memo = styled.input`
  width: 150px;
  height: 150px;
  background-color: #fefae0;
  margin-right: 20px;
  box-shadow: black 0px 5px 15px;
`;

const MemoWrapper = styled.div`
  display: inline-block;
`;
function MainPage() {
  const [todos, setTodos] = useState([]);
  const [memos, setMemos] = useState([]);
  console.log(todos);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const changeIsDone = (id) => {
    var currentTodo;
    for(var i  = 0; i < todos.length; i++)
    {
      if(todos[i]['id'] == id) 
      {
        currentTodo = todos[i]; 
      }
    }

    currentTodo.isDone = !currentTodo.isDone;
    setTodos([...todos]);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };

  const addMemo = () => {
    const newMemo = { text: "1" };
    const temp = [...memos, newMemo];
    setMemos(temp);
  };
  console.log(memos);
  return (
    <Container>
      <TodoContainer>
        <TodoDate />
        {/* <MemoButton onClick={addMemo}>+ MEMO</MemoButton> */}
        <TodoLeft todos={todos} />
        <BreakLine></BreakLine>
        <TodoAdd todos={todos} updateTodo={addTodo} />
        <TodoList
          todos={todos}
          switchStatus={changeIsDone}
          deleteTodo={removeTodo}
        />
      </TodoContainer>
    </Container>
  );
}

export default MainPage;
{
  /* <MemoWrapper>
      //   {/* <Memo></Memo> */
}
//   {memos.map((memo) => (
//     <Memo></Memo>
//   ))}
// </MemoWrapper> */}
