import React from "react";
import styled from "styled-components";
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { hotPink, softGrayBlue, cMeal, cGrocery, cTrans, cLiving, cMedical } from "../constants/color";

const itemsBackground = {
  meal : cMeal,
  grocery : cGrocery,
  transportation : cTrans,
  living : cLiving,
  medical : cMedical
};

const ExpensesItemBlock = styled.div`
  display: flex;
  align-items: center;

  width: 95%;

  margin: 12px auto 0;
  font-size: 14px;
  font-weight: bold;

  p.content {
    flex: 1;
  };

  p.amount {
    width: 70px;
    margin-right: 1rem;
    color: ${hotPink};
    text-align: end;
  }
`;

const ExpensesCategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 40px;
  margin-right: 16px;
  border-radius: 8px;
     
  background-color: ${({category = "meal"}) => itemsBackground[category]}
`

const ExpensesBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 20px;

  cursor: pointer;
  transition: 0.2s;
  
  &:hover > svg {
    fill: ${softGrayBlue}
  };

  &.item-delete:hover > svg {
    fill: ${hotPink}
  };
`

function ExpensesItem({id, category, title, content, amount}) {
  return (
    <ExpensesItemBlock>
      <ExpensesCategoryItem category={category}>{title}</ExpensesCategoryItem>
      <p className="content">{content}</p>
      <p className="amount">{amount}원</p>
      <ExpensesBtn><MdModeEdit/></ExpensesBtn>
      <ExpensesBtn className="item-delete"><MdDelete/></ExpensesBtn>
    </ExpensesItemBlock>
  )
}

export default ExpensesItem;