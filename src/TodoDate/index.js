import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 30px;
`;

const DayName = styled.div`
  font-size: 20px;
  color: #868e96;
  margin-bottom: 40px;
`;

function TodoDate() {
  const today = new Date();
  console.log(today);
  const dayName = today.toLocaleString("en-US", { weekday: "long" });
  const dateString = today.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Wrapper>
      <Title>{dateString}</Title>
      <DayName>{dayName}</DayName>
    </Wrapper>
  );
}

export default TodoDate;
