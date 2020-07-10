import React from "react";
import styled from "styled-components";
import ExpensesHeader from "./ExpensesHeader.js";
import ExpensesCategory from "./ExpensesCategory.js";
import ExpensesItem from "./ExpensesItem.js";
import ExpensesCreate from "./ExpensesCreate.js"

const ExpensesTemplateBlock = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 24rem;
  height: 38rem;

  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  background-color: white;
`;

function ExpensesTemplate() {
  return<ExpensesTemplateBlock>
    <ExpensesHeader />
    <ExpensesCategory />
    <ExpensesItem />
    <ExpensesCreate />
  </ExpensesTemplateBlock>
}

export default ExpensesTemplate