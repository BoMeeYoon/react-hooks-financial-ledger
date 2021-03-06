import React from "react";
import styled from "styled-components";
import ExpensesItem from "./ExpensesItem";
import { useExpensesState } from "../contexts/ExpensesContext";

const ExpensesItemWrapper = styled.section`
  height: 50%;
  padding: 0 8px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { 
    display: none;
  }
`;

function ExpensesItemList() {
  const { expenses, filter, filterExpenses } = useExpensesState();
  return (
    <ExpensesItemWrapper>
      {
        (filter === "all" ? expenses : filterExpenses).map(expense => 
          (
            <ExpensesItem key={expense.id} {...expense}/>
          )
        )
      }
    </ExpensesItemWrapper>
  )
}

export default ExpensesItemList;