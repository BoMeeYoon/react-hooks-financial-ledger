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
const ExpensesItemWrapper = styled.section`
  height: 50%;

  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { 
    display: none;
  }
`;
const ExpensesItemBlock = styled.div`
  display: flex;
  align-items: center;

  width: 95%;

  margin: 12px auto 0;
  font-size: 14px;
  font-weight: bold;

  p.title {
    flex: 1;
  };

  p.amount {
    width: 70px;

  }
`;

const ExpensesCategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
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

function ExpensesItem() {
  return (
    <ExpensesItemWrapper>
      <ExpensesItemBlock>
        <ExpensesCategoryItem>식사</ExpensesCategoryItem>
        <p className="title">이모식당</p>
        <p className="amount">-100원</p>
        <ExpensesBtn><MdModeEdit/></ExpensesBtn>
        <ExpensesBtn className="item-delete"><MdDelete/></ExpensesBtn>
      </ExpensesItemBlock>
    </ExpensesItemWrapper>
  )
}

export default ExpensesItem;