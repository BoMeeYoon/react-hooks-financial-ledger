import React from "react";
import styled from "styled-components";
import { liteGray, semiDarkGrayBlue } from "../constants/color";

const ExpensesCategoryBlock = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 90%;
  height: 5%;
  margin: 0 auto;
  padding: 10px;
  border-top: 2px solid ${semiDarkGrayBlue};
  border-bottom: 2px solid ${semiDarkGrayBlue};

  font-size: 18px;
  font-weight: bold;

  select {
    width: 25%;

    margin-right: 10px;
    padding: 5px;
    border: transparent;
    border-radius: 4px;

    font-size: 13px;
    text-align: center;
    color: #555;
    background-color: ${liteGray};
    box-siaing: border-box;

    cursor: pointer;
  }
`;


function ExpensesCategory() {
  return <ExpensesCategoryBlock>
    <label htmlFor="category"></label>
    <select name="category" id="main-category">
      <option value="all">전체</option>
      <option value="meal">식사</option>
      <option value="grocery">식료품</option>
      <option value="transportation">교통</option>
      <option value="living">생활</option>
      <option value="medical">의료</option>
    </select>
  </ExpensesCategoryBlock>
}

export default ExpensesCategory;