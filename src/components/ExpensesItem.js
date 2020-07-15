import React, { useState } from "react";
import styled from "styled-components";
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { hotPink, softGrayBlue, cMeal, cGrocery, cTrans, cLiving, cMedical } from "../constants/color";
import ExpensesUpdateModal from "./ExpensesUpdateModal";
import ExpensesDeleteModal from "./ExpensesDeleteModal";

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
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const toggleHandler = () => setOpen(!open);
  const checkHandler = () => setCheck(!check)

  return (
    <>
      {
        open && (
          <ExpensesUpdateModal open={open} toggleHandler={toggleHandler} data={{id, category, title, content, amount}} />
        )
      }
      {
        check && (
          <ExpensesDeleteModal check={check} checkHandler={checkHandler} id={id}/>
        )
      }
      <ExpensesItemBlock>
        <ExpensesCategoryItem category={category}>{title}</ExpensesCategoryItem>
        <p className="content">{content}</p>
        <p className="amount">{amount}원</p>
        <ExpensesBtn open={open} onClick={toggleHandler}><MdModeEdit/></ExpensesBtn>
        <ExpensesBtn className="item-delete" check={check} onClick={checkHandler}><MdDelete/></ExpensesBtn>
      </ExpensesItemBlock>
    </>
  )
}

export default ExpensesItem;