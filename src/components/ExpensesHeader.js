import React from 'react';
import styled from "styled-components";
import { darkGrayBlue, hotPink } from "../constants/color.js";

const ExpensesHeaderBlock = styled.header`
 
  heigth: 25%;
  padding: 12px 24px 10px;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  font-weight: bold;
  color: ${darkGrayBlue};

  p {
    margin: 10px 0 0;
    padding: 0;
    font-size: 18px;
  }

  span {
    color: ${hotPink};
  }
`
function ExpensesHeader() {
  const date = new Date();
  const dateString = date.toLocaleDateString('ko-KR', {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return <ExpensesHeaderBlock>
    <h1>오늘의 지출</h1>
    <p className="date">{dateString}</p>
    <p className="total-amount">총 지출 : 
      <span> -100원</span>
    </p>
  </ExpensesHeaderBlock>
}

export default ExpensesHeader