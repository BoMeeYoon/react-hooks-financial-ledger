import React, { useMemo } from "react";
import { useExpensesState } from "../contexts/ExpensesContext";
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
`;
const calculateTotalAmount = expenses => 
  expenses.reduce((acc, expense) => {
    acc -= expense.amount;
    return acc;
  }, 0);
;
function ExpensesHeader() {
  const { expenses } = useExpensesState();
  
  const date = new Date();
  const dateString = useMemo(()=> 
    date.toLocaleDateString("ko-KR", 
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }), [date]
  );
  
  const total = useMemo(() => calculateTotalAmount(expenses), [expenses]);
  
  return (
    <ExpensesHeaderBlock>
      <h1>오늘의 지출</h1>
      <p className="date">{dateString}</p>
      <p className="total-amount">
        총 지출 :<span> {total}원</span>
      </p>
    </ExpensesHeaderBlock>
  );
}

export default ExpensesHeader;
