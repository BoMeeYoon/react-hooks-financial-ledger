import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { useExpensesDispatch } from "../contexts/ExpensesContext";
import useInputs from '../hooks/useInputs';
import titles from "../constants/titles";

const ExpenseModalBtns = styled.div`
    width: 100%;
    hight: 50px;
    display: flex;
    justify-content: flex-end;
`

const ExpenseTextBlock = styled.div`
    padding: 1rem;
    h1 {
        margin: 0;
        font-size: 1.5rem;
    }
`

const ExpenseContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-bottom: 2rem;
    p {
        padding-bottom: 0;
        margin-bottom: 0;
        font-size: 1.125rem;
        font-weight: bold;
    }
    .input {
        height: 1.2rem;
        padding: 2px;
    }
    select {
        height: 2rem;
        padding: 0;
        font-size: 14px;
    }
`

function ExpensesCreateModal({open, toggleHandler}) {
  const nextId = useRef(8);
  const initialInputs = {
      content:'',
      amount: 0,
      category: ''
  };

  const [{content, amount, category}, onChange, reset] = useInputs(initialInputs);
  
  const dispatch = useExpensesDispatch();
    
  const submitHandler = useCallback(e => {
      e.preventDefault();
      dispatch({
          type:'CREATE',
          expense: {
              id: nextId.current,
              category,
              title : titles[0][category],
              content,
              amount : Number(amount)
          }
      });
      toggleHandler();
      reset();
      nextId.current +=1;
    }, [dispatch, toggleHandler, reset, amount, category, content]
  );

  return (
    <Modal>
      <ExpenseTextBlock>
        <h1>지출등록</h1>
        <ExpenseContentBlock>
            <p>내용</p>
            <input type="text" name="content" value={content} className="input" onChange={onChange}/>
            <p>금액</p>
            <input type="number" name="amount" value={amount} className="input" onChange={onChange}/>
            <p>카테고리</p>
            <select name="category" value={category} onChange={onChange}>
                <option value="all">전체</option>
                <option value="meal">식사</option>
                <option value="grocery">식료품</option>
                <option value="transportation">교통</option>
                <option value="living">생활</option>
                <option value="medical">의료</option>
            </select>
        </ExpenseContentBlock>
      </ExpenseTextBlock>
      <ExpenseModalBtns>
          <Button type="cancel" text="취소" onClick={toggleHandler} />
          <Button type="submit" text="등록" onClick={submitHandler}/>
      </ExpenseModalBtns>
    </Modal>        
  )
}
export default ExpensesCreateModal